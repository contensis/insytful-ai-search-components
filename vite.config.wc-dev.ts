/**
 * Vite Dev Server for the Web Component playground.
 *
 * Serves playground-wc/index.html with hot-reload.
 * The entry point (lib/web-component.ts) is loaded as a native ES module
 * during development — Vite transforms it on the fly.
 */

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "playground-wc"),
  css: {
    postcss: resolve(__dirname, "postcss.config.wc.js"),
  },
  server: {
    host: true,
    open: true,
  },
});
