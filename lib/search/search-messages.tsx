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
    [message.content]
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

function TypingIndicator({ logo }: { logo?: React.ReactNode }) {
  return (
    <li className="insytful-search-typing-indicator flex items-start gap-[12px] md:gap-[24px]">
      {logo && (
        <div className="insytful-search-typing-indicator-logo flex-shrink-0">
          {logo}
        </div>
      )}
      <div className="insytful-search-typing-indicator-txt text-[16px] md:text-[20px] leading-[32px] text-[var(--insytful-text-secondary)]">
        <span>
          Searching<span className="after:animate-dot-animate"></span>
        </span>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Error Callout                                                        */
/* ------------------------------------------------------------------ */

function ErrorCallout({ message }: { message: string }) {
  return (
    <div className="insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full">
      <div className="insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col">
        <p className="insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0">
          Something went wrong
        </p>
        <p className="insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0">
          {message}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Search.Messages                                                      */
/* ------------------------------------------------------------------ */

export type SearchMessagesProps = {
  className?: string;
};

export function SearchMessages({ className }: SearchMessagesProps) {
  const { messages, loading, error, renderMarkdown, logo } =
    useSearchContext("Search.Messages");

  const elContainerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setOverflowing] = useState(false);
  const [atBottom, setBottom] = useState(false);
  const atBottomRef = useRef(false);
  const hasHitBottomAfterLoadRef = useRef(false);

  // Overflow detection
  useEffect(() => {
    const container = elContainerRef.current;
    if (!container) return;

    const doCheckOverflow = () => {
      const overflowing = container.scrollHeight > container.clientHeight;
      setOverflowing((prev) => (prev === overflowing ? prev : overflowing));
    };

    doCheckOverflow();
    window.addEventListener("resize", doCheckOverflow);
    return () => window.removeEventListener("resize", doCheckOverflow);
  }, [messages.length]);

  // Scroll tracking
  useEffect(() => {
    const container = elContainerRef.current;
    if (!container) return;

    const buffer = 40;
    const onScroll = () => {
      const atBottomNow =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - buffer;

      if (atBottomNow !== atBottomRef.current) {
        atBottomRef.current = atBottomNow;
        setBottom(atBottomNow);
      }

      if (!loading && atBottomNow) hasHitBottomAfterLoadRef.current = true;
    };

    container.addEventListener("scroll", onScroll);
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, [messages.length, loading]);

  // Searching state — derived, not stateful
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
  const isSearching = loading && !!lastMessage && lastMessage.role === "user";

  // Scroll to bottom when new messages are added (handles reopen + new searches)
  const prevMessageCountRef = useRef(0);

  useEffect(() => {
    const container = elContainerRef.current;
    if (!container || messages.length === 0) return;

    if (messages.length > prevMessageCountRef.current) {
      const isFirstLoad = prevMessageCountRef.current === 0;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: isFirstLoad ? "auto" : "smooth",
      });
    }
    prevMessageCountRef.current = messages.length;
  }, [messages.length]);

  const doShowMask = isOverflowing && !atBottom;
  const doShowIcon =
    isOverflowing &&
    (loading
      ? !atBottom
      : !hasHitBottomAfterLoadRef.current && !atBottom);

  if (!messages || messages.length === 0) return null;

  return (
    <div className={`flex-1 min-h-0 relative w-full max-w-full ${className ?? ""}`}>
      <div
        ref={elContainerRef}
        className={`overflow-y-auto insytful-search-messages-container-scroll h-full w-full ${
          doShowMask
            ? "[mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]"
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
            {isSearching && <TypingIndicator logo={logo} />}
          </ul>
        </div>
      </div>

      {error && (
        <div className="insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto mt-[16px]">
          <ErrorCallout message={error} />
        </div>
      )}

      {doShowIcon && (
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
