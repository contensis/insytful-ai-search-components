import React from "react";

export const SearchSkeleton = React.forwardRef<
  HTMLLIElement,
  { logo?: React.ReactNode; className?: string }
>(({ logo, className }, ref) => {
  return (
    <li ref={ref} className={`insytful-search-skeleton flex items-start gap-[12px] md:gap-[24px] ${className || ""}`}>
      {logo && (
        <div className="insytful-search-skeleton-logo flex-shrink-0">
          {logo}
        </div>
      )}
      <div className="insytful-search-skeleton-content flex-1 flex flex-col gap-[8px]">
        <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-full" />
        <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" />
        <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" />
        <span>Generating response...</span>
      </div>
    </li>
  );
});

SearchSkeleton.displayName = "Search.Skeleton";
