import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_IMAGES = path.join(__dirname, "..", "public", "images");
const OUTPUT_DIR = path.join(PUBLIC_IMAGES, "optimized");
const WIDTHS = [320, 640, 1024, 1920];
const QUALITY = { webp: 80, avif: 70, blur: 30 };

const MISSING = [
  "make-in-India-logo",
  "meeting-room",
  "product-tech-lab",
  "sufalpra-art",
  "sufalpra-art2",
  "sufalpra",
  "sufalpra1",
  "suprazo-logo",
  "suprazo",
  "suprazo_discussion",
  "suprazo_technology_poster",
  "team-campus",
  "we-build-art",
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function optimizeImage(inputPath, outputBaseDir, baseName) {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const origWidth = meta.width || 1920;
  const targetHeights = WIDTHS.filter((w) => w <= origWidth).concat(origWidth);
  const uniqueHeights = [...new Set(targetHeights)].sort((a, b) => a - b);

  for (const format of ["webp", "avif"]) {
    for (const width of uniqueHeights) {
      const fileName = `${baseName}-${width}.${format}`;
      const outPath = path.join(outputBaseDir, fileName);
      const height = Math.round((meta.height * width) / meta.width);
      await image
        .clone()
        .resize(width, height, { fit: "inside", withoutEnlargement: true })
        .toFormat(format, { quality: QUALITY[format] })
        .toFile(outPath);
    }
  }

  const blurPath = path.join(outputBaseDir, `${baseName}-blur.webp`);
  const blurHeight = Math.max(1, Math.round((20 * meta.height) / meta.width));
  await image
    .clone()
    .resize(20, blurHeight, { fit: "inside", withoutEnlargement: true })
    .toFormat("webp", { quality: QUALITY.blur })
    .toFile(blurPath);
}

async function main() {
  ensureDir(OUTPUT_DIR);
  for (const baseName of MISSING) {
    const inputPath = path.join(PUBLIC_IMAGES, `${baseName}.png`);
    const inputPathJpg = path.join(PUBLIC_IMAGES, `${baseName}.jpg`);
    const actualPath = fs.existsSync(inputPath) ? inputPath : inputPathJpg;
    if (!fs.existsSync(actualPath)) {
      console.log(`Skipping ${baseName} (not found)`);
      continue;
    }
    console.log(`Optimizing ${baseName}...`);
    await optimizeImage(actualPath, OUTPUT_DIR, baseName);
  }
  console.log("Missing images optimization complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
