import React, { useRef, useEffect, useState, useMemo } from "react";
import type { AIMessage } from "../api/types";
import { useSearchContext } from "./context";
import { hash } from "../utilities/hash.util";
import { SearchSkeletonBody, type SearchSkeletonProps } from "./skeleton";
import { SearchCtas } from "./search-ctas";
import { lastUserMessageEl, scrollMessageToTop } from "../utilities/scroll-message-to-top";
import { FeedbackReporting, type SearchOverviewFeedback } from "./feedback-reporting";
import { useVoteState, type VoteStateHandle } from "./vote-state";

/* ------------------------------------------------------------------ */
/* Single Message                                                       */
/* ------------------------------------------------------------------ */

function doShiftHeadings(markdown: string): string {
  return markdown.replace(/^(#{1,5})\s/gm, (_match, hashes: string) => `${hashes}# `);
}

export type MessageProps = {
  message: AIMessage;
  logo?: React.ReactNode;
  renderContent?: (content: string) => React.ReactNode;
  showSkeleton?: boolean;
  elapsed?: SearchSkeletonProps["elapsed"];
  searching?: SearchSkeletonProps['messages'];
  /** Report link + helpful / unhelpful vote under a finished answer. */
  feedback?: SearchOverviewFeedback;
  /** Where votes are sent; needed alongside `feedback` for the vote buttons. */
  voteOptions?: { config: string; aggregated?: boolean; apiUrl: string };
  /** This answer is still streaming: no feedback row yet. */
  isStreaming?: boolean;
  /** This answer failed: no footer. */
  isFailed?: boolean;
  /** Shared vote state (see useVoteState), so votes survive a remount. */
  voteState?: VoteStateHandle;
  /** Shown below the feedback row. */
  disclaimer?: React.ReactNode;
}

export function Message({
  message,
  logo,
  renderContent,
  showSkeleton,
  elapsed,
  searching,
  feedback,
  voteOptions,
  isStreaming,
  isFailed,
  voteState,
  disclaimer,
}: MessageProps) {
  const isUser = message.role === "user";
  const paragraphs = useMemo(
    () => message.content.split("\n\n"),
    [message.content],
  );

  return (
    <li
      className="insytful-search-message"
      data-role={message.role} // Also used to target user messages for scroll-to-top positioning
    >
      {logo && !isUser && (
        <div className="insytful-search-message-logo" data-placement="aside">
          {logo}
        </div>
      )}

      {isUser ? (
        <div className="insytful-search-message-content-outer">{message.content}</div>
      ) : (
        <div className="insytful-search-message-content-outer">
          {/* CTA quick actions live ABOVE the answer, OUTSIDE the skeleton/
              content conditional: they render while the skeleton throbs, and
              their DOM position is stable across streaming and error states.
              (Renders null when the message carries no CTAs.) */}
          <SearchCtas ctas={message.ctas} />
          <div className="insytful-search-message-content-inner">
            {logo && (
              <div className="insytful-search-message-logo" data-placement="inline">
                {logo}
              </div>
            )}
            {showSkeleton ? (
              <SearchSkeletonBody elapsed={elapsed} messages={searching || []} />
            ) : (
              <div className="insytful-search-message-content">
                {renderContent
                  ? renderContent(doShiftHeadings(paragraphs[0]))
                  : paragraphs[0]}
              </div>
            )}
          </div>
          {!showSkeleton &&
            paragraphs.slice(1).map((p, i) => (
              <div key={`${i}-${hash(p)}`} className="insytful-search-message-content">
                {renderContent ? renderContent(doShiftHeadings(p)) : p}
              </div>
            ))}
          {(feedback || disclaimer) && !showSkeleton && !isStreaming && !isFailed && message.content && (
            <div className="insytful-search-message-footer">
              {feedback && (
                <FeedbackReporting
                  feedback={feedback}
                  target={
                    voteOptions && message.mid && message.sid
                      ? { mid: message.mid, sid: message.sid, ...voteOptions }
                      : undefined
                  }
                  voteState={voteState}
                />
              )}
              {disclaimer && <div className="insytful-search-message-disclaimer">{disclaimer}</div>}
            </div>
          )}
        </div>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Search.Messages                                                      */
/* ------------------------------------------------------------------ */

export type SearchMessagesProps = {
  className?: string;
  searching?: SearchSkeletonProps['messages'];
  /** Report link + helpful / unhelpful vote under each finished answer. */
  feedback?: SearchOverviewFeedback;
  /** Rendered below each finished answer's feedback row. Use instead of
   *  Search.Disclaimer, not alongside it. */
  disclaimer?: React.ReactNode;
  children?: React.ReactNode;
};

export function SearchMessages({
  className,
  searching,
  feedback,
  disclaimer,
  children,
}: SearchMessagesProps) {
  const { messages, loading, elapsed, error, renderMarkdown, logo, open, options } =
    useSearchContext("Search.Messages");

  const voteState = useVoteState();
  const elContainerRef = useRef<HTMLDivElement>(null);
  const elSpacerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setOverflowing] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
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

  // When loading but there's no assistant message yet (user just submitted),
  // append a synthetic empty assistant so the skeleton has a slot to render in.
  const displayMessages = useMemo(() => {
    if (loading && (messages.length === 0 || messages[messages.length - 1].role === "user")) {
      return [...messages, { role: "assistant" as const, content: "" }];
    }
    return messages;
  }, [messages, loading]);

  // Skeleton visibility: show when loading, last assistant has no content, and no error.
  // The error guard prevents skeleton from showing alongside error callout mid-stream.
  const lastAssistant = [...displayMessages].reverse().find(m => m.role === 'assistant');
  const hasContent = !!lastAssistant?.content;
  const showSkeleton = loading && !hasContent && !error;

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
          const userMsgEl = lastUserMessageEl(scroller);
          if (userMsgEl) {
            efLastProgrammaticScrollRef.current = Date.now();
            scrollMessageToTop(scroller, userMsgEl, elSpacerRef.current);
          }
        }
      }
    }
    prevMessageCountRef.current = messages.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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


  // Show arrow when content overflows and user hasn't reached the bottom yet.
  // Once the user scrolls to the bottom, arrow hides and stays hidden.
  // Resets when a new user message is sent (setHasReachedBottom(false) on line 251).
  const showScrollHint = isOverflowing && !hasReachedBottom && !showSkeleton;

  if ((!messages || messages.length === 0) && !loading) return null;

  return (
    <div className={`insytful-search-messages-container ${className ?? ""}`.trim()}>
      <div
        ref={elContainerRef}
        className="insytful-search-messages-container-scroll"
        {...(showScrollHint ? { "data-scroll-hint": "" } : {})}
      >
        <div className="insytful-search-messages-outer">
          <ul className="insytful-search-messages-inner">
            {displayMessages.map((message, i) => {
              const isLastMessage = i === displayMessages.length - 1;
              const isLastAssistant =
                isLastMessage && message.role === "assistant";

              return (
                <Message
                  // Stable per-slot key — the array is append-only, so the
                  // index identifies a message for its lifetime. A content-
                  // derived key would remount the whole <li> on every token
                  // frame, destroying focus on the CTA chips mid-stream.
                  key={i}
                  renderContent={renderMarkdown}
                  logo={logo}
                  message={message}
                  showSkeleton={isLastAssistant && showSkeleton}
                  elapsed={elapsed}
                  searching={searching}
                  feedback={feedback}
                  voteOptions={options}
                  isStreaming={isLastAssistant && loading}
                  isFailed={isLastAssistant && !!error}
                  voteState={voteState}
                  disclaimer={disclaimer}
                />
              );
            })}
          </ul>
          {children}
          {/* Scroll spacer: expanded via ref when user sends a follow-up so
              their message can scroll to the top, collapses when response loads */}
          <div ref={elSpacerRef} className="insytful-search-scroll-spacer" aria-hidden="true" />
        </div>
      </div>

      {showScrollHint && (
        <div className="insytful-search-messages-hint" aria-hidden="true">
          <div key={`slide-icon-${messages.length}`} className="insytful-search-messages-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" focusable="false">
              <path
                stroke="currentColor"
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
