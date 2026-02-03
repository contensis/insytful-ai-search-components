/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AI_CONFIG_ID: string
  readonly VITE_AI_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
