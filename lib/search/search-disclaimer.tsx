import React from "react";

export type SearchDisclaimerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SearchDisclaimer({
  children,
  className,
}: SearchDisclaimerProps) {
  return (
    <div
      className={`insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--insytful-disclaimer-text)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

SearchDisclaimer.displayName = "Search.Disclaimer";
