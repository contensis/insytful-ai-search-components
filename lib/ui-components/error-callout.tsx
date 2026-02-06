import type { ChatModalDialogProps } from "../modal-components/chat-modal-dialog";

interface ErrorCalloutProps {
  message: string;
  onSwitchClassic: ChatModalDialogProps["onSwitch"];
}

export function ErrorCallout({ message, onSwitchClassic }: ErrorCalloutProps) {
  return (
    <div className="flex items-start flex-col gap-[12px] p-[16px] border-l-[4px] border-[var(--insytful-callout-error-border)] bg-[var(--insytful-callout-error-bg)] rounded-r-lg max-w-full w-full">
      <div className="flex-1 gap-[8px] flex flex-col">
        <p className="font-semibold text-[var(--insytful-callout-error-text)] m-0">Something went wrong</p>
        <p className="text-[14px] text-[var(--insytful-callout-error-text)] m-0">{message}</p>
      </div>
      <button
        onClick={onSwitchClassic}
        className="underline text-[var(--insytful-callout-error-text)] hover:text-[var(--insytful-callout-error-text)]/80 hover:no-underline focus:outline-none text-[14px] font-medium"
      >
        Try classic?
      </button>
    </div>
  );
}

