interface SuggestionsProps {
  suggestions?: string[];
  onSend: (message: string) => Promise<void>;
}

export function Suggestions({ suggestions, onSend }: SuggestionsProps) {
  if (!suggestions || suggestions.length <= 0) return null;

  return (
      <div className="mb-[1rem] md:mb-[2.5rem] w-full overflow-hidden self-stretch">
        <ul
          className="
      flex gap-4
      w-full min-w-0
      overflow-x-auto flex-nowrap
      md:overflow-x-visible md:flex-wrap md:justify-center
      p-0 m-0 list-none
    "
        >
          {suggestions.map((suggestion, i) => (
            <li key={i} className="flex-shrink-0">
              <button
                type="button"
                onClick={() => onSend(suggestion)}
                className="
            bg-[var(--ai-lib-btn-prompt-bg-default)] text-[var(--ai-lib-btn-prompt-text)]
            p-2 md:px-4 md:py-3
            rounded-lg
            text-sm md:text-lg
            whitespace-nowrap
            transition-colors duration-150
            hover:bg-[var(--ai-lib-btn-prompt-bg-hover)]
          "
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
}
