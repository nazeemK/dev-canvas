import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const faviconSvg = path.join(publicDir, "favicon.svg");
const ogImageSvg = path.join(publicDir, "og-image.svg");

const pngSizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  pngSizes.map((size) => sharp(faviconSvg).resize(size, size).png().toBuffer()),
);

fs.writeFileSync(path.join(publicDir, "favicon.ico"), await toIco(pngBuffers));
await sharp(faviconSvg).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
await sharp(ogImageSvg).resize(1200, 630).png().toFile(path.join(publicDir, "og-image.png"));

console.log("Generated favicon.ico, apple-touch-icon.png, og-image.png");
