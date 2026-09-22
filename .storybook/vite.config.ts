import { defineConfig } from "vite";
import { cssConfig } from "../scripts/postcss-low-specificity";
/**
 * Deliberately minimal. @storybook/builder-vite auto-discovers and merges
 * the project root's vite.config.ts by default, which would pull in
 * vite-plugin-dts (writing into dist/types on every Storybook run) and the
 * library's rollup externals. Pointing Storybook at this config instead
 * keeps it isolated from the publishable build. The low-specificity CSS
 * step is shared so Storybook renders the sheet exactly as published.
 */
export default defineConfig({ css: cssConfig });
