import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PUBLIC_IMAGES = path.join(__dirname, "..", "public", "images");
const SRC_IMAGES = path.join(__dirname, "..", "src", "assets", "images");
const OUTPUT_DIR = path.join(PUBLIC_IMAGES, "optimized");
const SRC_OUTPUT_DIR = path.join(SRC_IMAGES, "optimized");

const WIDTHS = [320, 640, 1024, 1920];
const QUALITY = { webp: 80, avif: 70, blur: 30 };
const FORMATS = ["webp", "avif"];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function optimizeImage(inputPath, outputBaseDir, baseName) {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const origWidth = meta.width || 1920;
  const targetHeights = WIDTHS.filter((w) => w <= origWidth).concat(origWidth);
  const uniqueHeights = [...new Set(targetHeights)].sort((a, b) => a - b);

  const results = {};

  for (const format of FORMATS) {
    for (const width of uniqueHeights) {
      const fileName = `${baseName}-${width}.${format}`;
      const outPath = path.join(outputBaseDir, fileName);
      const height = Math.round((meta.height * width) / meta.width);
      await image
        .clone()
        .resize(width, height, { fit: "inside", withoutEnlargement: true })
        .toFormat(format, { quality: QUALITY[format] })
        .toFile(outPath);
      results[`${format}-${width}`] = fileName;
    }
  }

  const blurPath = path.join(outputBaseDir, `${baseName}-blur.webp`);
  const blurHeight = Math.max(1, Math.round((20 * meta.height) / meta.width));
  await image
    .clone()
    .resize(20, blurHeight, { fit: "inside", withoutEnlargement: true })
    .toFormat("webp", { quality: QUALITY.blur })
    .toFile(blurPath);
  results.blur = `${baseName}-blur.webp`;

  const stat = fs.statSync(inputPath);
  results.originalSize = stat.size;
  results.width = meta.width;
  results.height = meta.height;
  return results;
}

async function processDir(dir, outputDir) {
  if (!fs.existsSync(dir)) return [];
  ensureDir(outputDir);
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f))
    .sort();
  const results = [];
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const baseName = path.parse(file).name;
    console.log(`Optimizing ${path.relative(process.cwd(), inputPath)}...`);
    const result = await optimizeImage(inputPath, outputDir, baseName);
    results.push({ file, baseName, inputPath, outputDir, ...result });
  }
  return results;
}

async function main() {
  console.log("Starting image optimization...\n");
  const publicResults = await processDir(PUBLIC_IMAGES, OUTPUT_DIR);
  const srcResults = await processDir(SRC_IMAGES, SRC_OUTPUT_DIR);
  const all = [...publicResults, ...srcResults];

  const manifest = {};
  for (const r of all) {
    const relInput = path.relative(path.join(__dirname, ".."), r.inputPath);
    const relOutput = path.relative(path.join(__dirname, ".."), r.outputDir);
    manifest[relInput] = {
      originalSize: r.originalSize,
      width: r.width,
      height: r.height,
      variants: Object.fromEntries(
        Object.entries(r).filter(([k]) => k.endsWith(`-${WIDTHS[0]}`) || k.endsWith(`-${WIDTHS[1]}`) || k.endsWith(`-${WIDTHS[2]}`) || k.endsWith(`-${WIDTHS[3]}`) || k === "blur")
      ),
    };
  }

  const manifestPath = path.join(__dirname, "..", "public", "images", "optimized", "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${manifestPath}`);

  let totalSaved = 0;
  for (const r of all) {
    const variants = Object.entries(r).filter(([k]) => /^(webp|avif)-\d+$/.test(k));
    const smallest = variants.sort(([, a], [, b]) => {
      const sizeA = fs.statSync(path.join(r.outputDir, a)).size;
      const sizeB = fs.statSync(path.join(r.outputDir, b)).size;
      return sizeA - sizeB;
    })[0];
    if (smallest) {
      const saved = r.originalSize - fs.statSync(path.join(r.outputDir, smallest[1])).size;
      totalSaved += saved;
    }
  }
  console.log(`\nTotal original size: ${(all.reduce((s, r) => s + r.originalSize, 0) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Estimated savings per image (smallest variant): ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log("\nImage optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
