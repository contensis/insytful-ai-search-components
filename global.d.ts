import type React from "react";

declare global {
  interface HTMLElementTagNameMap {
    "insytful-ai-chat-modal": HTMLElement & { props?: unknown };
  }
}

declare module '*.css' {
  const content: string;
  export default content;
}


export {};
