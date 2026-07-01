import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import toIco from "to-ico";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const ogImageSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="Nazeem Khodabux - Senior Full-Stack Developer">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#141414"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ddff00"/>
      <stop offset="100%" stop-color="#a8c800"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="80" width="4" height="470" fill="url(#accent)" rx="2"/>
  <text x="120" y="260" fill="#ffffff" font-family="sans-serif" font-size="72" font-weight="700">Nazeem Khodabux</text>
  <text x="120" y="330" fill="#ddff00" font-family="monospace" font-size="28" font-weight="700">SENIOR FULL-STACK DEVELOPER</text>
  <text x="120" y="390" fill="#a3a3a3" font-family="monospace" font-size="22">E-commerce - ERP - Legacy Migrations - LLM Integrations</text>
  <text x="120" y="440" fill="#737373" font-family="monospace" font-size="20">Curepipe, Mauritius - 10+ Years - Available Worldwide</text>
  <text x="120" y="520" fill="#525252" font-family="monospace" font-size="18">nazeemkhodabux.com</text>
</svg>`;

function renderSvgToPng(svg, width) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { loadSystemFonts: true },
  });

  return resvg.render().asPng();
}

const faviconSvg = fs.readFileSync(path.join(publicDir, "favicon.svg"), "utf8");

const pngSizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  pngSizes.map((size) => sharp(Buffer.from(faviconSvg)).resize(size, size).png().toBuffer()),
);

fs.writeFileSync(path.join(publicDir, "favicon.ico"), await toIco(pngBuffers));
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
fs.writeFileSync(path.join(publicDir, "og-image.png"), renderSvgToPng(ogImageSvg, 1200));

console.log("Generated favicon.ico, apple-touch-icon.png, og-image.png");
