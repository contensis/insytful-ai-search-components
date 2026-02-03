import { hash } from "../utilities/hash.util";
interface SuggestionsProps {
  suggestions?: string[];
  onSend: (message: string) => Promise<void>;
}

export function Suggestions({ suggestions, onSend }: SuggestionsProps) {
  if (!suggestions || suggestions.length <= 0) return null;

  return (
    <div className="suggestions">
      <ul className="suggestions__list">
        {suggestions.map((suggestion, i) => (
          <li key={`${i}-${hash(suggestion)}`} className="suggestions__item">
            <button type="button" onClick={() => onSend(suggestion)}>
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
