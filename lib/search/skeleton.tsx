import React from "react";

export const SearchSkeletonBody = ({
  searchingText = "Generating response...",
}: {
  searchingText?: string;
}) => (
  <div className="insytful-search-skeleton-content flex flex-col gap-[8px] w-full">
    <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-full" />
    <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" />
    <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" />
    <span className="insytful-search-skeleton-text text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px]">
      {searchingText}
    </span>
  </div>
);

