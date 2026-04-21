import React, { useState } from "react";
import { useSearchContext, useModeContextSafe } from "./context";

export type SearchInputProps = {
  className?: string;
  /** When true, removes border/focus ring from textarea (for use inside a card wrapper) */
  embedded?: boolean;
  /** Placeholder text override */
  placeholder?: string;
  /** Called with the query on submit — use to open the modal, navigate, etc. */
  onSubmit?: (query: string) => void;
};

export function SearchInput({ className, embedded = false, placeholder, onSubmit }: SearchInputProps) {
  const { onSend, loading, messages } = useSearchContext("Search.Input");
  const modeCtx = useModeContextSafe();
  const isClassic = modeCtx ? modeCtx.mode !== "ai" : false;

  const [input, setInput] = useState("");
  const hasMessages = messages.length > 0;

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

    try {
      await onSend(trimmed);
    } catch {
      setInput(trimmed);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleSend();
      }}
      className={`insytful-search-message-input w-full relative flex ${embedded ? "" : "max-w-[var(--insytful-modal-max-width)] mx-auto"} ${className ?? ""}`}
    >
      {isClassic ? (
        <div className={`insytful-search-message-input-icon absolute ${embedded ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20`}>
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="var(--insytful-text-default)"
              d="M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
            />
          </svg>
        </div>
      ) : (
        <div className={`insytful-search-message-input-icon absolute ${embedded ? "top-[14px] left-0" : "top-[18px] left-[16px]"} z-20`}>
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="var(--insytful-text-default)"
              d="M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
            />
          </svg>
        </div>
      )}

      {!isClassic && !embedded && (
        <div className="insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[var(--insytful-modal-max-width)] rounded-[var(--insytful-input-card-radius)] group-focus-within:opacity-80">
          <div
            className={`pointer-events-none absolute inset-x-[-2px] top-[2px] -bottom-[10px] rounded-[var(--insytful-input-card-radius)] opacity-50 blur-[14px] transition-opacity z-0 ${
              !hasMessages
                ? "bg-gradient-to-b from-[var(--insytful-semantic-search-field-ai-gradient-start)] to-[var(--insytful-semantic-search-field-ai-gradient-end)]"
                : ""
            }`}
            aria-hidden="true"
          />
        </div>
      )}

      <textarea
        rows={1}
        value={input}
        disabled={loading}
        placeholder={placeholder ?? (isClassic ? "Search" : "Ask a question")}
        aria-label={isClassic ? "Search" : "Ask a question"}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            handleSend();
          }
        }}
        className={`insytful-search-message-input-textarea relative z-10 w-full resize-none bg-[var(--insytful-input-card-bg)] max-h-[240px] overflow-y-auto ${
          embedded
            ? "py-[12px] min-h-[48px] border-0 rounded-none pr-[48px] pl-[32px]"
            : "py-[16px] min-h-[62px] pl-[48px] pr-[64px] rounded-[var(--insytful-input-card-radius)] border border-[var(--insytful-input-card-border)]"
        }`}
      />

      <button
        type="submit"
        disabled={loading}
        className={`insytful-search-message-input-btn z-20 absolute ${embedded ? 'right-0' : 'right-[8px]'} top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50`}
        aria-label={isClassic ? "Search" : "Send message"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <g clipPath="url(#a)">
            <path
              fill="var(--insytful-btn-icon-search-icon)"
              d="M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="var(--insytful-btn-icon-search-icon)"
                d="M0 0h16v16H0z"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  );
}

SearchInput.displayName = "Search.Input";
