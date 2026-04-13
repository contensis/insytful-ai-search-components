import React from "react";
import { useSearchContext } from "./context";
import { hash } from "../utilities/hash.util";

export type SearchSuggestionsProps = {
  items?: string[];
  className?: string;
  /**
   * Where suggestions appear relative to the input.
   *
   * - `"above"` (default) — legacy behaviour; suggestions sit before the input.
   * - `"below"` — suggestions appear under the input (useful for "guided
   *   follow-up" UX). Requires the `Search.Portal` layout to be a flex column,
   *   which it is by default.
   */
  position?: "above" | "below";
};

export function SearchSuggestions({ items, className, position = "above" }: SearchSuggestionsProps) {
  const { onSend } = useSearchContext("Search.Suggestions");

  if (!items || items.length <= 0) return null;

  // When position="below" we rely on the parent's `flex-col` layout and apply
  // matching `order` values to the sibling input card via a small wrapper
  // attribute. See search-root.tsx `SearchPortal` — it reads this attribute
  // and sets `order: 1` on its input slot.
  const style: React.CSSProperties | undefined =
    position === "below" ? { order: 2 } : undefined;

  return (
    <div
      data-position={position}
      style={style}
      className={`insytful-search-suggestions-outer w-full overflow-hidden self-stretch ${className ?? ""}`}
    >
      <ul className="insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none">
        {items.map((suggestion, i) => (
          <li
            key={`${i}-${hash(suggestion)}`}
            className="insytful-search-suggestions-item"
          >
            <button
              type="button"
              onClick={() => onSend(suggestion)}
              className="insytful-search-suggestions-item-btn bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-btn-prompt-text)] whitespace-nowrap transition-colors hover:bg-[var(--insytful-btn-prompt-bg-hover)] py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[var(--insytful-btn-prompt-radius)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--insytful-btn-prompt-focus)]"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

SearchSuggestions.displayName = "Search.Suggestions";
