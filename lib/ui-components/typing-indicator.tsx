
interface TypingIndicatorProps {
  logo: React.ReactNode;
}

export function TypingIndicator({ logo }: TypingIndicatorProps) {
  return (
    <li className="typing-indicator">
      {logo && <div className="typing-indicator__logo">{logo}</div>}
      <div className="typing-indicator__message">
        <span>Searching.</span>
      </div>
    </li>
  );
}
