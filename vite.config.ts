/**
 * Vite Build Configuration for Insytful AI Search Components Library
 *
 * Builds a React compound component library (Radix-style):
 * - ES modules only
 * - React 17+ compatible (classic JSX runtime)
 * - Externalises react/react-dom (peer dependencies)
 * - Bundles the RAG hooks (lib/api) and focus-trap
 * - Generates TypeScript declaration files
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({ jsxRuntime: "classic" }),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      entryRoot: "lib",
      outDir: "dist/types",
      insertTypesEntry: true,
      exclude: ["lib/**/*.test.ts", "lib/**/*.test.tsx", "lib/**/__tests__/**"],
    }),
  ],
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      fileName: () => `insytful-ai-search-components.js`,
    },
    rollupOptions: {
      external: (id) => {
        return (
          id === "react" ||
          id === "react-dom" ||
          id === "react-dom/client" ||
          id.startsWith("react/") ||
          id.startsWith("react-dom/") ||
          id === "react-markdown" ||
          id === "rehype-external-links"
        );
      },
      output: {
        interop: "auto",
        preserveModules: false,
      },
    },
  },
});
