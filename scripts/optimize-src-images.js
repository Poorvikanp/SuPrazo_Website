import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_IMAGES = path.join(__dirname, "..", "src", "assets", "images");
const SRC_OUTPUT_DIR = path.join(SRC_IMAGES, "optimized");
const WIDTHS = [320, 640, 1024, 1920];
const QUALITY = { webp: 80, avif: 70, blur: 30 };

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
  ensureDir(SRC_OUTPUT_DIR);
  const files = fs
    .readdirSync(SRC_IMAGES)
    .filter((f) => /\.(png|jpe?g)$/i.test(f))
    .sort();
  for (const file of files) {
    const inputPath = path.join(SRC_IMAGES, file);
    const baseName = path.parse(file).name;
    console.log(`Optimizing src/assets/images/${file}...`);
    await optimizeImage(inputPath, SRC_OUTPUT_DIR, baseName);
  }
  console.log("src/assets/images optimization complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
