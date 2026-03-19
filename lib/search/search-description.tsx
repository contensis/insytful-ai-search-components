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
      className={`insytful-search-empty-state-text text-[var(--insytful-text-default)] text-[14px] leading-[24px] font-normal md:text-[20px] md:leading-[32px] text-center ${className ?? ""}`}
    >
      {children}
    </p>
  );
}

SearchDescription.displayName = "Search.Description";
