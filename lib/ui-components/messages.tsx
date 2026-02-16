import React, { useRef, useEffect, useState } from "react";
import { Message, type MessageProps } from "./message";
import { TypingIndicator } from "./typing-indicator";
import { hash } from "../utilities/hash.util";
import { ResponseFeedback } from "./response-feedback";
import type { ChatModalDialogProps } from "../modal-components/chat-modal-dialog";

interface MessagesProps {
  messages: MessageProps["message"][];
  loading: boolean;
  logo?: React.ReactNode;
  error?: ChatModalDialogProps['error'];
  renderMarkdown?: (markdown: string) => React.ReactNode;
  onSwitchClassic: ChatModalDialogProps["onSwitch"];
}

export function Messages({
  messages,
  loading,
  logo,
  error,
  renderMarkdown,
  onSwitchClassic,
}: MessagesProps) {
  const elContainerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setOverflowing] = useState(false);
  const [atBottom, setBottom] = useState(false);
  const hasHitBottomAfterLoadRef = useRef(false);

  useEffect(() => {
    const container = elContainerRef.current;
    if (!container) return;

    const doCheckOverflow = () =>
      setOverflowing(container.scrollHeight > container.clientHeight);

    doCheckOverflow();
    window.addEventListener("resize", doCheckOverflow);
    return () => window.removeEventListener("resize", doCheckOverflow);
  }, [messages]);

  useEffect(() => {
    const container = elContainerRef.current;
    if (!container) return;

    const buffer = 40;
    const onScroll = () => {
      const atBottomNow = container.scrollTop + container.clientHeight >= container.scrollHeight - buffer;
      setBottom(atBottomNow);

      if (!loading && atBottomNow) hasHitBottomAfterLoadRef.current = true;
    };

    container.addEventListener("scroll", onScroll);
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, [messages, loading]);

  if (!messages || messages.length === 0) return null;

  const doShowMask = isOverflowing && !atBottom;
  const doShowIcon = isOverflowing && (loading ? !atBottom : !hasHitBottomAfterLoadRef.current && !atBottom);

  return (
    <div className="flex-1 min-h-0 relative w-full max-w-full">
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
            {loading && messages.length <= 1 && <TypingIndicator logo={logo} />}
            {!loading && !error && <ResponseFeedback onSwitchClassic={onSwitchClassic} />}
          </ul>
        </div>
      </div>
      {doShowIcon && (
        <div className="w-full max-w-[784px] mx-auto absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col justify-center items-center">
          <div
            key={`slide-icon-${messages.length}`}
            className="
                insytful-search-messages-icon
                min-w-[42px] h-[42px] w-[42px]
                rounded-full border border-gray-200 flex items-center justify-center
                p-[8px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]
                animate-slide-to-bounce-animate bg-white z-20"
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
