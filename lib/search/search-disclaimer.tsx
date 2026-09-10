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
      className={`insytful-search-disclaimer-inner ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  );
}

SearchDisclaimer.displayName = "Search.Disclaimer";
