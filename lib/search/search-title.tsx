import React from "react";
import { useSearchContext } from "./context";

export type SearchTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SearchTitle({ children, className }: SearchTitleProps) {
  const { titleId } = useSearchContext("Search.Title");

  return (
    <h1
      id={titleId}
      className={`insytful-search-empty-state-title ${className ?? ""}`.trim()}
    >
      {children}
    </h1>
  );
}

SearchTitle.displayName = "Search.Title";
