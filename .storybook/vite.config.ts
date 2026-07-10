import { defineConfig } from "vite";

/**
 * Deliberately minimal. @storybook/builder-vite auto-discovers and merges
 * the project root's vite.config.ts by default, which would pull in
 * vite-plugin-dts (writing into dist/types on every Storybook run) and the
 * library's rollup externals. Pointing Storybook at this empty config
 * instead keeps it isolated from the publishable build, mirroring
 * vite.config.wc-dev.ts's dedicated dev-server config.
 */
export default defineConfig({});
