import React from "react";

interface TypingIndicatorProps {
  logo: React.ReactNode;
}

export function TypingIndicator({ logo }: TypingIndicatorProps) {
  return (
    <li className="insytful-search-typing-indicator flex items-start gap-[12px] md:gap-[24px]">
      {logo && <div className="insytful-search-typing-indicator-logo flex-shrink-0">{logo}</div>}
      <div className="insytful-search-typing-indicator-txt text-[16px] md:text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]">
        <span>Searching<span className="after:animate-dot-animate"></span></span>
      </div>
    </li>
  );
}
