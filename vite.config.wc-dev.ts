/**
 * Vite Dev Server for the Web Component playground.
 *
 * Uses the project root so lib/ imports resolve naturally.
 * The playground HTML is served as a custom entry via appType + input.
 */

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    postcss: "./postcss.config.wc.js",
  },
  server: {
    host: true,
    open: "/playground-wc/index.html",
  },
});
