/**
 * Vite Build Configuration for the Web Component — Storybook demo only.
 *
 * Mirrors vite.config.wc.ts (same entry) but writes to a gitignored
 * directory under stories/ so the
 * Storybook demo build never touches the published dist/ output.
 */

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/web-component.ts"),
      formats: ["iife"],
      name: "InsytfulSearch",
      fileName: () => "insytful-search.js",
    },
    outDir: "stories/web-components/dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        interop: "auto",
        preserveModules: false,
      },
    },
  },
});
