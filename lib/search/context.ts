import React, { createContext, useContext } from "react";

/**
 * Creates a scoped context with a hook that throws if used outside the provider.
 * Follows the Radix UI pattern for compound component context.
 */
export function createCompoundContext<T>(componentName: string) {
  const Context = createContext<T | null>(null);

  function useCompoundContext(consumerName: string): T {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(
        `<${consumerName}> must be used within <${componentName}>`
      );
    }
    return ctx;
  }

  function useCompoundContextSafe(): T | null {
    return useContext(Context);
  }

  return [Context.Provider, useCompoundContext, useCompoundContextSafe] as const;
}

/* ------------------------------------------------------------------ */
/* SearchContext — provided by Search.Root                              */
/* ------------------------------------------------------------------ */

export type SearchContextValue = {
  // Modal state
  open: boolean;
  onOpenChange: (open: boolean) => void;

  // ARIA IDs
  titleId: string;
  descriptionId: string;

  // RAG config
  options: { config: string; baseUrl: string };

  // Conversation state (from RAGProvider)
  messages: { role: "user" | "assistant"; content: string }[];
  loading: boolean;
  error?: string | null;

  // Actions
  onSend: (msg: string) => Promise<void>;

  // Render delegates
  renderMarkdown?: (markdown: string) => React.ReactNode;
  logo?: React.ReactNode;
  isDevMode: boolean;

  // Portal config
  variant: "modal" | "widget";
  theme?: string;
  offsets?: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
  };
  /** Computed height from data-insytful-modal-offset elements */
  computedOffsetHeight: number;
};

export const [SearchProvider, useSearchContext] =
  createCompoundContext<SearchContextValue>("Search.Root");

/* ------------------------------------------------------------------ */
/* ModeContext — provided by Search.Modes                              */
/* ------------------------------------------------------------------ */

export type ModeContextValue = {
  mode: string;
  onSwitchMode: (mode: string) => void;
};

export const [ModeProvider, useModeContext, useModeContextSafe] =
  createCompoundContext<ModeContextValue>("Search.Modes");
