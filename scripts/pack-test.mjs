/**
 * Stamp a freshly-built web-component bundle with a version + label for CMS upload.
 *
 * Reads version from package.json and copies dist/insytful-search.js to
 * dist/insytful-search-v<version>-<label>.js so each iteration gets a unique
 * filename (the filename is the cache-buster when uploaded to the CMS).
 *
 * Usage:
 *   npm run pack:test              → dist/insytful-search-v<version>-t1.js
 *   npm run pack:test -- t2        → dist/insytful-search-v<version>-t2.js
 *   npm run pack:test -- rc1       → dist/insytful-search-v<version>-rc1.js
 *
 * To change the version in the filename, bump the "version" field in package.json.
 */

import { readFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const label = (process.argv[2] ?? "t1").replace(/[^a-z0-9._-]/gi, "");
if (!label) {
  console.error("Invalid label. Use alphanumerics, dot, underscore, or hyphen.");
  process.exit(1);
}

const { version } = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const src = resolve(root, "dist/insytful-search.js");
const dest = resolve(root, `dist/insytful-search-v${version}-${label}.js`);

if (!existsSync(src)) {
  console.error(`Missing ${src}. Run "npm run build:wc" first.`);
  process.exit(1);
}

copyFileSync(src, dest);
console.log(`Packed: dist/insytful-search-v${version}-${label}.js`);
