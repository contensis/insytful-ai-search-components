import React from "react";
import type { ChatModalDialogProps } from "../modal-components/chat-modal-dialog";

interface ErrorCalloutProps {
  message: string;
  onSwitchClassic: ChatModalDialogProps["onSwitch"];
}

export function ErrorCallout({ message, onSwitchClassic }: ErrorCalloutProps) {
  return (
    <div className="insytful-search-error-callout-inner flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full">
      <div className="insytful-search-error-callout-content flex-1 gap-[8px] flex flex-col">
        <p className="insytful-search-error-callout-title font-semibold text-[var(--insytful-callout-error-text)] m-0">Something went wrong</p>
        <p className="insytful-search-error-callout-text text-[var(--insytful-callout-error-text)] m-0">{message}</p>
      </div>
      <button
        onClick={onSwitchClassic}
        className="insytful-search-error-callout-btn underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline focus:outline-none text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
      >
        Try classic?
      </button>
    </div>
  );
}

