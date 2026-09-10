import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { RAGProvider, useRAGResponseContext, type Cta } from "../api";
import { SearchSkeletonBody, type SearchSkeletonProps } from "./skeleton";
import { useMockFetch } from "../utilities/mock-fetch";
import { SearchCtas } from "./search-ctas";
import { SearchErrorCallout, type SearchErrorCalloutCta } from "./search-messages";
import { useStableId } from "./hooks.util";

export type SearchOverviewProp = {
  className?: string;
  icon?: React.ReactNode;
  heading?: string;
  hLevel?: number;
  options: { config: string; baseUrl: string; recaptchaSiteKey?: string };
  term: string;
  action?: () => void;
  isDevMode?: boolean;
  searching?: SearchSkeletonProps["messages"];
  style?: React.CSSProperties;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  onCtaClick?: (cta: Cta) => void;
  error?: { title?: string; text?: string; cta?: SearchErrorCalloutCta };
};

/**
 * Search.Overview — standalone AI answer rendered in the light DOM.
 *
 * Wrap it in <Theme> (and import the stylesheet) for the default look, or
 * leave it bare and style the `insytful-search-overview-*` hooks yourself.
 * State attributes on the root: `data-overflowing`, `data-expanded`.
 */
export const SearchOverview = ({
  className,
  isDevMode = false,
  icon,
  heading = "AI Overview",
  hLevel = 2,
  term,
  action,
  options,
  searching,
  error,
  renderMarkdown,
  onCtaClick,
  style,
}: SearchOverviewProp) => {
  const stableOptions = useMemo(
    () => options,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options.config, options.baseUrl, options.recaptchaSiteKey],
  );

  return (
    <RAGProvider
      key={stableOptions.config || "default"}
      config={stableOptions.config || ""}
      baseUrl={stableOptions.baseUrl}
      recaptchaSiteKey={stableOptions.recaptchaSiteKey}
    >
      <SearchOverviewInner
        className={className}
        isDevMode={isDevMode}
        onCtaClick={onCtaClick}
        icon={icon}
        heading={heading}
        hLevel={hLevel}
        style={style}
        term={term}
        action={action}
        searching={searching}
        error={error}
        options={stableOptions}
        renderMarkdown={renderMarkdown}
      />
    </RAGProvider>
  );
};

/** Collapsed height, in px, before the "Show more" toggle appears. */
const COLLAPSED_HEIGHT = 200;

const SearchOverviewInner = ({
  className,
  icon,
  heading = "AI Overview",
  hLevel = 2,
  term,
  action,
  searching,
  isDevMode,
  options,
  renderMarkdown,
  onCtaClick,
  error,
  style,
}: SearchOverviewProp) => {
  const [isExpanded, setExpanded] = React.useState(false);

  const ctx = useRAGResponseContext();
  const { ask } = ctx;

  useMockFetch(isDevMode, options.baseUrl);

  const doShowSkeleton = ctx.loading && !ctx.response && !ctx.error;

  const bodyId = useStableId("insytful-search-overview-body");

  // A11y: one-shot announcements via a visually-hidden role="status" region.
  // The streamed markdown itself is deliberately *not* live — it would be
  // re-read on every token. Text is written into the region post-mount as a
  // DOM change, which is what makes screen readers reliably announce it
  // (same approach as SearchCtas). Errors are covered by the callout's
  // role="alert", so nothing is announced here for them.
  const statusRef = useRef<HTMLDivElement>(null);
  const hasAnnouncedReadyRef = useRef(false);
  const loadingText = searching?.[0]?.text ?? "Generating response...";
  useEffect(() => {
    const el = statusRef.current;
    if (!el) return;
    if (ctx.loading) {
      hasAnnouncedReadyRef.current = false;
      el.textContent = loadingText;
    } else if (ctx.response && !hasAnnouncedReadyRef.current) {
      hasAnnouncedReadyRef.current = true;
      el.textContent = `${heading || "AI overview"} ready`;
    }
  }, [ctx.loading, ctx.response, heading, loadingText]);

  const onToggle = () => {
    setExpanded((prev) => {
      if (!prev && action) action();
      return !prev;
    });
  };

  useEffect(() => {
    if (term) ask(term);
  }, [ask, term]);

  const [isOverflowing, setOverflowing] = React.useState(false);
  const elResponseRef = useRef<HTMLDivElement>(null);

  // DOM measurement after commit is exactly what useLayoutEffect is for: the
  // collapsed/expanded decision needs the rendered scrollHeight, which can't
  // be derived during render. The single setState is bounded (no cascade).
  useLayoutEffect(() => {
    const elResponseHeight = elResponseRef.current?.scrollHeight || 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOverflowing(elResponseHeight > COLLAPSED_HEIGHT);
  }, [ctx.response]);

  const isCollapsed = isOverflowing && !isExpanded;
  const Heading = `h${hLevel}` as keyof React.JSX.IntrinsicElements;

  return (
    <div
      className={`insytful-search-overview ${className ?? ""}`.trim()}
      style={style}
      {...(ctx.error ? { "data-error": "" } : {})}
      {...(isOverflowing ? { "data-overflowing": "" } : {})}
      {...(isExpanded ? { "data-expanded": "" } : {})}
    >
      <div ref={statusRef} role="status" className="insytful-sr-only" />
      <div
        id={bodyId}
        className="insytful-search-overview-body"
        style={{
          height: isCollapsed ? `${COLLAPSED_HEIGHT}px` : "auto",
          overflow: isCollapsed ? "hidden" : "visible",
        }}
        ref={elResponseRef}
        // Clipped content stays in the tab order; if keyboard focus lands on
        // something hidden below the fold, reveal it rather than let the user
        // tab through invisible links. React's onFocus bubbles (focusin).
        onFocus={isCollapsed ? () => setExpanded(true) : undefined}
      >
        {heading && (
          <div className="insytful-search-overview-heading">
            {icon && <span className="insytful-search-overview-icon">{icon}</span>}
            <Heading>{heading}</Heading>
          </div>
        )}
        <SearchCtas ctas={ctx.ctas} onCtaClick={onCtaClick} />
        {doShowSkeleton && (
          <SearchSkeletonBody elapsed={ctx.elapsed} messages={searching || []} />
        )}
        {renderMarkdown && ctx.response && (
          <div className="insytful-search-overview-content">
            {renderMarkdown(ctx.response)}
          </div>
        )}
        {ctx.error && (
          <div className="insytful-search-overview-error">
            <SearchErrorCallout
              title={error?.title ?? "Error"}
              text={error?.text ?? ctx.error ?? "We couldn't generate an overview right now."}
              cta={error?.cta}
            />
          </div>
        )}
        {!doShowSkeleton && isCollapsed && (
          <div className="insytful-search-overview-fade" aria-hidden="true" />
        )}
      </div>
      {!doShowSkeleton && ctx.response && isOverflowing && (
        // Stays mounted as a toggle so focus is never dropped when the
        // collapsed state changes.
        <button
          type="button"
          className="insytful-search-overview-show-more"
          aria-expanded={isExpanded}
          aria-controls={bodyId}
          onClick={onToggle}
        >
          <span>
            {isExpanded ? "Show less" : "Show more"}{" "}
            <span className="insytful-sr-only">of the response</span>
          </span>
        </button>
      )}
    </div>
  );
};

SearchOverview.displayName = "Search.Overview";
