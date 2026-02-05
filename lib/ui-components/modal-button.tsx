import { forwardRef } from "react";

interface ModalButtonProps {
  toggle: () => void;
  isOpen?: boolean;
}

export const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProps>(
  function ModalButton({ toggle, isOpen }, ref) {
    return (
      <button
        ref={ref}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="ai-search-dialog"
        onClick={toggle}
        className="border-none flex items-center gap-1 px-3 py-4 bg-ai-lib-btn-header-search-bg-default cursor-pointer text-xl font-semibold leading-8 hover:bg-[var(--ai-lib-btn-header-search-bg-hover)]"
      >
        <span className="sr-only">
          {isOpen ? "Close" : "Open"}
        </span>

        <span className="text-[var(--ai-lib-btn-header-search-text)] font-semibold">Search</span>

        {!isOpen ? (
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path className="fill-[var(--ai-lib-btn-header-search-text)]" d="M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.458 5.458 0 0 1 5.453 5.453 5.458 5.458 0 0 1-5.453 5.452 5.458 5.458 0 0 1-5.452-5.452 5.458 5.458 0 0 1 5.452-5.453Z" />
          </svg>
        ) : (
          <svg
            focusable="false"
            aria-hidden="true"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path className="fill-[var(--ai-lib-btn-header-search-text)]" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.997.997 0 0 0 5.7 7.11L10.59 12 5.7 16.89a.997.997 0 0 0 1.41 1.41L12 13.41l4.89 4.89a.997.997 0 0 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z" />
          </svg>
        )}
      </button>
    );
  }
);

ModalButton.displayName = "ModalButton";
