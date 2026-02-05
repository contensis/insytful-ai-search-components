import { hash } from "../utilities/hash.util";
interface SuggestionsProps {
  suggestions?: string[];
  onSend: (message: string) => Promise<void>;
}

export function Suggestions({ suggestions, onSend }: SuggestionsProps) {
  if (!suggestions || suggestions.length <= 0) return null;

  return (
    <div className="w-full overflow-hidden self-stretch">
      <ul className="flex gap-4 w-full min-w-0 overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap md:justify-center p-0 m-0 list-none">
        {suggestions.map((suggestion, i) => (
          <li key={`${i}-${hash(suggestion)}`} className="flex-shrink-0">
            <button type="button" onClick={() => onSend(suggestion)} className="bg-ai-lib-btn-prompt-bg-default text-ai-lib-btn-prompt-text rwhitespace-nowrap transition-colors hover:bg-ai-lib-btn-prompt-bg-hover py-[8px] px-[8px] md:py-[12px] md:px-[16px] text-[14px] md:text-[18px] leading-[24px] rounded-[12px] ">
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
