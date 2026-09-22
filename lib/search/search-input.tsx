import React, { useState } from "react";
import { useSearchContextSafe, useModeContextSafe } from "./context";

export type SearchInputProps = {
  className?: string;
  /** When true, removes border/focus ring from textarea (for use inside a card wrapper) */
  embedded?: boolean;
  /** Placeholder text override */
  placeholder?: string;
  /** Called with the query on submit — use to open the modal, navigate, etc.
   *  Required when rendered outside Search.Root (e.g. inside Search.Overview). */
  onSubmit?: (query: string) => void;
  /** Disable while a request is in flight. Only read outside Search.Root;
   *  inside Root the context's `loading` wins. */
  disabled?: boolean;
};

function ClassicIcon() {
  return (
    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z" />
    </svg>
  );
}

/**
 * Search.Input — the question box.
 *
 * State is exposed as data attributes on the <form> for styling:
 * `data-mode="ai|classic"`, `data-embedded`, `data-has-messages`.
 */
export function SearchInput({
  className,
  embedded = false,
  placeholder,
  onSubmit,
  disabled = false,
}: SearchInputProps) {
  // Optional so the input can live outside Search.Root (Search.Overview
  // renders it for follow-ups). Without Root, `onSubmit` is the only sink.
  const searchCtx = useSearchContextSafe();
  const loading = searchCtx ? searchCtx.loading : disabled;
  const ctx = useModeContextSafe();
  const isClassic = ctx ? ctx.mode !== "ai" : false;

  const [input, setInput] = useState("");
  const hasMessages = (searchCtx?.messages.length ?? 0) > 0;

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");

    // If onSubmit is provided, let the consumer handle it entirely
    // (e.g. hero input navigates in classic mode, opens modal in AI mode)
    if (onSubmit) {
      onSubmit(trimmed);
      return;
    }

    if (!searchCtx) return; // no Root and no onSubmit: nowhere to send it

    try {
      await searchCtx.onSend(trimmed);
    } catch {
      setInput(trimmed);
    }
  };

  const label = isClassic ? "Search" : "Ask a question";

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleSend();
      }}
      className={`insytful-search-message-input ${className ?? ""}`.trim()}
      data-mode={isClassic ? "classic" : "ai"}
      {...(embedded ? { "data-embedded": "" } : {})}
      {...(hasMessages ? { "data-has-messages": "" } : {})}
    >
      <div className="insytful-search-message-input-icon">
        {isClassic ? <ClassicIcon /> : <AiIcon />}
      </div>

      {!isClassic && !embedded && (
        <div className="insytful-search-message-input-bg">
          <div className="insytful-search-message-input-glow" aria-hidden="true" />
        </div>
      )}

      <textarea
        rows={1}
        value={input}
        disabled={loading}
        placeholder={placeholder ?? label}
        aria-label={label}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            handleSend();
          }
        }}
        className="insytful-search-message-input-textarea"
      />

      <button
        type="submit"
        disabled={loading}
        className="insytful-search-message-input-btn"
        aria-label={isClassic ? "Search" : "Send message"}
      >
        <SendIcon />
      </button>
    </form>
  );
}

SearchInput.displayName = "Search.Input";
