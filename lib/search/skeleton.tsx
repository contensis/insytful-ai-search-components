import React, { useMemo } from "react";

/**
 * Props for the SearchSkeletonBody component.
 *
 * @property messages - An array of message objects, each containing a `from` milliseconds timestamp, an optional `to` milliseconds timestamp, and the message `text`.
 * @property elapsed - Optional elapsed time in milliseconds since the search started.
 */
export type SearchSkeletonProps = {
  messages: { from: number; to?: number | "Infinity"; text: string }[];
  elapsed?: number;
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
      <span className="animate-skeleton-dots">.</span>
      <span className="animate-skeleton-dots" style={{ animationDelay: "0.2s" }}>
        .
      </span>
      <span className="animate-skeleton-dots" style={{ animationDelay: "0.4s" }}>
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
}: SearchSkeletonProps) => {
  const activeMessage = useMemo(
    () => getActiveMessage(messages, elapsed),
    [messages, elapsed],
  );

  return (
    <div className="insytful-search-skeleton-content flex flex-col gap-[8px] w-full">
      <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-full" />
      <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-[90%]" />
      <div className="insytful-search-skeleton-bar animate-skeleton-shimmer w-[70%]" />
      <span
        key={activeMessage}
        className="insytful-search-skeleton-text insytful-search-skeleton-text-transition"
      >
        <AnimatedDots text={activeMessage} />
      </span>
    </div>
  );
};
