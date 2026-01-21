import { useEffect, useRef } from "react";
import { Message, type MessageProps } from "./Message";
import { TypingIndicator } from "./TypingIndicator";

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
  }, [messages, loading]);

  if (!messages || messages.length === 0) return null;

  return (
    <div className="h-screen flex flex-col w-full">
      <div
        ref={elMessagesRef}
        className="flex-1 h-0 overflow-y-auto w-full max-w-[784px] mx-auto px-4 w-full"
      >
        <ul className="max-w-[49rem] w-full flex flex-col gap-[2rem] p-0 m-0 list-none">
          {messages.map((message, i) => (
            <Message
              key={i}
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