import type React from "react";

export interface ChatModalProps {
  isDevMode?: boolean;
  options: { config: string; baseUrl?: string };

  title: string;
  text: string;

  /**
   * External control for modal open state (optional)
   */
  isOpen?: boolean;
  
  /**
   * Callback when modal open state changes (optional)
   */
  onOpenChange?: (isOpen: boolean) => void;

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

  styles?: React.CSSProperties;
}
