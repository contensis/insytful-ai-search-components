import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  SearchConfigProvider,
  useAIConversationContext,
  useAIResponseContext,
  type Cta,
  type AIMessage,
  useResolvedSearchConfig,
  type SearchConfig,
} from "../api";
import { SearchSkeletonBody, type SearchSkeletonProps } from "./skeleton";
import { useMockFetch } from "../utilities/mock-fetch";
import { SearchCtas } from "./search-ctas";
import { Message } from "./search-messages";
import { SearchErrorCallout } from "./search-error-callout";
import { SearchInput } from "./search-input";
import { useStableId } from "./hooks.util";
import { lastUserMessageEl, scrollMessageToTop } from "../utilities/scroll-message-to-top";
import { observeOffsetHeight } from "../utilities/offset-elements";
import { FeedbackReporting, type SearchOverviewFeedback } from "./feedback-reporting";
import { useVoteState } from "./vote-state";

/**
 * "keyword" (default) is a single answer with a Show more toggle.
 * "conversational" keeps a thread: expanding the answer reveals a follow-up
 * input and each follow-up renders beneath the first answer.
 */
export type SearchOverviewType = "keyword" | "conversational";

export type SearchOverviewProp = {
  className?: string;
  type?: SearchOverviewType;
  icon?: React.ReactNode;
  heading?: string;
  hLevel?: number;
  /** Connection config. Omit it inside `InsytfulSearch.Provider` to use the provider's. */
  options?: SearchConfig;
  term: string;
  /** Controlled expansion. When set, the component no longer owns the
   *  expanded state and reports every change via `onExpandedChange`. */
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Whether a collapsed overview clips to the teaser height with a Show more
   *  toggle. "auto" (default) does so only when the answer overflows that
   *  height; `true` always does (e.g. a results tab that wants a way into the
   *  AI view even for a short answer); `false` never does. */
  collapsible?: "auto" | boolean;
  /** Hold the collapsed teaser's footprint from the first frame, so the page
   *  below doesn't jump as the answer loads and streams: the body is never
   *  shorter than the teaser while collapsed. The Show more toggle still
   *  appears with the answer, below the box.
   *  `true` (default) uses a 220px teaser; a number (px) sets the teaser
   *  height too; `false` lets the overview size to its content (the old
   *  behaviour) and avoids white space under a short answer. The height is
   *  exposed on the root as `--insytful-overview-collapsed-height`. */
  reserve?: boolean | number;
  isDevMode?: boolean;
  searching?: SearchSkeletonProps["messages"];
  style?: React.CSSProperties;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  onCtaClick?: (cta: Cta) => void;
  /** Shown when the answer fails. Defaults to the library's error callout
   *  with a general message; the API's message (passed as `error`) can be
   *  technical, so it isn't shown by default. */
  renderError?: (error: string) => React.ReactNode;
  /** Shown when the answer finishes with no text. Renders nothing by default. */
  renderEmpty?: () => React.ReactNode;
  /** Placeholder for the follow-up input (conversational only). */
  placeholder?: string;
  /** Small print rendered under the answer (and thread). */
  disclaimer?: React.ReactNode;
  /** Helpful / unhelpful vote and report link under the answer. */
  feedback?: SearchOverviewFeedback;
};

/** What the body needs from either AI hook. */
type OverviewViewModel = {
  ids?: { sid: string; mid: string };
  response: string | null;
  ctas?: Cta[];
  loading: boolean;
  elapsed: number;
  error: string | null;
  /** The answer finished, without error, with no text. */
  empty: boolean;
};

type ResolvedOverviewProps = Omit<SearchOverviewProp, "options"> & { options: SearchConfig };

type BodyProps = ResolvedOverviewProps & {
  vm: OverviewViewModel;
  followUps?: AIMessage[];
  isThreadLoading?: boolean;
  onFollowUp?: (question: string) => void;
};

/**
 * Search.Overview — standalone AI answer rendered in the light DOM.
 *
 * Wrap it in <Theme> (and import the stylesheet) for the default look, or
 * leave it bare and style the `insytful-search-overview-*` hooks yourself.
 * State attributes on the root: `data-loading`, `data-streaming`,
 * `data-error`, `data-empty`, `data-overflowing`, `data-expanded`,
 * `data-conversational`.
 *
 * Expansion is uncontrolled by default. Pass `expanded` (with
 * `onExpandedChange`) to control it from outside, e.g. a host that keeps one
 * conversational instance mounted across tabs and only expands it on the AI
 * tab: the thread and input render only while expanded.
 */
export const SearchOverview = ({
  className,
  type = "keyword",
  isDevMode = false,
  icon,
  heading = "AI Overview",
  hLevel = 2,
  term,
  expanded,
  onExpandedChange,
  collapsible,
  reserve,
  options,
  searching,
  renderError,
  renderEmpty,
  renderMarkdown,
  onCtaClick,
  style,
  placeholder,
  disclaimer,
  feedback,
}: SearchOverviewProp) => {
  const resolved = useResolvedSearchConfig(options);
  const opts = useMemo(
    () => resolved,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [resolved.config, resolved.searchConfig, resolved.baseUrl, resolved.recaptchaSiteKey],
  );

  const innerProps: ResolvedOverviewProps = {
    className,
    type,
    isDevMode,
    icon,
    heading,
    hLevel,
    term,
    expanded,
    onExpandedChange,
    collapsible,
    reserve,
    options: opts,
    searching,
    renderError,
    renderEmpty,
    renderMarkdown,
    onCtaClick,
    style,
    placeholder,
    disclaimer,
    feedback,
  };

  return (
    <SearchConfigProvider
      key={`${opts.searchConfig || ""}|${opts.config || ""}`}
      config={opts.config || ""}
      searchConfig={opts.searchConfig}
      baseUrl={opts.baseUrl}
      recaptchaSiteKey={opts.recaptchaSiteKey}
    >
      {type === "conversational" ? (
        // Keyed on term so a new search starts a new thread.
        <SearchOverviewConversational key={term} {...innerProps} />
      ) : (
        <SearchOverviewKeyword {...innerProps} />
      )}
    </SearchConfigProvider>
  );
};

/** Single-answer variant: `history: false`, no thread. */
const SearchOverviewKeyword = (props: ResolvedOverviewProps) => {
  const { ask, ...ctx } = useAIResponseContext();
  // `response` starts as "" and `loading` only flips after reCAPTCHA, so
  // "finished with nothing" needs to know a request actually ran.
  // Set during render (React's "adjusting state when a prop changes" pattern).
  const [hasLoaded, setHasLoaded] = React.useState(false);
  if (ctx.loading && !hasLoaded) setHasLoaded(true);
  const empty = hasLoaded && !ctx.loading && !ctx.error && !ctx.response;
  useMockFetch(props.isDevMode, props.options.baseUrl);
  useEffect(() => {
    if (props.term) ask(props.term);
  }, [ask, props.term]);
  return <SearchOverviewBody {...props} vm={{ ...ctx, ids: ctx.answerIds ?? undefined, empty }} />;
};

/**
 * Conversational variant: the first answer is shown as the overview body and
 * later turns render as a thread. The user's search term comes first (not
 * shown — it's already in the search box), then the first answer.
 */
const SearchOverviewConversational = (props: ResolvedOverviewProps) => {
  const { messages, loading, elapsed, error, ask } = useAIConversationContext();
  useMockFetch(props.isDevMode, props.options.baseUrl);
  useEffect(() => {
    if (props.term) ask(props.term);
  }, [ask, props.term]);

  // The first answer is the first assistant message, not messages[1]: under
  // StrictMode the mount effect asks twice, and the cancelled ask leaves its
  // user message behind ([user, user, assistant]).
  const firstIndex = messages.findIndex((m) => m.role === "assistant");
  const first = firstIndex >= 0 ? messages[firstIndex] : undefined;
  const followUps = firstIndex >= 0 ? messages.slice(firstIndex + 1) : [];
  // Only the first answer drives the body's skeleton; follow-ups show
  // their own inside the thread.
  const isFirstLoading = loading && followUps.length === 0;
  // mid = message id and sid = session id
  const vm: OverviewViewModel = {
    ids: first?.mid && first?.sid ? { mid: first.mid, sid: first.sid } : undefined,
    response: first?.content || null,
    ctas: first?.ctas,
    loading: isFirstLoading,
    elapsed,
    error,
    // The first answer arrived and finished with no text.
    empty: !!first && !first.content && !isFirstLoading && !error,
  };

  return (
    <SearchOverviewBody
      {...props}
      vm={vm}
      followUps={followUps}
      isThreadLoading={loading}
      onFollowUp={(q) => void ask(q)}
    />
  );
};

/** Default collapsed height, in px, before the "Show more" toggle appears. */
const COLLAPSED_HEIGHT = 220;
/** Gap, in px, between the sticky host chrome (`data-insytful-offset`) and a
 *  follow-up question scrolled to the top of the viewport. */
const SCROLL_MARGIN = 16;

// The API's message can be technical ("Request failed (502)"), so the
// default shows a general one; custom states get it via `renderError`.
const DefaultError = () => (
  <SearchErrorCallout
    title="Something went wrong"
    text="We couldn't generate an overview right now. Please try again later."
  />
);

const SearchOverviewBody = ({
  className,
  type = "keyword",
  icon,
  heading = "AI Overview",
  hLevel = 2,
  expanded,
  onExpandedChange,
  collapsible = "auto",
  reserve = true,
  searching,
  renderMarkdown,
  onCtaClick,
  renderError = DefaultError,
  renderEmpty,
  style,
  placeholder,
  vm,
  followUps = [],
  isThreadLoading = false,
  onFollowUp,
  disclaimer,
  feedback,
  options,
}: BodyProps) => {
  // Expansion is uncontrolled by default; a consumer that passes `expanded`
  // takes ownership (e.g. to collapse the overview when it switches tabs).
  const [internalExpanded, setInternalExpanded] = React.useState(false);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;
  const setExpanded = (next: boolean) => {
    if (!isControlled) setInternalExpanded(next);
    onExpandedChange?.(next);
  };
  const [isOverflowing, setOverflowing] = React.useState(false);
  const elResponseRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLUListElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const followUpsRef = useRef<HTMLDivElement>(null);
  const prevFollowUpCountRef = useRef(0);

  const collapsedHeight = typeof reserve === "number" ? reserve : COLLAPSED_HEIGHT;
  const isConversational = type === "conversational";
  const hasFollowUps = followUps.length > 0;
  const doShowSkeleton = vm.loading && !vm.response && !vm.error;
  // Host override, else the measured answer height decides. Never clip before
  // there is an answer: the skeleton and any error render at natural height,
  // and the teaser only applies once there is something to preview.
  const isCollapsible = collapsible === "auto" ? isOverflowing : collapsible;
  const isCollapsed = isCollapsible && !isExpanded && !!vm.response;
  const isAnswerStreaming = vm.loading && !!vm.response;
  // Collapsed and not failed or empty: the teaser's footprint is held
  // throughout, so loading, streaming and the finished answer all take the
  // same space.
  const isHoldingSpace = reserve !== false && !isExpanded && !vm.error && !vm.empty;

  const hasFeedback = !!feedback && !doShowSkeleton && !!vm.response && !isCollapsed;
  // The first answer failed (an error with no follow-ups yet): no footer for it.
  const isFirstFailed = !!vm.error && followUps.length === 0;
  // Owned here, not by each row: follow-ups unmount while collapsed, and
  // there is no read endpoint to recover a vote.
  const voteState = useVoteState();

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
    if (vm.loading) {
      hasAnnouncedReadyRef.current = false;
      el.textContent = loadingText;
    } else if (vm.response && !hasAnnouncedReadyRef.current) {
      hasAnnouncedReadyRef.current = true;
      el.textContent = `${heading || "AI overview"} ready`;
    }
  }, [vm.loading, vm.response, heading, loadingText]);

  const onToggle = () => setExpanded(!isExpanded);

  // DOM measurement after commit is exactly what useLayoutEffect is for: the
  // collapsed/expanded decision needs the rendered scrollHeight, which can't
  // be derived during render. Kept live rather than measured once: a webfont
  // swap, CTA chips arriving or a viewport resize after the last token would
  // otherwise leave the flag stale. The content element is observed rather
  // than the body, whose height is pinned while collapsed (scrollHeight still
  // reports the full content height then). Measuring is idempotent, so
  // re-running on expand/collapse can't loop.
  useLayoutEffect(() => {
    const body = elResponseRef.current;
    if (!body) return;
    // Strict: a reserved min-height makes scrollHeight at least collapsedHeight.
    const measure = () => setOverflowing(body.scrollHeight > collapsedHeight);
    measure();
    const content = body.querySelector(".insytful-search-overview-content");
    if (!content || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(content);
    return () => ro.disconnect();
  }, [vm.response, isExpanded, isConversational, collapsedHeight]);

  const Heading = `h${hLevel}` as keyof React.JSX.IntrinsicElements;

  // Keyword: the toggle only exists when the answer overflows. Conversational:
  // always offer a way into the thread, and stop offering "Show less" once a
  // follow-up has been sent (collapsing would hide the input mid-conversation).
  const hasToggle = !doShowSkeleton && !!vm.response && (isConversational ? !isExpanded : isCollapsible);

  const isLastFollowUp = followUps[followUps.length - 1];

  // Sticky host chrome (header, banners) marked data-insytful-offset — the
  // same attribute Search.Root uses to push the modal down. Measured live so
  // breakpoint changes are picked up; only needed once the thread is open.
  const [hostOffset, setHostOffset] = React.useState(0);
  useEffect(() => {
    if (!isConversational || !isExpanded) return;
    return observeOffsetHeight(setHostOffset);
  }, [isConversational, isExpanded]);

  // New follow-up question: scroll it to the top of the viewport, as the modal
  // does inside its own scroller. The page is the scroller here, so the
  // spacer gives it a viewport of room below the question before the reply
  // has streamed in.
  useEffect(() => {
    const count = followUps.length;
    const last = followUps[count - 1];
    if (count > prevFollowUpCountRef.current && last?.role === "user") {
      const el = threadRef.current && lastUserMessageEl(threadRef.current);
      if (el && spacerRef.current) {
        scrollMessageToTop(window, el, spacerRef.current, hostOffset + SCROLL_MARGIN);
      }
    }
    prevFollowUpCountRef.current = count;
  }, [followUps, hostOffset]);

  // On expand, stretch the follow-ups block to the bottom of the viewport so
  // the overview runs past the fold even for a short answer, giving the sticky
  // input something to pin against. Follow-ups and the spacer grow it further.
  // Measured after layout so the expanded answer height is known.
  useEffect(() => {
    const block = followUpsRef.current;
    if (!isConversational || !isExpanded || !block) return;
    const frame = requestAnimationFrame(() => {
      const top = block.getBoundingClientRect().top;
      block.style.minHeight = `${Math.max(0, window.innerHeight - top)}px`;
    });
    return () => cancelAnimationFrame(frame);
  }, [isConversational, isExpanded]);

  // Reply finished: let the spacer ease closed (its CSS transition) so the
  // page doesn't end on a screen of blank space.
  useEffect(() => {
    const spacer = spacerRef.current;
    if (!spacer || isThreadLoading) return;
    spacer.style.transition = "";
    spacer.style.height = "0px";
  }, [isThreadLoading]);

  return (
    <div
      className={`insytful-search-overview ${className ?? ""}`.trim()}
      style={{ "--insytful-overview-collapsed-height": `${collapsedHeight}px`, ...style } as React.CSSProperties}
      {...(doShowSkeleton ? { "data-loading": "" } : {})}
      {...(isAnswerStreaming ? { "data-streaming": "" } : {})}
      {...(vm.error ? { "data-error": "" } : {})}
      {...(vm.empty ? { "data-empty": "" } : {})}
      {...(isOverflowing ? { "data-overflowing": "" } : {})}
      {...(isExpanded ? { "data-expanded": "" } : {})}
      {...(isConversational ? { "data-conversational": "" } : {})}
    >
      <div ref={statusRef} role="status" className="insytful-sr-only" />
      <div
        id={bodyId}
        className="insytful-search-overview-body"
        style={{
          // Inline rather than in the stylesheet so an unthemed overview
          // still clips and holds its space.
          height: isCollapsed ? `${collapsedHeight}px` : "auto",
          minHeight: isHoldingSpace ? `${collapsedHeight}px` : undefined,
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
        <SearchCtas ctas={vm.ctas} onCtaClick={onCtaClick} />
        {doShowSkeleton && (
          <SearchSkeletonBody
            elapsed={vm.elapsed}
            messages={searching || []}
            // Holding the teaser's space: an answer-shaped skeleton (intro,
            // divider, two bulleted items) that fills the box and clips the
            // overflow.
            // Loading is announced by the status region above, so the
            // skeleton drops its visible message.
            items={isHoldingSpace ? 2 : undefined}
          />
        )}
        {renderMarkdown && vm.response && (
          <div className="insytful-search-overview-content">
            {renderMarkdown(vm.response)}
          </div>
        )}
        {/* The feedback row is hidden while collapsed; without a disclaimer the
            footer would be an empty bordered box. */}
        {!vm.loading && !isFirstFailed && !vm.empty && (disclaimer || hasFeedback) && (
          <div className="insytful-search-overview-footer">
            {feedback && (
              <FeedbackReporting
                feedback={feedback}
                hidden={!hasFeedback}
                target={vm.ids && { ...vm.ids, baseUrl: options.baseUrl, config: options.config, searchConfig: options.searchConfig }}
                voteState={voteState}
              />
            )}
            {disclaimer && <div className="insytful-search-overview-disclaimer">{disclaimer}</div>}
          </div>
        )}
        {vm.error && (
          <div className="insytful-search-overview-error">{renderError(vm.error)}</div>
        )}
        {vm.empty && renderEmpty?.()}
        {!doShowSkeleton && isCollapsed && (
          <div className="insytful-search-overview-fade" aria-hidden="true" />
        )}
      </div>
      {hasToggle && (
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
      {isConversational && isExpanded && (
        <div className="insytful-search-overview-followups" ref={followUpsRef}>
          {hasFollowUps && (
            <ul className="insytful-search-overview-thread" ref={threadRef}>
              {followUps.map((message, i) => {
                if (message.role === "user") return <Message key={i} message={message} />;

                const isStreaming = isThreadLoading && message === isLastFollowUp;
                const isFailed = !!vm.error && message === isLastFollowUp;
                const hasFooter = (feedback || disclaimer) && !isStreaming && !isFailed && !!message.content;

                // Assistant follow-ups use the SAME markup as the first
                // answer (whole markdown, unshifted headings, CTAs above) so
                // consumer prose styles apply identically. The shared
                // <Message> is modal-flavoured: it demotes headings a level
                // and splits the reply per paragraph.
                return (
                  <li key={i} className="insytful-search-message" data-role="assistant">
                    <div className="insytful-search-message-content-outer">
                      <SearchCtas ctas={message.ctas} onCtaClick={onCtaClick} />
                      {isStreaming && !message.content ? (
                        <SearchSkeletonBody elapsed={vm.elapsed} messages={searching || []} />
                      ) : (
                        renderMarkdown &&
                        message.content && (
                          <div className="insytful-search-overview-content">
                            {renderMarkdown(message.content)}
                          </div>
                        )
                      )}
                      {/* Each follow-up votes on its own `mid`; same footer as a modal answer. */}
                      {hasFooter && (
                        <div className="insytful-search-message-footer">
                          {feedback && (
                            <FeedbackReporting
                              feedback={feedback}
                              target={
                                message.mid && message.sid
                                  ? { mid: message.mid, sid: message.sid, baseUrl: options.baseUrl, config: options.config, searchConfig: options.searchConfig }
                                  : undefined
                              }
                              voteState={voteState}
                            />
                          )}
                          {disclaimer && <div className="insytful-search-message-disclaimer">{disclaimer}</div>}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div ref={spacerRef} className="insytful-search-overview-spacer" aria-hidden="true" />
        </div>
      )}
      {isConversational && isExpanded && (
        // A direct child of the root so `position: sticky` is contained by the
        // whole overview, not just the follow-ups block: the input pins to the
        // viewport bottom whenever the overview runs past the fold — including
        // while the first answer is still streaming.
        <SearchInput
          embedded
          className="insytful-search-overview-input"
          placeholder={placeholder ?? "Ask a follow-up question"}
          disabled={isThreadLoading}
          onSubmit={onFollowUp}
        />
      )}
    </div>
  );
};

SearchOverview.displayName = "Search.Overview";
