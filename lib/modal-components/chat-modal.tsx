import { ModalButton } from "../ui-components/modal-button";
import { useRAGConversationContext } from "contensis-rag-react";
import { useState, useMemo, useCallback, useEffect } from "react";

import { ChatModalDialog } from "./chat-modal-dialog";
import type { ChatModalProps } from "./chat-modal.types";
import { useChatSend, useModalFocusTrap } from "../utilities/hooks.util";

export function ChatModal(props: ChatModalProps) {
  const {
    title,
    text,
    disclaimer,
    classic,
    suggestions,
    offsets,
    logo,
    styles,
    renderSwitch,
    renderMarkdown,
  } = props;

  const { messages, loading, error, ask } = useRAGConversationContext();

  const [isOpen, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const [isClassic, setClassic] = useState(false);
  const onSwitch = useCallback(() => setClassic((p) => !p), []);

  const { elModalRef, elTriggerRef } = useModalFocusTrap(setOpen, isOpen);

  const onSend = useChatSend({ isClassic, ask, classic });

  const a11y = useMemo(
    () => ({
      "aria-haspopup": "dialog" as const,
      "aria-expanded": isOpen,
      "aria-controls": "ai-search-dialog",
    }),
    [isOpen],
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <ModalButton
        ref={elTriggerRef}
        toggle={toggle}
        isOpen={isOpen}
        {...a11y}
      />
      {isOpen && (
        <ChatModalDialog
          styles={styles}
          title={title}
          text={text}
          disclaimer={disclaimer}
          classic={classic}
          suggestions={suggestions}
          offsets={offsets}
          logo={logo}
          renderMarkdown={renderMarkdown}
          renderSwitch={renderSwitch}
          isClassic={isClassic}
          onSwitch={onSwitch}
          messages={messages}
          loading={loading}
          error={error}
          onSend={onSend}
          ref={elModalRef}
        />
      )}
    </>
  );
}
