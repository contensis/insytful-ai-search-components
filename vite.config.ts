/**
 * Vite Build Configuration for Insytful AI Search Components Library
 * 
 * This configuration builds a React component library that:
 * - Supports ES modules only (no CommonJS)
 * - Works with React 17+ using legacy ReactDOM.render() API
 * - Externalises peer dependencies to avoid bundling conflicts
 * - Generates TypeScript declaration files
 * - Bundles contensis-rag-react as a regular dependency
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    // React plugin with classic JSX runtime for React 17 compatibility
    // This avoids react/jsx-runtime import issues
    react({ jsxRuntime: 'classic' }),
    // Generate TypeScript declaration files (.d.ts) for consumers
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      entryRoot: "lib",
      outDir: "dist/types",
      insertTypesEntry: true, // Auto-generates types entry in package.json
    }),
  ],
  // SSR configuration - resolves issues with browser-only code
  ssr: {
    noExternal: ['contensis-rag-react'], // Bundle this dependency for SSR compatibility
  },
  build: {
    // target: "esnext",
    // Improve compatibility with Node.js ESM resolution
    commonjsOptions: {
      esmExternals: true, // Treat external ESM dependencies correctly
    },
    // Library mode configuration
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"], // ES modules only - modern bundlers required
      fileName: () => `insytful-ai-search-components.js`,
    },
    rollupOptions: {
      /**
       * External Dependencies Strategy:
       * 
       * We externalise (don't bundle) these dependencies to prevent conflicts:
       * 
       * 1. react/react-dom: Consumers must have their own React (peer dependency)
       *    - Prevents multiple React instances (breaks hooks, context, etc.)
       *    - Function checks all React subpaths (react/jsx-runtime, react-dom/client, etc.)
       * 
       * 2. react-markdown/rehype-external-links: Development-only dependencies
       *    - Used in playground, not in the actual library code
       * 
       * 3. contensis-rag-react: Bundled as regular dependency (NOT externalised)
       *    - Users don't need to install it separately
       *    - Included in the final bundle
       * 
       * Note: We use a function instead of an array to catch all React subpath imports
       */
      external: (id) => {
        return id === 'react' || 
        id === 'react-dom' || 
        id === 'react-dom/client' ||  // Optional - only exists in React 18+
        id.startsWith('react/') ||    // Catches react/jsx-runtime, react/jsx-dev-runtime, etc.
        id.startsWith('react-dom/') || // Catches react-dom subpaths
        id === 'react-markdown' || 
        id === 'rehype-external-links';
      },
      output: { 
        // Improve inter-module dependencies handling
        interop: 'auto',
        // Preserve module structure for better tree-shaking
        preserveModules: false,
        // Global variable names for externalized dependencies (for UMD builds)
        // Not currently used since we only build ES modules, but required by Rollup
        globals: { 
          react: "React", 
          "react-dom": "ReactDOM", 
          "react/jsx-runtime": "jsxRuntime",
          "contensis-rag-react": "ContensisRagReact"
        } 
      },
    },
  },
});
