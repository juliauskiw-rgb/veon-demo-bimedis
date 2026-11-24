// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

// The demo is opened both from a static host and straight from dist/index.html (file://, studio screenshots).
// Root-absolute asset paths break on file://, so after the build they are rewritten to relative ones.
let basePath = "/";
const relativeAssets = () => ({
  name: "veon-relative-assets",
  hooks: {
    "astro:config:done": ({ config }) => { basePath = config.base || "/"; },
    "astro:build:done": async ({ dir }) => {
      const b = basePath.replace(/\/+$/, "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const root = fileURLToPath(dir);
      const walk = async (d) => (await Promise.all((await readdir(d, { withFileTypes: true })).map((e) => {
        const p = path.join(d, e.name);
        return e.isDirectory() ? walk(p) : [p];
      }))).flat();
      for (const file of await walk(root)) {
        if (!/\.(html|css)$/.test(file)) continue;
        const depth = path.relative(root, path.dirname(file)).split(path.sep).filter(Boolean).length;
        const prefix = depth ? "../".repeat(depth) : "./";
        const src = await readFile(file, "utf8");
        const out = src
          .replace(new RegExp(`(href|src)="${b}/(?!/)`, "g"), `$1="${prefix}`)
          .replace(new RegExp(`url\\((["']?)${b}/(?!/)`, "g"), `url($1${prefix}`);
        if (out !== src) await writeFile(file, out);
      }
    },
  },
});

export default defineConfig({
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  integrations: [relativeAssets()],
});
