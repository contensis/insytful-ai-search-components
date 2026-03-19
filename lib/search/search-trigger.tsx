import React, { forwardRef } from "react";
import { useSearchContext } from "./context";

export type SearchTriggerProps = {
  children: React.ReactNode;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SearchTrigger = forwardRef<HTMLButtonElement, SearchTriggerProps>(
  function SearchTrigger({ children, asChild = false, onClick, ...props }, ref) {
    const { open, onOpenChange } = useSearchContext("Search.Trigger");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (!e.defaultPrevented) onOpenChange(!open);
    };

    const triggerProps = {
      "data-insytful-toggle": "",
      "aria-expanded": open,
      "data-state": open ? "open" : "closed",
      onClick: handleClick,
      ...props,
    };

    if (asChild && React.isValidElement(children)) {
      const childOnClick = (children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>).props.onClick;
      return React.cloneElement(
        children as React.ReactElement<Record<string, unknown>>,
        {
          ...triggerProps,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            childOnClick?.(e);
            if (!e.defaultPrevented) onOpenChange(!open);
          },
          ref,
        }
      );
    }

    return (
      <button ref={ref} type="button" {...triggerProps}>
        {children}
      </button>
    );
  }
);

SearchTrigger.displayName = "Search.Trigger";
