import { mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const sharp = require(resolve(
  process.cwd(),
  "node_modules/.pnpm/sharp@0.34.5/node_modules/sharp"
));

const forceFlag = process.argv.includes("f");
const downloadCache = new Map();

const downloadImage = async (url, timelineId) => {
  if (downloadCache.has(url)) {
    console.log(`Using cached: ${downloadCache.get(url)} for ${url}`);
    return downloadCache.get(url);
  }

  try {
    let buffer;
    if (url.startsWith("http")) {
      const response = await fetch(url);
      buffer = await response.arrayBuffer();
    } else {
      const localPath = join(__dirname, "..", "public", url);
      buffer = readFileSync(localPath);
    }

    const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 8);
    const filename = `${hash}.avif`;
    const downloadDir = join(
      __dirname,
      "..",
      "public",
      "timelines",
      timelineId
    );
    if (!existsSync(downloadDir)) mkdirSync(downloadDir, { recursive: true });
    const filepath = join(downloadDir, filename);
    await sharp(Buffer.from(buffer))
      .resize(1200, null, { withoutEnlargement: true })
      .avif({ quality: 80 })
      .toFile(filepath);
    const localPath = `/timelines/${timelineId}/${filename}`;
    downloadCache.set(url, localPath);
    console.log(`Optimized: ${filename} from ${url}`);
    return localPath;
  } catch (error) {
    console.error(`Failed: ${url}`);
    return null;
  }
};

const processTimeline = async (filePath) => {
  let content = readFileSync(filePath, "utf-8");

  const idMatch = content.match(/id:\s*"([^"]+)"/);
  if (!idMatch) {
    console.error("Could not find timeline ID");
    return;
  }
  const timelineId = idMatch[1];

  // Process coverMedia
  const coverMediaRegex =
    /coverMedia:\s*\{[^}]*sourceUrl:\s*"([^"]+)"[^}]*\}/g;
  const coverMatches = [...content.matchAll(coverMediaRegex)];
  for (const match of coverMatches) {
    const fullMatch = match[0];
    if (!forceFlag && fullMatch.includes("src:")) continue;

    const sourceUrl = match[1];
    const localPath = await downloadImage(sourceUrl, timelineId);
    if (localPath) {
      if (fullMatch.includes("src:")) {
        const replacement = fullMatch
          .replace(/src:\s*"[^"]+",?\s*\n?\s*/g, "")
          .replace(/sourceUrl:/, `src: "${localPath}",\n    sourceUrl:`);
        content = content.replace(fullMatch, replacement);
      } else {
        const replacement = fullMatch.replace(
          /sourceUrl:/,
          `src: "${localPath}",\n    sourceUrl:`
        );
        content = content.replace(fullMatch, replacement);
      }
    }
  }

  // Process media arrays
  const mediaRegex = /media:\s*\[([\s\S]*?)\]/g;
  const mediaBlocks = [...content.matchAll(mediaRegex)];
  for (const block of mediaBlocks) {
    const mediaContent = block[1];
    const mediaObjRegex = /\{[^}]*sourceUrl:\s*"([^"]+)"[^}]*\}/g;
    const mediaObjects = [...mediaContent.matchAll(mediaObjRegex)];
    for (const match of mediaObjects) {
      const fullMatch = match[0];
      if (!forceFlag && fullMatch.includes("src:")) continue;

      const sourceUrl = match[1];
      const localPath = await downloadImage(sourceUrl, timelineId);
      if (localPath) {
        if (fullMatch.includes("src:")) {
          const replacement = fullMatch
            .replace(/src:\s*"[^"]+",?\s*\n?\s*/g, "")
            .replace(
              /sourceUrl:/,
              `src: "${localPath}",\n          sourceUrl:`
            );
          content = content.replace(fullMatch, replacement);
        } else {
          const replacement = fullMatch.replace(
            /sourceUrl:/,
            `src: "${localPath}",\n          sourceUrl:`
          );
          content = content.replace(fullMatch, replacement);
        }
      }
    }
  }

  writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
  console.log(`Total unique images: ${downloadCache.size}`);
};

const timelineFile = process.argv.find(
  (arg) => !arg.includes("--") && arg.endsWith(".tsx")
);
if (!timelineFile) {
  console.error("Usage: node download-and-update.mjs <timeline-file-path> [f]");
  process.exit(1);
}

await processTimeline(timelineFile);
console.log("Done!");
