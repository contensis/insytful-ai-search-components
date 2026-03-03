import React, { forwardRef, useEffect, useRef, useState } from "react";
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
  isOpen: boolean;
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
      isOpen,
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
    const { left = 0, right = 0 } = offsets || {};
    const [height, setHeight] = useState(0);

    // Fade-out / swap / fade-in when switching between AI and Classic modes
    const TRANSITION_DURATION = 200; // Matches --insytful-search-transition-duration in main.css
    const [isClassicDisplayed, setClassicDisplayed] = useState(isClassic);
    const [isContentVisible, setContentVisible] = useState(true);
    const elTransitionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (isClassicDisplayed === isClassic) return;

      setContentVisible(false);

      const timer = setTimeout(() => {
        setClassicDisplayed(isClassic);
        setContentVisible(true);
      }, TRANSITION_DURATION);

      return () => {
        clearTimeout(timer);
        setContentVisible(true);
      };
    }, [isClassic, isClassicDisplayed]);

    // Only measure header offsets when the dialog is open
    useEffect(() => {
      if (typeof window === "undefined" || !isOpen) return;

      const calculateHeight = () => {
        const elements = document.querySelectorAll("[data-insytful-modal-offset]");

        let h = 0;
        elements.forEach((element) => h += (element as HTMLElement).offsetHeight);
        setHeight(h);
      };

      calculateHeight();

      const elements = document.querySelectorAll("[data-insytful-modal-offset]",);
      const resizeObserver = new ResizeObserver(() => calculateHeight());
      elements.forEach((el) => resizeObserver.observe(el));

      return () => resizeObserver.disconnect();
    }, [isOpen]);

    return (
      <div
        tabIndex={-1}
        id="insytful-search-dialog"
        ref={ref}
        role="dialog"
        aria-modal={isOpen || undefined}
        aria-labelledby="insytful-search-heading"
        // @ts-expect-error -- React doesn't have types for the inert attribute yet
        inert={isOpen ? undefined : ""}
        className={`insytful-search-dialog-outer fixed flex flex-col bg-white overflow-y-auto pb-0 ${isOpen ? "insytful-search-dialog-open" : "insytful-search-dialog-closed"}`}
        style={
          {
            zIndex: 999,
            top: `${height}px`,
            left,
            right,
            bottom: 0,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)`,
            ...styles,
          } as React.CSSProperties
        }
      >
        <div
          ref={elTransitionRef}
          className="insytful-search-mode-transition insytful-search-dialog-inner min-h-[500px] px-4 w-full mx-auto flex flex-col h-full justify-start md:justify-center gap-[24px] md:gap-[32px] pt-[32px]"
          style={{
            opacity: isContentVisible ? 1 : 0,
            transition: `opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease)`,
          }}
        >
          {(() => {
            const emptyStateTitle = isClassicDisplayed ? (classic?.title ?? "") : title;
            const emptyStateText = isClassicDisplayed ? (classic?.text ?? "") : text;
            const showEmptyState = messages.length === 0 || (isClassicDisplayed && messages.length >= 1);
            const hasVisibleHeading = showEmptyState && !!emptyStateTitle;

            return (
              <div aria-live="polite">
                {!hasVisibleHeading && (
                  <h1 id="insytful-search-heading" className="sr-only">
                    {isClassicDisplayed ? "Search" : (title || "AI Search")}
                  </h1>
                )}
                {showEmptyState && (
                  <div className="insytful-search-empty-state-outer flex flex-col md:mt-auto items-stretch gap-[24px] md:items-center md:gap-[32px]">
                    <EmptyState
                      title={emptyStateTitle}
                      text={emptyStateText}
                    />
                  </div>
                )}
              </div>
            );
          })()}

          {!isClassicDisplayed && (
            <>
              <Messages
                logo={logo}
                messages={messages}
                loading={loading}
                error={error}
                renderMarkdown={renderMarkdown}
                onSwitchClassic={onSwitchClassic}
              />
              {error && (
                <div className="insytful-search-error-callout-outer flex items-center justify-start max-w-[740px] w-full mx-auto">
                  <ErrorCallout
                    onSwitchClassic={onSwitchClassic}
                    message={error}
                  />
                </div>
              )}
            </>
          )}

          <MessageInput
            isClassic={isClassicDisplayed}
            onSend={onSend}
            disabled={loading}
            hasMessages={messages.length > 0}
          />

          {(messages.length === 0 || (isClassicDisplayed && messages.length >= 1)) && (
            <div className="insytful-search-suggestions-container flex flex-col gap-[16px] md:gap-[40px]">
              <Suggestions
                onSend={onSend}
                suggestions={
                  isClassicDisplayed ? (classic?.suggestions ?? []) : suggestions
                }
              />
              {isClassicDisplayed && classic?.renderSwitch
                ? classic.renderSwitch(onSwitch)
                : !isClassicDisplayed && renderSwitch
                  ? renderSwitch(onSwitch)
                  : null}
            </div>
          )}

          <div className="insytful-search-disclaimer-outer flex flex-col gap-4 mt-auto pb-[24px]">
            {disclaimer && !isClassicDisplayed && (
              <div className="insytful-search-disclaimer-inner text-sm leading-6 font-normal text-center text-[var(--lib-color-text-secondary)]">
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
