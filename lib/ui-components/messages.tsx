import { useEffect, useRef, useState } from "react";
import { Message, type MessageProps } from "./message";
import { TypingIndicator } from "./typing-indicator";
import { hash } from "../utilities/hash.util";


interface MessagesProps {
  messages: MessageProps["message"][];
  loading: boolean;
  logo?: React.ReactNode;
  renderMarkdown?: (markdown: string) => React.ReactNode;
}

export function Messages({
  messages,
  loading,
  logo,
  renderMarkdown,
}: MessagesProps) {
  const elMessagesRef = useRef<HTMLDivElement>(null);

  const [initalHeight, setInitalHeight] = useState<number | null>(null);
  const height = elMessagesRef?.current?.clientHeight;

  useEffect(() => {
    elMessagesRef.current?.scrollTo({
      top: elMessagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [loading]);

  useEffect(() => {
    if (!initalHeight && !!height) setInitalHeight(height);
  }, [initalHeight, height]);

  if (!messages || messages.length === 0) return null;

  return (
    <div className="messages">
      <div
        ref={elMessagesRef}
        style={{ maxHeight: `${initalHeight}px` }}
        className="messages__scroll-container"
      >
        <ul className="messages__list">
          {messages.map((message, i) => (
            <Message
              key={`${i}-${hash(message.content)}`}
              renderContent={renderMarkdown}
              logo={logo}
              message={message}
            />
          ))}
          {loading && <TypingIndicator logo={logo} />}
        </ul>
      </div>
    </div>
  );
}
