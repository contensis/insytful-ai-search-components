import type { ChatModalDialogProps } from "../modal-components/chat-modal-dialog";

interface ErrorCalloutProps {
  message: string;
  onSwitchClassic: ChatModalDialogProps["onSwitch"];
}

export function ErrorCallout({ message, onSwitchClassic }: ErrorCalloutProps) {
  return (
    <div className="flex items-start flex-col gap-3 p-4 border-l-4 border-ai-lib-error-border bg-ai-lib-error-bg rounded-r-lg max-w-full w-full">
      <div className="flex-1 gap-2 flex flex-col">
        <p className="font-semibold text-ai-lib-error-text m-0">Something went wrong</p>
        <p className="text-sm text-ai-lib-error-text m-0">{message}</p>
      </div>
      <button
        onClick={onSwitchClassic}
        className="underline text-[#333] hover:text-[#333]/80 hover:no-underline focus:outline-none text-[14px] font-medium"
      >
        Try classic?
      </button>
    </div>
  );
}

