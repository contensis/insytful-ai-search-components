import React from "react";
import type { ChatModalDialogProps } from "../modal-components/chat-modal-dialog";

interface ResponseFeedbackProps {
  onSwitchClassic: ChatModalDialogProps["onSwitch"];
}

export const ResponseFeedback = ({
  onSwitchClassic,
}: ResponseFeedbackProps) => {
  return (
    <div className="insytful-search-response-feedback w-full text-left">
      <span className="insytful-search-response-feedback-txt text-[var(--insytful-text-muted)] text-[18px]">
        Prefer not to use AI?{" "}
        <button
          className="insytful-search-response-feedback-btn text-[18px] underline text-[var(--insytful-text-link-default)] hover:text-[var(--insytful-text-link-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--insytful-semantic-search-field-focus)] focus:ring-offset-2 focus:ring-offset-white"
          onClick={() => onSwitchClassic()}
        >
          Use classic search
        </button>
      </span>
    </div>
  );
};
