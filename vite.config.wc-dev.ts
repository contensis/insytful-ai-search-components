/**
 * Vite Dev Server for the Web Component playground.
 *
 * Uses the project root so lib/ imports resolve naturally.
 * The playground HTML is served as a custom entry via appType + input.
 */

import { defineConfig } from "vite";
import { cssConfig } from "./scripts/postcss-low-specificity";

export default defineConfig({
  css: cssConfig,
  server: {
    host: true,
    open: "/playground-wc/index.html",
  },
});
