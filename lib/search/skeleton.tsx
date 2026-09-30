import React, { useMemo } from "react";

/**
 * Props for the SearchSkeletonBody component.
 *
 * @property messages - An array of message objects, each containing a `from` milliseconds timestamp, an optional `to` milliseconds timestamp, and the message `text`.
 * @property elapsed - Optional elapsed time in milliseconds since the search started.
 * @property items - Optional list item count. When set, the skeleton is
 *   shaped like an answer (an intro, a divider, then bulleted items), grows
 *   to fill its container and clips what doesn't fit, so a generous count
 *   fills a reserved box of any height. The visible loading message is
 *   dropped; the host announces loading itself.
 */
export type SearchSkeletonProps = {
  messages: { from: number; to?: number | "Infinity"; text: string }[];
  elapsed?: number;
  items?: number;
};

const defaultMessages: SearchSkeletonProps["messages"] = [
  { from: 0, to: "Infinity", text: "Generating Response..." },
];

function AnimatedDots({ text }: { text: string }) {
  const hasEllipsis = text.includes("...");
  if (!hasEllipsis) return <>{text}</>;

  const [before, after] = text.split("...");
  return (
    <>
      {before}
      <span className="insytful-search-skeleton-dot">.</span>
      <span className="insytful-search-skeleton-dot" style={{ animationDelay: "0.2s" }}>
        .
      </span>
      <span className="insytful-search-skeleton-dot" style={{ animationDelay: "0.4s" }}>
        .
      </span>
      {after}
    </>
  );
}

function getActiveMessage(
  messages: SearchSkeletonProps["messages"],
  elapsed: number,
): string {
  for (const msg of messages) {
    const to = msg.to === "Infinity" ? Infinity : (msg.to ?? Infinity);
    if (elapsed >= msg.from && elapsed < to) {
      return msg.text;
    }
  }
  return messages[messages.length - 1]?.text || "Generating Response...";
}

export const SearchSkeletonBody = ({
  messages = defaultMessages,
  elapsed = 0,
  items,
}: SearchSkeletonProps) => {
  const activeMessage = useMemo(
    () => getActiveMessage(messages, elapsed),
    [messages, elapsed],
  );

  if (items !== undefined) {
    return (
      <div className="insytful-search-skeleton-content" aria-hidden="true">
        <div className="insytful-search-skeleton-fill">
          <div className="insytful-search-skeleton-intro">
            <div className="insytful-search-skeleton-bar" />
            <div className="insytful-search-skeleton-bar" />
            <div className="insytful-search-skeleton-bar" />
          </div>
          <div className="insytful-search-skeleton-divider" />
          <ul className="insytful-search-skeleton-list">
            {Array.from({ length: items }, (_, i) => (
              <li key={i} className="insytful-search-skeleton-item">
                <div className="insytful-search-skeleton-bar" />
                <div className="insytful-search-skeleton-bar" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="insytful-search-skeleton-content">
      <div className="insytful-search-skeleton-bar" />
      <div className="insytful-search-skeleton-bar" />
      <div className="insytful-search-skeleton-bar" />
      <span key={activeMessage} className="insytful-search-skeleton-text">
        <AnimatedDots text={activeMessage} />
      </span>
    </div>
  );
};
