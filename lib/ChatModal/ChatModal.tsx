import "../styles.css";

import { Messages } from "../UI/Messages";
import { MessageInput } from "../UI/MessageInput";
import { ErrorCallout } from "../UI/ErrorCallout";
import { Suggestions } from "../UI/Suggestions";
import { EmptyState } from "../UI/EmptyState";
import { ModalButton } from "../UI/ModalButton";

import { useRAGConversationContext } from "contensis-rag-react";

import { useEffect, useRef, useState } from "react";
import { createFocusTrap } from "focus-trap";

export interface ChatModalProps {
  title: string;
  text: string;
  disclaimer?: string;
  renderSwitch?: (fn: () => void) => React.ReactNode;
  classic?: {
    title?: string; // e.g., "You're using classic search"
    text?: string; // e.g., "Start typing to find pages..."
    path: string; // e.g., "/search?q=" (used to set query)
    suggestions?: string[]; // e.g. ["Report a pothole", "Apply for a blue badge", "School term dates"]
    renderSwitch?: (fn: () => void) => React.ReactNode;
  };
  suggestions?: string[];
  offsets?: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  logo?: React.ReactNode;
  renderMarkdown?: (markdown: string) => React.ReactNode;
  renderTrigger?: (controls: {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: boolean;
    a11y: {
      "aria-haspopup": "dialog";
      "aria-expanded": boolean;
      "aria-controls": string;
    };
  }) => React.ReactNode;
}

export function ChatModal({
  title,
  text,
  disclaimer,
  classic,
  suggestions,
  offsets,
  logo,
  renderSwitch,
  renderTrigger,
  renderMarkdown,
}: ChatModalProps) {
  const { messages, loading, error, ask } = useRAGConversationContext();
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  const [isClassic, setClassic] = useState(false);
  const onSwitch = () => setClassic((prev) => !prev);

  const elModalRef = useRef<HTMLDivElement>(null);
  const elPreviousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !elModalRef.current) return;

    elPreviousFocusRef.current = document.activeElement as HTMLElement;

    const trap = createFocusTrap(elModalRef.current, {
      fallbackFocus: elModalRef.current,
      escapeDeactivates: true,
      clickOutsideDeactivates: true,
    });

    trap.activate();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      trap.deactivate();
      document.removeEventListener("keydown", onKeyDown);
      elPreviousFocusRef.current?.focus();
    };
  }, [isOpen]);

  const a11y = {
    "aria-haspopup": "dialog" as const,
    "aria-expanded": isOpen,
    "aria-controls": "ai-search-dialog",
  };

  const { top, bottom, left, right } = offsets || { top: "4rem" };

  const onSendFn = isClassic
    ? (msg: string) => {
        const query = encodeURIComponent(msg);
        const path = classic?.path ?? "/search?q=";
        window.location.href = `${path}${query}`;
      }
    : ask;

  return (
    <>
      {renderTrigger ? (
        renderTrigger({ open, close, toggle, isOpen, a11y })
      ) : (
        <ModalButton toggle={toggle} isOpen={isOpen} />
      )}
      {isOpen && (
        <div
          id="ai-search-dialog"
          ref={elModalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-search-heading"
          className="ai-lib-modal absolute inset-x-0 flex flex-col bg-white overflow-hidden min-h-0 px-[1rem] py-[2rem]"
          style={
            {
              top,
              bottom,
              left,
              right,
              height:
                "calc(100svh - var(--offset-top, 0px) - var(--offset-bottom, 0px))",
              "--offset-top": typeof top === "number" ? `${top}px` : top,
              "--offset-bottom":
                typeof bottom === "number" ? `${bottom}px` : bottom,
            } as React.CSSProperties
          }
        >
          <div
            className={`max-w-[52rem] w-full mx-auto  flex flex-col gap-[1.5rem] min-h-0 ${
              messages.length >= 1 ? "flex-1" : "h-full overflow-y-auto"
            }`}
          >
            <div
              className={`md:flex-1 min-h-0 flex flex-col justify-center items-stretch md:items-center gap-[1.5rem] md:gap-[2rem] ${
                messages.length >= 1 ? "h-full justify-between" : ""
              }`}
            >
              <h1 id="ai-search-heading" className="sr-only">
                AI Search
              </h1>
              <>
                {messages.length === 0 && (
                  <EmptyState
                    title={isClassic ? (classic?.title ?? "") : title}
                    text={isClassic ? (classic?.text ?? "") : text}
                  />
                )}
                <Messages
                  logo={logo}
                  messages={messages}
                  loading={loading}
                  renderMarkdown={renderMarkdown}
                />
                <MessageInput isClassic={isClassic} onSend={onSendFn} disabled={loading} />
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
                      onSend={onSendFn}
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
              </>
            </div>
            {disclaimer && (
              <span className="hidden md:block text-[var(--ai-lib-text-muted)] md:mt-auto text-center text-sm font-normal leading-6 text-center">
                {disclaimer}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
