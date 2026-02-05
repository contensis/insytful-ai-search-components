
interface TypingIndicatorProps {
  logo: React.ReactNode;
}

export function TypingIndicator({ logo }: TypingIndicatorProps) {
  return (
    <li className="flex items-start gap-5">
      {logo && <div className="flex-shrink-0">{logo}</div>}
      <div className="text-ai-lib-text-muted">
        <span>Searching.</span>
      </div>
    </li>
  );
}
