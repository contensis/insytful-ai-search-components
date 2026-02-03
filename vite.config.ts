import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      entryRoot: "lib",
      outDir: "dist/types",
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "InsytfulAISearchComponents",
      formats: ["es", "cjs"],
      fileName: (format) => `insytful-ai-search-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime" ],
      output: { 
        globals: { react: "React", "react-dom": "ReactDOM", "react/jsx-runtime": "jsxRuntime" } 
      },
    },
  },
});
