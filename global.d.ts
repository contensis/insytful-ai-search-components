/// <reference types="vite/client" />

declare module '*.css' {
  const content: string;
  export default content;
}

// Augment React's HTML attributes to include `inert` (supported in browsers,
// but missing from @types/react <19).
declare namespace React {
  interface HTMLAttributes<T> {
    inert?: string;
  }
}

export {};
