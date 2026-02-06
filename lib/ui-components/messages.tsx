import { useEffect, useRef } from "react";
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

  useEffect(() => {
    elMessagesRef.current?.scrollTo({
      top: elMessagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [loading]);

  if (!messages || messages.length === 0) return null;

  return (
    <div
      ref={elMessagesRef}
      className="insytful-search-messages-outer flex-1 overflow-y-auto w-full max-w-[784px] mx-auto min-h-0"
    >
      <ul className="insytful-search-messages-inner flex flex-col gap-[32px] max-w-full w-full p-0 m-0 list-none">
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
  );
}
