import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Library Input/Output Settings
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: "insytful-ai-search-components",
      fileName: "insytful-ai-search-components"
    },
    // Bundler Options
    // Externalise React Related Imports
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jxs-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': "ReactDOM",
          'react/jxs-runtime': 'react/jxs-runtime'
        }
      }
    }
  },
})
