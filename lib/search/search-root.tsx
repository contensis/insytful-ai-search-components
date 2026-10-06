import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { RAGProvider, useRAGConversationContext } from "../api";
import type { Cta } from "../api/rag.types";

import { SearchRootProvider, useSearchContext, type SearchContextValue } from "./context";
import { useControllableState } from "./use-controllable-state";
import { useModalFocusTrap } from "./hooks.util";
import { useMockFetch } from "../utilities/mock-fetch";
import { useThemeContext } from "../theme/context";

import css from "../styles/index.css?inline";
import { observeOffsetHeight } from "../utilities/offset-elements";

export type SearchRootProps = {
  children: React.ReactNode;
  options: { 
    config: string;
    baseUrl: string;
    /**
     * Optional reCAPTCHA site key for human verification. 
     * If provided, the search modal will require a successful reCAPTCHA challenge 
     * before sending any queries to the backend. This can help prevent abuse or 
     * spam in public-facing applications.
     */
    recaptchaSiteKey?: string;
  };
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  logo?: React.ReactNode;
  isDevMode?: boolean;
  /**
   * Observability callback fired with the full CTA whenever a quick-action
   * chip is clicked (anchor or button, default action or override). Pair it
   * with the `insytful-cta` bus event for non-React listeners.
   */
  onCtaClick?: (cta: Cta) => void;
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
  renderMarkdown, logo, isDevMode = false, offsets,
  onCtaClick,
}: SearchRootProps) {
  const [open, setOpen] = useControllableState({
    prop: openProp, defaultProp: defaultOpen, onChange: onOpenChange,
  });
  const titleId = useStableId("insytful-search-heading");
  const descriptionId = useStableId("insytful-search-description");

  // Stabilise object props so inline literals don't break context memoisation
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableOptions = useMemo(() => options, [options.config, options.baseUrl, options.recaptchaSiteKey]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableOffsets = useMemo(() => offsets, [offsets?.top, offsets?.left, offsets?.right]);

  // Hold the latest onCtaClick in a ref behind a stable wrapper so host
  // inline lambdas don't invalidate the memoised context on every render
  // (same intent as the stableOptions pattern above).
  const onCtaClickRef = useRef(onCtaClick);
  useEffect(() => {
    onCtaClickRef.current = onCtaClick;
  });
  const stableOnCtaClick = useCallback(
    (cta: Cta) => onCtaClickRef.current?.(cta),
    [],
  );

  return (
    <RAGProvider
      key={stableOptions.config || "default"}
      config={stableOptions.config || ""}
      baseUrl={stableOptions.baseUrl}
      recaptchaSiteKey={stableOptions.recaptchaSiteKey}
    >
      <SearchRootInner
        open={open} setOpen={setOpen}
        titleId={titleId} descriptionId={descriptionId}
        options={stableOptions}
        renderMarkdown={renderMarkdown} logo={logo}
        isDevMode={isDevMode} offsets={stableOffsets}
        onCtaClick={stableOnCtaClick}
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
  options, renderMarkdown, logo, isDevMode, offsets,
  onCtaClick,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  titleId: string;
  descriptionId: string;
  options: { config: string; baseUrl: string; recaptchaSiteKey?: string };
  renderMarkdown?: (markdown: string) => React.ReactNode;
  logo?: React.ReactNode;
  isDevMode: boolean;
  offsets?: SearchRootProps["offsets"];
  onCtaClick?: (cta: Cta) => void;
}) {
  const { messages, loading, elapsed, error, ask } = useRAGConversationContext();

  // Auto-enable mock fetch when isDevMode is true
  useMockFetch(isDevMode, options.baseUrl);

  // Body scroll lock + scroll position save/restore.
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

  // Offset measurement — the full-bleed modal is pushed down below sticky
  // host chrome marked with data-insytful-offset (see utilities/offset-elements).
  const [computedOffsetHeight, setComputedOffsetHeight] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined" || !open) return;
    return observeOffsetHeight(setComputedOffsetHeight);
  }, [open]);

  const ctx: SearchContextValue = useMemo(() => ({
    open, onOpenChange: setOpen, titleId, descriptionId, options,
    messages, loading, elapsed, error, onSend: ask, onCtaClick,
    renderMarkdown, logo, isDevMode,
    offsets, computedOffsetHeight,
  }), [
    open, setOpen, titleId, descriptionId, options,
    messages, loading, elapsed, error, ask, onCtaClick,
    renderMarkdown, logo, isDevMode,
    offsets, computedOffsetHeight,
  ]);

  return <SearchRootProvider value={ctx}>{children}</SearchRootProvider>;
}

/* ------------------------------------------------------------------ */
/* Search.Portal                                                        */
/* ------------------------------------------------------------------ */

export type SearchPortalProps = {
  children: React.ReactNode;
  /**
   * How the dialog is isolated from the host page.
   *
   * - `"shadow"` (default) — renders inside a Shadow DOM on document.body and
   *   carries the library stylesheet in with it. Host CSS cannot reach the
   *   dialog, which protects the styled modal on hostile client sites. In
   *   this mode the only way to restyle it is `<Theme css="…">`.
   * - `"none"` — renders into a plain light-DOM element on document.body.
   *   Your page stylesheet reaches the dialog, so this is the mode for
   *   unstyled (no `<Theme>`) or heavily customised use. Import
   *   `insytful-ai-search-components/style.css` yourself when themed.
   */
  isolation?: "shadow" | "none";
};

/**
 * Search.Portal — renders children into a dialog on document.body.
 *
 * Uses ReactDOM.createPortal to preserve React context across the boundary,
 * and re-applies the ambient <Theme> on the portal mount (the mount is not a
 * DOM descendant of the Theme element, so the class must be mirrored onto the
 * portal mount). Must be a descendant of Search.Root.
 */
export function SearchPortal({ children, isolation = "shadow" }: SearchPortalProps) {
  const ctx = useSearchContext("Search.Portal");
  const { open, titleId, descriptionId, offsets, computedOffsetHeight } = ctx;
  const theme = useThemeContext();

  const { elModalRef } = useModalFocusTrap(ctx.onOpenChange, open);

  // Create the portal host once
  const portalId = useStableId("insytful-ai-modal-portal");
  const mountRef = useRef<HTMLDivElement | null>(null);
  const customStyleRef = useRef<HTMLStyleElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const portal = document.createElement("div");
    portal.id = portalId;
    portal.setAttribute("data-insytful-portal", isolation);

    const customStyle = document.createElement("style");
    const mount = document.createElement("div");
    mount.className = "insytful-portal-mount";

    if (isolation === "shadow") {
      const shadow = portal.attachShadow({ mode: "open" });
      // Base styles ride along inside the shadow root. They are all scoped
      // under `.insytful-theme`, so without a <Theme> they match nothing.
      const baseStyle = document.createElement("style");
      baseStyle.textContent = css;
      shadow.append(baseStyle, customStyle, mount);
    } else {
      portal.append(customStyle, mount);
    }
    document.body.appendChild(portal);

    mountRef.current = mount;
    customStyleRef.current = customStyle;
    setReady(true);

    return () => {
      if (portal.parentNode) document.body.removeChild(portal);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Mirror the ambient Theme (class, data attributes, custom CSS) onto the
  // mount whenever it changes.
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    mount.className = ["insytful-portal-mount", theme?.className ?? ""].join(" ").trim();
    if (customStyleRef.current) customStyleRef.current.textContent = theme?.css ?? "";
  }, [ready, theme]);

  // Compute top offset
  const { left = 0, right = 0 } = offsets || {};
  const topOffset = offsets?.top ?? computedOffsetHeight;

  // eslint-disable-next-line react-hooks/refs
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
      className="insytful-search-dialog-outer"
      data-state={open ? "open" : "closed"}
      style={{
        position: "fixed",
        zIndex: "var(--insytful-z-index, 999)",
        top: typeof topOffset === "number" ? `${topOffset}px` : topOffset,
        left, right, bottom: 0,
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        pointerEvents: open ? "auto" : "none",
        transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), visibility 0s linear ${open ? "0s" : "var(--insytful-search-transition-duration, 200ms)"}`,
      } as React.CSSProperties}
    >
      <div className="insytful-search-dialog-inner">{children}</div>
    </div>,
    // eslint-disable-next-line react-hooks/refs
    mountRef.current,
  );
}

SearchPortal.displayName = "Search.Portal";
