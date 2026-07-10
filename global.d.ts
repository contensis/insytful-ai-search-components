/// <reference types="vite/client" />

declare module '*.css' {
  const content: string;
  export default content;
}

// Augment React's HTML attributes to include `inert` (supported in browsers,
// but missing from @types/react <19).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace React {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    inert?: string;
  }
}

export {};
