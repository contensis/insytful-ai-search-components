import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { RAGProvider, useRAGConversationContext } from "../api";

import { SearchProvider, useSearchContext, type SearchContextValue } from "./context";
import { useControllableState } from "./use-controllable-state";
import { useModalFocusTrap } from "./hooks.util";
import { useMockFetch } from "../utilities/mock-fetch";

import css from "../main.css?inline";

export type SearchRootProps = {
  children: React.ReactNode;
  options: { config: string; baseUrl: string };
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  theme?: string;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  logo?: React.ReactNode;
  isDevMode?: boolean;
  offsets?: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
  };
};

// Clear any stale RAG session so each page load starts a fresh conversation.
// The session ID is read lazily by lib/api only when ask() is called,
// so this always runs before any session ID is consumed.
if (typeof window !== "undefined") {
  try { localStorage.removeItem("rag-session-id"); } catch { /* restricted env */ }
}

let idCounter = 0;
const useStableId = typeof React.useId === "function"
  ? (prefix: string) => `${prefix}-${React.useId()}`
  : (prefix: string) => {
      const [id] = useState(() => `${prefix}-${++idCounter}`);
      return id;
    };

/**
 * Search.Root — provides context to all descendants.
 *
 * Children render in the normal React tree, so Search.Trigger works
 * anywhere in the consumer's DOM. Use Search.Portal to render content
 * inside the Shadow DOM dialog.
 */
export function SearchRoot({
  children, options,
  open: openProp, defaultOpen = false, onOpenChange,
  theme, renderMarkdown, logo, isDevMode = false, offsets,
}: SearchRootProps) {
  const [open, setOpen] = useControllableState({
    prop: openProp, defaultProp: defaultOpen, onChange: onOpenChange,
  });
  const titleId = useStableId("insytful-search-heading");
  const descriptionId = useStableId("insytful-search-description");

  // Stabilise object props so inline literals don't break context memoisation
  const stableOptions = useMemo(() => options, [options.config, options.baseUrl]); // eslint-disable-line react-hooks/exhaustive-deps
  const stableOffsets = useMemo(() => offsets, [offsets?.top, offsets?.left, offsets?.right]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <RAGProvider
      key={stableOptions.config || "default"}
      config={stableOptions.config || ""}
      baseUrl={stableOptions.baseUrl}
    >
      <SearchRootInner
        open={open} setOpen={setOpen}
        titleId={titleId} descriptionId={descriptionId}
        options={stableOptions} theme={theme}
        renderMarkdown={renderMarkdown} logo={logo}
        isDevMode={isDevMode} offsets={stableOffsets}
      >
        {children}
      </SearchRootInner>
    </RAGProvider>
  );
}

SearchRoot.displayName = "Search.Root";

/** Inner component inside RAGProvider to access conversation context. */
function SearchRootInner({
  children, open, setOpen, titleId, descriptionId,
  options, theme, renderMarkdown, logo, isDevMode, offsets,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  titleId: string;
  descriptionId: string;
  options: { config: string; baseUrl: string };
  theme?: string;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  logo?: React.ReactNode;
  isDevMode: boolean;
  offsets?: SearchRootProps["offsets"];
}) {
  const { messages, loading, error, ask } = useRAGConversationContext();

  // Auto-enable mock fetch when isDevMode is true
  useMockFetch(isDevMode, options.baseUrl);

  // Body scroll lock + scroll position save/restore
  const prevOverflow = useRef("");
  const prevPaddingRight = useRef("");
  const prevScrollY = useRef(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (open) {
      // Save scroll position and scroll to top so modal aligns with header
      prevScrollY.current = window.scrollY;
      prevOverflow.current = document.body.style.overflow;
      prevPaddingRight.current = document.body.style.paddingRight;
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${sw}px`;
      window.scrollTo(0, 0);
    } else {
      // Restore scroll position and body styles
      document.body.style.overflow = prevOverflow.current;
      document.body.style.paddingRight = prevPaddingRight.current;
      window.scrollTo(0, prevScrollY.current);
    }
    return () => {
      document.body.style.overflow = prevOverflow.current;
      document.body.style.paddingRight = prevPaddingRight.current;
    };
  }, [open]);

  // Offset measurement
  const [computedOffsetHeight, setComputedOffsetHeight] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined" || !open) return;
    const els = document.querySelectorAll("[data-insytful-modal-offset]");
    const calc = () => {
      let h = 0;
      els.forEach((el) => (h += (el as HTMLElement).offsetHeight));
      setComputedOffsetHeight(h);
    };
    calc();
    const ro = new ResizeObserver(calc);
    els.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, [open]);

  const ctx: SearchContextValue = useMemo(() => ({
    open, onOpenChange: setOpen, titleId, descriptionId, options,
    messages, loading, error, onSend: ask,
    renderMarkdown, logo, isDevMode,
    theme, offsets, computedOffsetHeight,
  }), [
    open, setOpen, titleId, descriptionId, options,
    messages, loading, error, ask,
    renderMarkdown, logo, isDevMode,
    theme, offsets, computedOffsetHeight,
  ]);

  return <SearchProvider value={ctx}>{children}</SearchProvider>;
}

/* ------------------------------------------------------------------ */
/* Search.Portal                                                        */
/* ------------------------------------------------------------------ */

export type SearchPortalProps = { children: React.ReactNode };

/**
 * Search.Portal — renders children into a Shadow DOM dialog on document.body.
 *
 * Uses ReactDOM.createPortal to preserve React context across the boundary.
 * Must be a descendant of Search.Root.
 */
export function SearchPortal({ children }: SearchPortalProps) {
  const ctx = useSearchContext("Search.Portal");
  const { open, titleId, descriptionId, theme, offsets, computedOffsetHeight } = ctx;

  const { elModalRef } = useModalFocusTrap(ctx.onOpenChange, open);

  // Create Shadow DOM once
  const portalId = useStableId("insytful-ai-modal-portal");
  const mountRef = useRef<HTMLDivElement | null>(null);
  const customStyleRef = useRef<HTMLStyleElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const portal = document.createElement("div");
    portal.id = portalId;
    const shadow = portal.attachShadow({ mode: "open" });

    const baseStyle = document.createElement("style");
    baseStyle.textContent = css;
    const customStyle = document.createElement("style");
    if (theme) customStyle.textContent = theme;
    const mount = document.createElement("div");
    mount.className = "insytful-root";

    shadow.append(baseStyle, customStyle, mount);
    document.body.appendChild(portal);

    mountRef.current = mount;
    customStyleRef.current = customStyle;
    setReady(true);

    return () => {
      if (portal.parentNode) document.body.removeChild(portal);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update theme
  useEffect(() => {
    if (customStyleRef.current) customStyleRef.current.textContent = theme ?? "";
  }, [theme]);

  // Compute top offset
  const { left = 0, right = 0 } = offsets || {};
  const topOffset = offsets?.top ?? computedOffsetHeight;

  if (!ready || !mountRef.current) return null;

  return ReactDOM.createPortal(
    <div
      tabIndex={-1}
      id="insytful-search-dialog"
      ref={elModalRef}
      role="dialog"
      aria-modal={open || undefined}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      {...(!open ? { inert: "" } : {})}
      className={`insytful-search-dialog-outer fixed flex flex-col bg-[var(--insytful-modal-bg)] overflow-hidden pb-0 ${
        open ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"
      }`}
      style={{
        zIndex: "var(--insytful-z-index, 999)",
        top: typeof topOffset === "number" ? `${topOffset}px` : topOffset,
        left, right, bottom: 0,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)",
      } as React.CSSProperties}
    >
      <div className="insytful-search-dialog-inner min-h-[500px] px-4 w-full mx-auto flex flex-col h-full justify-start md:justify-center gap-[24px] md:gap-[32px] pt-[32px]">
        {children}
      </div>
    </div>,
    mountRef.current,
  );
}

SearchPortal.displayName = "Search.Portal";
