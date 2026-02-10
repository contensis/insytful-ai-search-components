import { useState } from "react";

interface MessageInputProps {
  hasMessages: boolean;
  isClassic?: boolean;
  onSend: (message: string) => Promise<void>;
  disabled?: boolean;
}

export function MessageInput({
  hasMessages,
  isClassic,
  onSend,
  disabled = false,
}: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");
    await onSend(trimmed);
  }

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleSend();
      }}
      className="insytful-search-message-input w-full max-w-[750px] mx-auto relative flex"
    >
      {isClassic ? (
        <div className="insytful-search-message-input-icon absolute top-[18px] left-[16px] z-20">
          <svg
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
        <div className="insytful-search-message-input-icon absolute top-[18px] left-[16px] z-20">
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

      {!isClassic && (
        <div className="insytful-search-message-input-bg absolute inset-0 h-full w-full max-w-[750px] rounded-[16px] group-focus-within:opacity-60">
          <div
            className={`pointer-events-none absolute inset-[-4px] rounded-[16px] opacity-60 blur-[14px] transition-opacity z-0 ${!hasMessages ? "bg-gradient-to-br from-[#35d2c5] via-[#35d2c5] to-[#1d70b8]" : ""}`}
            aria-hidden="true"
          />
        </div>
      )}

      <textarea
        rows={1}
        value={input}
        disabled={disabled}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            handleSend();
          }
        }}
        className="insytful-search-message-input-textarea relative z-10 w-full py-[16px] pr-[64px] pl-[48px] resize-none rounded-[16px] border border-[var(--insytful-semantic-search-field-stroke)] bg-white min-h-[62px] max-h-[240px] overflow-y-auto outline-none"
      />

      <button
        type="submit"
        disabled={disabled}
        className="insytful-search-message-input-btn z-20 absolute right-[8px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[var(--insytful-btn-icon-search-bg-default)] text-white border-none cursor-pointer hover:bg-[var(--insytful-btn-icon-search-bg-hover)] disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Send message"
      >
        <span className="sr-only">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
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
