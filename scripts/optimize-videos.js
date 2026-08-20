import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ffmpeg from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VIDEOS_DIR = path.join(__dirname, "..", "public", "videos");
const OUTPUT_DIR = path.join(VIDEOS_DIR, "optimized");
const POSTERS_DIR = path.join(__dirname, "..", "public", "images", "optimized");

const VIDEO_CODEC = "libx264";
const AUDIO_CODEC = "aac";
const MOBILE_SCALE = "640:-2";
const DESKTOP_SCALE = "1280:-2";
const CRF = { mobile: 28, desktop: 23 };

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getVideoInfo(inputPath) {
  try {
    const output = execSync(
      `"${ffmpeg}" -i "${inputPath}" 2>&1`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }
    );
    const match = output.match(/Stream\s+\d+:.*?:\s*(\d+)x(\d+)/);
    if (match) return { width: parseInt(match[1]), height: parseInt(match[2]) };
  } catch (e) {
    const err = e.stderr?.toString?.() || e.message;
    const match = err.match(/Stream\s+\d+:.*?:\s*(\d+)x(\d+)/);
    if (match) return { width: parseInt(match[1]), height: parseInt(match[2]) };
  }
  return null;
}

async function processVideo(inputPath, baseName) {
  const info = getVideoInfo(inputPath);
  console.log(`Processing ${path.basename(inputPath)} (${info ? `${info.width}x${info.height}` : "unknown"})...`);

  const mobilePath = path.join(OUTPUT_DIR, `${baseName}-mobile.mp4`);
  const desktopPath = path.join(OUTPUT_DIR, `${baseName}-desktop.mp4`);
  const posterPath = path.join(POSTERS_DIR, `${baseName}-poster.webp`);

  const compress = (outputPath, scale, crf) => {
    execSync(
      `"${ffmpeg}" -y -i "${inputPath}" -vf "scale=${scale}" -c:v ${VIDEO_CODEC} -crf ${crf} -preset slow -c:a ${AUDIO_CODEC} -b:a 128k -movflags +faststart -an -sn "${outputPath}"`,
      { encoding: "utf8", stdio: "pipe" }
    );
  };

  compress(mobilePath, MOBILE_SCALE, CRF.mobile);
  compress(desktopPath, DESKTOP_SCALE, CRF.desktop);

  execSync(
    `"${ffmpeg}" -y -i "${inputPath}" -ss 00:00:01 -vframes 1 -vf "scale=1280:-2" "${posterPath}"`,
    { encoding: "utf8", stdio: "pipe" }
  );

  const origSize = fs.statSync(inputPath).size;
  const mobileSize = fs.statSync(mobilePath).size;
  const desktopSize = fs.statSync(desktopPath).size;
  const posterSize = fs.statSync(posterPath).size;

  console.log(`  Original: ${(origSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Mobile:   ${(mobileSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Desktop:  ${(desktopSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Poster:   ${(posterSize / 1024).toFixed(0)} KB`);

  return { origSize, mobileSize, desktopSize, posterSize, info };
}

async function main() {
  console.log("Starting video optimization...\n");
  ensureDir(OUTPUT_DIR);
  ensureDir(POSTERS_DIR);

  const files = fs
    .readdirSync(VIDEOS_DIR)
    .filter((f) => /\.mp4$/i.test(f))
    .sort();

  const manifest = {};
  for (const file of files) {
    const inputPath = path.join(VIDEOS_DIR, file);
    const baseName = path.parse(file).name;
    const result = await processVideo(inputPath, baseName);
    manifest[file] = result;
  }

  const manifestPath = path.join(OUTPUT_DIR, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${manifestPath}`);
  console.log("\nVideo optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
