import React, { forwardRef } from "react";
import { Messages } from "../ui-components/messages";
import { MessageInput } from "../ui-components/message-input";
import { ErrorCallout } from "../ui-components/error-callout";
import { Suggestions } from "../ui-components/suggestions";
import { EmptyState } from "../ui-components/empty-state";
import type { ChatModalProps } from "./chat-modal.types";

type ChatModalDialogProps = {
  title: ChatModalProps["title"];
  text: ChatModalProps["text"];
  disclaimer?: ChatModalProps["disclaimer"];
  classic?: ChatModalProps["classic"];
  suggestions?: ChatModalProps["suggestions"];
  offsets?: ChatModalProps["offsets"];
  logo?: ChatModalProps["logo"];
  renderMarkdown?: ChatModalProps["renderMarkdown"];
  renderSwitch?: ChatModalProps["renderSwitch"];

  isClassic: boolean;
  onSwitch: () => void;

  messages: { role: "user" | "assistant"; content: string }[];
  loading: boolean;
  error?: string | null;

  onSend: (msg: string) => Promise<void>;

  styles?: React.CSSProperties;
};

export const ChatModalDialog = forwardRef<HTMLDivElement, ChatModalDialogProps>(
  function ChatModalDialog(
    {
      title,
      text,
      disclaimer,
      classic,
      suggestions,
      offsets,
      logo,
      renderMarkdown,
      isClassic,
      onSwitch,
      messages,
      loading,
      error,
      onSend,
      renderSwitch,
      styles,
    },
    ref
  ) {
    const { top, bottom, left, right } = offsets || { top: "4em" };
    const hasMessages = messages.length >= 1;

    return (
      <div
        id="ai-search-dialog"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-search-heading"
        className="ai-lib-modal"
        style={{
          top,
          bottom,
          left,
          right,
          height: "calc(100svh - var(--offset-top, 0px) - var(--offset-bottom, 0px))",
          "--offset-top": typeof top === "number" ? `${top}px` : top,
          "--offset-bottom": typeof bottom === "number" ? `${bottom}px` : bottom,
          ...styles,
        } as React.CSSProperties}
      >
        <div className={`ai-lib-modal__container ${hasMessages ? "with-messages" : "without-messages"}`}>
          <div className={`ai-lib-modal__inner ${hasMessages ? "with-messages" : "without-messages"}`}>
            <h1 id="ai-search-heading" className="sr-only">AI Search</h1>

            {messages.length === 0 && (
              <EmptyState
                title={isClassic ? classic?.title ?? "" : title}
                text={isClassic ? classic?.text ?? "" : text}
              />
            )}

            <Messages
              logo={logo}
              messages={messages}
              loading={loading}
              renderMarkdown={renderMarkdown}
            />

            <MessageInput isClassic={isClassic} onSend={onSend} disabled={loading} />

            {error && (
              <div className="flex items-center justify-center w-full">
                <ErrorCallout
                  message={error}
                  onClose={() => window.location.reload()}
                />
              </div>
            )}

            {messages.length === 0 && (
              <div>
                <Suggestions
                  onSend={onSend}
                  suggestions={isClassic ? classic?.suggestions ?? [] : suggestions}
                />
                {isClassic && classic?.renderSwitch
                  ? classic.renderSwitch(onSwitch)
                  : !isClassic && renderSwitch
                    ? renderSwitch(onSwitch)
                    : null}
              </div>
            )}
          </div>

          {disclaimer && !isClassic && (
            <span className="ai-lib-modal__disclaimer">{disclaimer}</span>
          )}
        </div>
      </div>
    );
  }
);

ChatModalDialog.displayName = "ChatModalDialog";
