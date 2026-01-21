import { Spinner } from "./Spinner";

interface TypingIndicatorProps {
  logo: React.ReactNode
}

export function TypingIndicator({ logo }: TypingIndicatorProps) {
  return (
    <li className="flex items-center gap-3 text-[var(--semantic-type-primary)] mt-[2rem]">
      {logo && <div className="shrink-0">{logo}</div>}
      <div className="flex items-center gap-2 rounded-xl px-4 py-3 text-[var(--ai-lib-text-default)]">
        <Spinner />
        <span className="text-[20px] font-normal leading-8">Searching...</span>
      </div>
    </li>
  );
}
