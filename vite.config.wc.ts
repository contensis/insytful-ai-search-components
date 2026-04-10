/**
 * Vite Build Configuration for Insytful AI Search — Web Component (Standalone)
 *
 * Builds a self-contained IIFE bundle that registers <insytful-search> as a custom element.
 * - Zero external dependencies (no React, no peer deps)
 * - Loadable via <script> tag on any HTML page
 * - Bundles focus-trap, marked, DOMPurify, and all CSS
 * - Uses a separate Tailwind config to keep the React build output unchanged
 */

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    postcss: "./postcss.config.wc.js",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/web-component.ts"),
      formats: ["iife"],
      name: "InsytfulSearch",
      fileName: () => "insytful-search.js",
    },
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        interop: "auto",
        preserveModules: false,
      },
    },
  },
});
