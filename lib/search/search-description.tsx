import React from "react";
import { useSearchContext } from "./context";

export type SearchDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function SearchDescription({
  children,
  className,
}: SearchDescriptionProps) {
  const { descriptionId } = useSearchContext("Search.Description");

  return (
    <p
      id={descriptionId}
      className={`insytful-search-empty-state-text ${className ?? ""}`.trim()}
    >
      {children}
    </p>
  );
}

SearchDescription.displayName = "Search.Description";
