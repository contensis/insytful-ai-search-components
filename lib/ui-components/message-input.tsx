import { useState } from "react";
import "./message-input.scss";

interface MessageInputProps {
  isClassic?: boolean;
  onSend: (message: string) => Promise<void>;
  disabled?: boolean;
}

export function MessageInput({
  isClassic,
  onSend,
  disabled = false,
}: MessageInputProps) {
  const [input, setInput] = useState("");

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");
    await onSend(trimmed);
  }

  return (
    <form onSubmit={handleSend} className="message-input">
      {isClassic ? (
        <div className="message-input__icon">
          <svg
            className="absolute z-20 top-[1rem] left-[1rem]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="var(--ai-lib-text-default)"
              d="M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z"
            />
          </svg>
        </div>
      ) : (
        <div className="message-input__icon">
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
              fill="var(--ai-lib-text-default)"
              d="M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"
            />
          </svg>
        </div>
      )}

      {!isClassic && (
        <div className="message-input__textarea-wrapper">
          <div className="message-input__glow" aria-hidden="true" />
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
            handleSend();
          }
        }}
        className="message-input__textarea"
      />

      <button
        type="submit"
        disabled={disabled}
        className="message-input__button"
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
              fill="var(--ai-lib-btn-icon-search-icon)"
              d="M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="var(--ai-lib-btn-icon-search-icon)"
                d="M0 0h16v16H0z"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  );
}
