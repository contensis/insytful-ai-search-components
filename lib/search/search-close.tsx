import React, { forwardRef } from "react";
import { useSearchContext } from "./context";

export type SearchCloseProps = {
  children?: React.ReactNode;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Default ✕ icon used when the consumer passes no children.
 * Uses `currentColor` so the colour follows `--insytful-btn-close-icon`
 * via the `.insytful-search-close` class.
 */
function DefaultCloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/**
 * Search.Close — Radix-style close button. Place inside `Search.Portal`.
 *
 * Renders a `<button>` by default (styled via `.insytful-search-close` and
 * `--insytful-btn-close-*` tokens). Use `asChild` to merge the click handler
 * onto your own element instead.
 */
export const SearchClose = forwardRef<HTMLButtonElement, SearchCloseProps>(
  function SearchClose({ children, asChild = false, onClick, className, ...props }, ref) {
    const { onOpenChange } = useSearchContext("Search.Close");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) onOpenChange(false);
    };

    const closeProps = {
      "aria-label": props["aria-label"] ?? "Close search",
      onClick: handleClick,
      ...props,
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<Record<string, unknown>>;
      const childOnClick = (child.props.onClick as ((e: React.MouseEvent) => void) | undefined);
      const childClassName = (child.props.className as string | undefined) ?? "";
      // eslint-disable-next-line react-hooks/refs
      return React.cloneElement(child, {
        ...closeProps,
        className: `${childClassName} ${className ?? ""}`.trim() || undefined,
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
          childOnClick?.(e);
          if (!e.defaultPrevented) onOpenChange(false);
        },
        ref,
      });
    }

    return (
      <button
        ref={ref}
        type="button"
        className={`insytful-search-close ${className ?? ""}`.trim()}
        {...closeProps}
      >
        {children ?? <DefaultCloseIcon />}
      </button>
    );
  }
);

SearchClose.displayName = "Search.Close";
