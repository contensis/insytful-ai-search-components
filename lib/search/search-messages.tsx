import React, { useRef, useEffect, useState, useMemo } from "react";
import { useSearchContext } from "./context";
import { hash } from "../utilities/hash.util";
import { SearchSkeleton } from "./skeleton";

/* ------------------------------------------------------------------ */
/* Single Message                                                       */
/* ------------------------------------------------------------------ */

function doShiftHeadings(markdown: string): string {
  return markdown.replace(/^(#{1,5})\s/gm, (_match, hashes: string) => `${hashes}# `);
}

function Message({
  message,
  logo,
  renderContent,
}: {
  message: { role: "user" | "assistant"; content: string };
  logo?: React.ReactNode;
  renderContent?: (content: string) => React.ReactNode;
}) {
  const isUser = message.role === "user";
  const paragraphs = useMemo(
    () => message.content.split("\n\n"),
    [message.content],
  );

  return (
    <li
      className={`insytful-search-message flex items-start gap-[24px] w-full max-w-full ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {logo && !isUser && (
        <div className="insytful-search-message-logo flex-shrink-0 hidden md:block">
          {logo}
        </div>
      )}

      <div
        style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
        className={`insytful-search-message-content-outer text-[1em] md:text-[1.25em] leading-[2] rounded-[16px] ${
          isUser
            ? "flex flex-col justify-center items-end px-[16px] py-[12px] gap-[10px] bg-[var(--insytful-btn-prompt-bg-default)] text-[var(--insytful-text-default)]"
            : "text-[var(--insytful-text-default)]"
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <>
            <div className="insytful-search-message-content-inner flex items-start gap-[12px] md:block md:gap-0">
              {logo && (
                <div className="insytful-search-message-logo flex-shrink-0 md:hidden">
                  {logo}
                </div>
              )}
              <div className="insytful-search-message-content">
                {renderContent
                  ? renderContent(doShiftHeadings(paragraphs[0]))
                  : paragraphs[0]}
              </div>
            </div>
            {paragraphs.slice(1).map((p, i) => (
              <div
                key={`${i}-${hash(p)}`}
                className="insytful-search-message-content mt-[8px]"
              >
                {renderContent ? renderContent(doShiftHeadings(p)) : p}
              </div>
            ))}
          </>
        )}
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll helper                                                        */
/* ------------------------------------------------------------------ */

/**
 * Scroll a message element to the top of the chat viewport.
 *
 * Uses scrollTo on the container ref (not scrollIntoView) to avoid
 * scrolling parent containers in the Shadow DOM portal.
 *
 * Temporarily expands a spacer div via direct DOM manipulation so the
 * browser has enough scrollHeight to position the message at the top.
 * The spacer is collapsed later when the response finishes loading.
 */
function scrollMessageToTop(
  scroller: HTMLDivElement,
  messageEl: HTMLElement,
  spacer: HTMLDivElement,
) {
  // Expand spacer instantly (no transition) so the browser has room to
  // scroll the message to the top. Direct DOM manipulation — immediate.
  spacer.style.transition = "none";
  spacer.style.height = `${scroller.clientHeight}px`;

  // Double-rAF: the first frame lets the browser process any pending
  // attribute changes (e.g. `inert` removal) and layout shifts (e.g.
  // dialog top-offset re-render). The second frame guarantees the
  // layout is fully settled before we measure positions and scroll.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const msgRect = messageEl.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const targetTop = scroller.scrollTop + (msgRect.top - scrollerRect.top);
      scroller.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  });
}

/* ------------------------------------------------------------------ */
/* Error Callout                                                        */
/* ------------------------------------------------------------------ */

export function SearchErrorCallout({ onSwitchClassic }: { onSwitchClassic?: () => void }) {
  return (
    <div className="insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full">
      <div className="insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col">
        <p className="insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0">
          Something went wrong
        </p>
        <p className="insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0">
          Failed to fetch
        </p>
      </div>
      {onSwitchClassic && (
        <button
          onClick={onSwitchClassic}
          className="insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
        >
          Try classic?
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Search.Messages                                                      */
/* ------------------------------------------------------------------ */

export type SearchMessagesProps = {
  className?: string;
  searchingText?: string;
  children?: React.ReactNode;
};

export function SearchMessages({
  className,
  searchingText: _searchingText,
  children,
}: SearchMessagesProps) {
  const { messages, loading, error, renderMarkdown, logo, open } =
    useSearchContext("Search.Messages");

  const elContainerRef = useRef<HTMLDivElement>(null);
  const elSpacerRef = useRef<HTMLDivElement>(null);
  const skeletonRef = useRef<HTMLLIElement>(null);
  const responseWrapperRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setOverflowing] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [skeletonInDOM, setSkeletonInDOM] = useState(false);
  const efLastProgrammaticScrollRef = useRef(0);

  // Overflow detection + "reached bottom" tracking
  useEffect(() => {
    const scroller = elContainerRef.current;
    if (!scroller) return;

    const checkOverflow = () => {
      const overflowing = scroller.scrollHeight > scroller.clientHeight;
      setOverflowing((prev) => (prev === overflowing ? prev : overflowing));
    };

    const onScroll = () => {
      checkOverflow();
      const atBottom =
        scroller.scrollTop + scroller.clientHeight >=
        scroller.scrollHeight - 40;
      // Only count as "reached bottom" from genuine user scroll,
      // not from our programmatic scroll-to-user-message
      const isProgrammatic = Date.now() - efLastProgrammaticScrollRef.current < 800;
      if (atBottom && !isProgrammatic && scroller.scrollHeight > scroller.clientHeight) {
        setHasReachedBottom(true);
      }
    };

    checkOverflow();
    scroller.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkOverflow);

    // Watch for content size changes (streaming responses growing)
    const messagesList = scroller.querySelector(
      ".insytful-search-messages-inner",
    );
    let rafId = 0;
    const ro = messagesList
      ? new ResizeObserver(() => {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(checkOverflow);
        })
      : null;
    if (ro && messagesList) ro.observe(messagesList);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkOverflow);
      if (ro) ro.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [messages.length]);

  // Searching state — derived, not stateful
  const lastMessage =
    messages.length > 0 ? messages[messages.length - 1] : null;
  const isSearching = loading && !!lastMessage && (
    lastMessage.role === "user" ||
    (lastMessage.role === "assistant" && !lastMessage.content)
  );

  // Handle new messages — scroll the latest user message to the top.
  //
  // Depends on BOTH messages.length AND open so that a message added
  // while the dialog was closed will trigger scroll when the dialog
  // opens.  prevMessageCountRef is only updated when the dialog is
  // visible; this keeps the count "stale" while closed so the scroll
  // re-fires on open.
  const prevMessageCountRef = useRef(0);

  useEffect(() => {
    if (messages.length === 0 || !open) return;
    const scroller = elContainerRef.current;

    if (messages.length > prevMessageCountRef.current) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "user") {
        // Reset overflow styles for new question
        setHasReachedBottom(false);

        // Follow-up question: scroll the user's message to the top of the container
        if (prevMessageCountRef.current > 0 && scroller && elSpacerRef.current) {
          const allMessages = scroller.querySelectorAll(
            ".insytful-search-message",
          );
          const userMsgEl = allMessages[
            allMessages.length - 1
          ] as HTMLElement | null;

          if (userMsgEl) {
            efLastProgrammaticScrollRef.current = Date.now();
            scrollMessageToTop(scroller, userMsgEl, elSpacerRef.current);
          }
        }
      }
    }
    prevMessageCountRef.current = messages.length;
  }, [messages.length, open]);

  // Collapse the scroll spacer smoothly once the response has finished
  // loading, or immediately if there was an error
  useEffect(() => {
    if ((!loading || error) && elSpacerRef.current) {
      elSpacerRef.current.style.transition = error
        ? "none"
        : "height 500ms ease-out";
      elSpacerRef.current.style.height = "0px";
    }
  }, [loading, error]);

  // Skeleton visibility: show while searching, fade-out when response arrives
  useEffect(() => {
    if (isSearching) {
      setShowSkeleton(true);
      setSkeletonInDOM(true);
      // Remove fade-out class for new search
      if (skeletonRef.current) {
        skeletonRef.current.classList.remove("fade-out");
      }
    } else if (showSkeleton) {
      // Response arrived—hide response overlay and trigger skeleton fade-out
      setShowSkeleton(false);
      if (skeletonRef.current) {
        skeletonRef.current.classList.add("fade-out");
      }
      // Keep skeleton in DOM so animation can complete; CSS forwards keeps it opacity: 0
    }
  }, [isSearching]);

  // Show arrow when content overflows and user hasn't reached the bottom yet.
  // Once the user scrolls to the bottom, arrow hides and stays hidden.
  // Resets when a new user message is sent (setHasReachedBottom(false) on line 212).
  const showScrollHint = isOverflowing && !hasReachedBottom && !isSearching;

  if (!messages || messages.length === 0) return null;

  return (
    <div
      className={`flex-1 min-h-0 relative w-full max-w-full ${className ?? ""}`}
    >
      <div
        ref={elContainerRef}
        className={`overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${
          showScrollHint
            ? "[mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_90%,rgba(0,0,0,0.3)_100%)]"
            : ""
        }`}
      >
        <div className="insytful-search-messages-outer w-full max-w-[var(--insytful-modal-max-width)] mx-auto">
          <ul className="insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none">
            {messages.map((message, i) => {
              const isLastMessage = i === messages.length - 1;
              const isLastAssistant = isLastMessage && message.role === "assistant" && (isSearching || showSkeleton);

              return isLastAssistant ? (
                <div key={`${i}-${hash(message.content)}-wrapper`} className="insytful-search-response-wrapper">
                  <div
                    ref={responseWrapperRef}
                    style={{
                      opacity: showSkeleton ? '0' : '1'
                    }}
                  >
                    <Message
                      renderContent={renderMarkdown}
                      logo={logo}
                      message={message}
                    />
                  </div>
                  {skeletonInDOM && (
                    <SearchSkeleton ref={skeletonRef} logo={logo} />
                  )}
                </div>
              ) : (
                <Message
                  key={`${i}-${hash(message.content)}`}
                  renderContent={renderMarkdown}
                  logo={logo}
                  message={message}
                />
              );
            })}
            {isSearching && !messages.length && showSkeleton && (
              <SearchSkeleton ref={skeletonRef} logo={logo} />
            )}
          </ul>
          {children}
          {/* Scroll spacer: expanded via ref when user sends a follow-up so
              their message can scroll to the top, collapses when response loads */}
          <div ref={elSpacerRef} className="insytful-search-scroll-spacer" aria-hidden="true" />
        </div>
      </div>

      {showScrollHint && (
        <div className="w-full max-w-[var(--insytful-modal-max-width)] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center">
          <div
            key={`slide-icon-${messages.length}`}
            className="insytful-search-messages-icon min-w-[42px] h-[42px] w-[42px] rounded-full border border-gray-200 flex items-center justify-center p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] animate-slide-to-bounce-animate bg-white z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#333"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14M19 12l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

SearchMessages.displayName = "Search.Messages";
