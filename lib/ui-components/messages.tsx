import React from "react";
import { Message, type MessageProps } from "./message";
import { TypingIndicator } from "./typing-indicator";
import { hash } from "../utilities/hash.util";
import { ResponseFeedback } from "./response-feedback";
import type { ChatModalDialogProps } from "../modal-components/chat-modal-dialog";


interface MessagesProps {
  messages: MessageProps["message"][];
  loading: boolean;
  logo?: React.ReactNode;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  onSwitchClassic:  ChatModalDialogProps["onSwitch"];
}

export function Messages({
  messages,
  loading,
  logo,
  renderMarkdown,
  onSwitchClassic,
}: MessagesProps) {
  if (!messages || messages.length === 0) return null;

  return (
    <div className="insytful-search-messages-container-scroll overflow-y-auto min-h-0 flex-1 ">
    <div
      className="insytful-search-messages-outer w-full max-w-[784px] mx-auto"
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
        {loading &&  messages.length <= 1 && <TypingIndicator logo={logo} />}
        {!loading && <ResponseFeedback onSwitchClassic={onSwitchClassic} />}
      </ul>
    </div>
    </div>
  );
}
