import React from "react";
import { hash } from "../utilities/hash.util";

interface SuggestionsProps {
  suggestions?: string[];
  onSend: (message: string) => Promise<void>;
}

export function Suggestions({ suggestions, onSend }: SuggestionsProps) {
  if (!suggestions || suggestions.length <= 0) return null;

  return (
    <div className="insytful-search-suggestions-outer w-full overflow-hidden self-stretch">
      <ul className="insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center p-0 m-0 list-none">
        {suggestions?.map((suggestion, i) => (
          <li
            key={`${i}-${hash(suggestion)}`}
            className="insytful-search-suggestions-item flex-shrink-0"
          >
            <button
              type="button"
              onClick={() => onSend(suggestion)}
              className="insytful-search-suggestions-item-btn
                bg-[var(--insytful-btn-prompt-bg-default)]
                text-[var(--insytful-btn-prompt-text)]
                whitespace-nowrap
                transition-colors
                hover:bg-[var(--insytful-btn-prompt-bg-hover)]
                py-[8px] px-[8px]
                md:py-[12px] md:px-[16px]
                text-[14px] md:text-[18px]
                leading-[24px]
                rounded-[12px]
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-[var(--insytful-semantic-search-field-focus)]"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
