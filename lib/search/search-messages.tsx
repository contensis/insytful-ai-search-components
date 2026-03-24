import React, { useRef, useEffect, useState, useMemo } from "react";
import { useSearchContext } from "./context";
import { hash } from "../utilities/hash.util";

/* ------------------------------------------------------------------ */
/* Single Message                                                       */
/* ------------------------------------------------------------------ */

function shiftHeadings(markdown: string): string {
  return markdown.replace(/^(#{1,5})\s/gm, (_match, hashes: string) => {
    return `${hashes}# `;
  });
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
        className={`insytful-search-message-content-outer text-[16px] md:text-[20px] leading-[32px] rounded-[16px] ${
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
                  ? renderContent(shiftHeadings(paragraphs[0]))
                  : paragraphs[0]}
              </div>
            </div>
            {paragraphs.slice(1).map((p, i) => (
              <div
                key={`${i}-${hash(p)}`}
                className="insytful-search-message-content mt-[8px]"
              >
                {renderContent ? renderContent(shiftHeadings(p)) : p}
              </div>
            ))}
          </>
        )}
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Typing Indicator                                                     */
/* ------------------------------------------------------------------ */

function TypingIndicator({
  logo,
  text = "Searching",
}: {
  logo?: React.ReactNode;
  text?: string;
}) {
  return (
    <li className="insytful-search-typing-indicator flex items-start gap-[12px] md:gap-[24px]">
      {logo && (
        <div className="insytful-search-typing-indicator-logo flex-shrink-0">
          {logo}
        </div>
      )}
      <div className="insytful-search-typing-indicator-txt text-[16px] md:text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]">
        <span>
          {text}
          <span className="after:animate-dot-animate"></span>
        </span>
      </div>
    </li>
  );
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
  searchingText,
  children,
}: SearchMessagesProps) {
  const { messages, loading, renderMarkdown, logo } =
    useSearchContext("Search.Messages");

  const elContainerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setOverflowing] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const lastProgrammaticScrollRef = useRef(0);

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
      const isProgrammatic = Date.now() - lastProgrammaticScrollRef.current < 800;
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
  const isSearching = loading && !!lastMessage && lastMessage.role === "user";

  // Handle new messages
  const prevMessageCountRef = useRef(0);

  useEffect(() => {
    if (messages.length === 0) return;
    const scroller = elContainerRef.current;

    if (messages.length > prevMessageCountRef.current) {
      const lastMessage = messages[messages.length - 1];

      if (lastMessage.role === "user") {
        // Reset overflow styles for new question
        setHasReachedBottom(false);

        // 2nd+ user message: scroll to the user's message so they
        // see their question and the typing/loading indicator below
        if (messages.length > 2 && scroller) {
          const allMessages = scroller.querySelectorAll(
            ".insytful-search-message",
          );
          const userMsgEl = allMessages[
            allMessages.length - 1
          ] as HTMLElement | null;

          if (userMsgEl) {
            lastProgrammaticScrollRef.current = Date.now();
            const rect = userMsgEl.getBoundingClientRect();
            const scrollerRect = scroller.getBoundingClientRect();
            scroller.scrollTo({
              top: scroller.scrollTop + rect.top - scrollerRect.top - 16,
              behavior: "smooth",
            });
          }
        }
      }
    }
    prevMessageCountRef.current = messages.length;
  }, [messages.length]);

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
        <div className="insytful-search-messages-outer w-full max-w-[784px] mx-auto">
          <ul className="insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none">
            {messages.map((message, i) => (
              <Message
                key={`${i}-${hash(message.content)}`}
                renderContent={renderMarkdown}
                logo={logo}
                message={message}
              />
            ))}
            {isSearching && (
              <TypingIndicator logo={logo} text={searchingText} />
            )}
          </ul>
          {children}
        </div>
      </div>

      {showScrollHint && (
        <div className="w-full max-w-[784px] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center">
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
