
interface TypingIndicatorProps {
  logo: React.ReactNode;
}

export function TypingIndicator({ logo }: TypingIndicatorProps) {
  return (
    <li className="flex items-start gap-[24px]">
      {logo && <div className="flex-shrink-0">{logo}</div>}
      <div className="text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]">
        <span>Searching...</span>
      </div>
    </li>
  );
}
