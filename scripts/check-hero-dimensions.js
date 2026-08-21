import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const files = [
  path.join(__dirname, "..", "src", "assets", "images", "hero1.png"),
  path.join(__dirname, "..", "src", "assets", "images", "hero2.png"),
  path.join(__dirname, "..", "public", "images", "Hero3.png"),
  path.join(__dirname, "..", "public", "images", "hero4.png"),
];

async function main() {
  for (const file of files) {
    const meta = await sharp(file).metadata();
    console.log(`${path.basename(file)}: ${meta.width}x${meta.height} aspect=${(meta.width / meta.height).toFixed(2)}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
