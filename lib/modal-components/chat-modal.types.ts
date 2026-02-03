import type React from "react";

export interface ChatModalProps {
  title: string;
  text: string;

  disclaimer?: React.ReactNode;

  /**
   * Optional UI to switch between AI search and "classic" search.
   * This is shown when there are no messages yet.
   */
  renderSwitch?: (fn: () => void) => React.ReactNode;

  classic?: {
    title?: string; // e.g., "You're using classic search"
    text?: string; // e.g., "Start typing to find pages..."
    path: string; // e.g., "/search?q="
    suggestions?: string[];
    renderSwitch?: (fn: () => void) => React.ReactNode;
  };

  suggestions?: string[];

  offsets?: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };

  logo?: React.ReactNode;

  renderMarkdown?: (markdown: string) => React.ReactNode;

  /**
   * Custom trigger renderer.
   * IMPORTANT: if you attach `elTriggerRef` to your trigger element,
   * focus-trap logic can correctly treat trigger clicks as special-cased.
   */
  // renderTrigger?: (controls: {
  //   open: () => void;
  //   close: () => void;
  //   toggle: () => void;
  //   isOpen: boolean;

  //   a11y: {
  //     "aria-haspopup": "dialog";
  //     "aria-expanded": boolean;
  //     "aria-controls": string;
  //   };

  //   elTriggerRef: React.RefObject<HTMLButtonElement | null>;
  // }) => React.ReactNode;

  styles?: React.CSSProperties;
}
