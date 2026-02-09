import React, { forwardRef } from "react";
import { Messages } from "../ui-components/messages";
import { MessageInput } from "../ui-components/message-input";
import { ErrorCallout } from "../ui-components/error-callout";
import { Suggestions } from "../ui-components/suggestions";
import { EmptyState } from "../ui-components/empty-state";
import type { ChatModalProps } from "./chat-modal.types";

export type ChatModalDialogProps = {
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
  onSwitchClassic: () => void;
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
      onSwitchClassic,
      messages,
      loading,
      error,
      onSend,
      renderSwitch,
      styles,
    },
    ref,
  ) {
    const { top, bottom, left, right } = offsets || { top: "4em" };

    return (
      <div
        tabIndex={-1}
        id="insytful-search-dialog"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="insytful-search-heading"
        className="insytful-search-dialog-outer absolute inset-0 flex flex-col bg-white overflow-hidden min-h-0 py-8 px-4"
        style={
          {
            zIndex: 999,
            top,
            bottom,
            left,
            right,
            height: "calc(100svh - var(--offset-top, 0px) - var(--offset-bottom, 0px))",
            "--offset-top": typeof top === "number" ? `${top}px` : top,
            "--offset-bottom": typeof bottom === "number" ? `${bottom}px` : bottom,
            ...styles,
          } as React.CSSProperties
        }
      >
        <div
          className={`insytful-search-dialog-inner max-w-[52em] w-full mx-auto flex flex-col min-h-0 h-full justify-start md:justify-center gap-[24px] md:gap-[32px]`}
        >
          <h1 id="insytful-search-heading" className="sr-only">
            AI Search
          </h1>

          {(messages.length === 0 || isClassic && messages.length >= 1) && (
            <div className="insytful-search-empty-state-outer flex flex-col md:mt-auto items-stretch gap-[24px] md:items-center md:gap-[32px] flex justify-start md:justify-center items-center overflow-auto">
              <EmptyState
                title={isClassic ? (classic?.title ?? "") : title}
                text={isClassic ? (classic?.text ?? "") : text}
              />
            </div>
          )}

          {!isClassic && (
            <>
              <Messages
                logo={logo}
                messages={messages}
                loading={loading}
                renderMarkdown={renderMarkdown}
              />
              {error && (
                <div className="insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto">
                  <ErrorCallout
                    onSwitchClassic={() => {
                      onSwitchClassic();
                    }}
                    message={error}
                  />
                </div>
              )}
            </>
          )}

          <MessageInput
            isClassic={isClassic}
            onSend={onSend}
            disabled={loading}
            hasMessages={messages.length > 0}
          />

          {(messages.length === 0 || isClassic && messages.length >= 1) && (
            <div className="insytful-search-suggestions-container flex flex-col gap-[16px] md:gap-[40px]">
              <Suggestions
                onSend={onSend}
                suggestions={
                  isClassic ? (classic?.suggestions ?? []) : suggestions
                }
              />
              {isClassic && classic?.renderSwitch
                ? classic.renderSwitch(onSwitch)
                : !isClassic && renderSwitch
                  ? renderSwitch(onSwitch)
                  : null}
            </div>
          )}

          <div className="insytful-search-disclaimer-outer flex flex-col gap-4 mt-auto">
            {disclaimer && !isClassic && (
              <div className="insytful-search-disclaimer-inner hidden md:block text-sm leading-6 font-normal text-center text-[var(--lib-color-text-secondary)]">
                {disclaimer}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

ChatModalDialog.displayName = "ChatModalDialog";
