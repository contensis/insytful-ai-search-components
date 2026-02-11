import React, { useState, useCallback, useEffect, useRef } from "react";
import { useRAGConversationContext } from "contensis-rag-react";

import { ChatModalDialog } from "./chat-modal-dialog";
import type { ChatModalProps } from "./chat-modal.types";
import { useChatSend, useModalFocusTrap } from "../utilities/hooks.util";
import { useMockFetch } from "../utilities/mock-fetch";

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
    isOpen = false,
    onOpenChange,
    isDevMode = false,
    options,
  } = props;

  // if it is dev mode we will give a "fake" conversation context so that the UI doesn't break, but it won't have any real functionality
  // and so we can test the response UI in isolation
  useMockFetch(isDevMode, options?.baseUrl ?? '');

  const { messages, loading, error, ask } = useRAGConversationContext();

  // useCallback here so setOpen isn't recreated on every render, which would break the focus trap
  const isOpenRef = useRef(isOpen);
  useEffect(() => { isOpenRef.current = isOpen; }, [isOpen]);
  
  const setOpen = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    const nextValue = typeof value === 'function' ? value(isOpen) : value;
    onOpenChange?.(nextValue);
  }, [onOpenChange]);

  const [isClassic, setClassic] = useState(false);
  const onSwitch = useCallback(() => setClassic((p) => !p), []);

  const onSwitchClassic = useCallback(() => {
    setClassic(true);
  }, []);

  const { elModalRef } = useModalFocusTrap(setOpen, isOpen);

  const onSend = useChatSend({ isClassic, ask, classic });

  const modal = isOpen && (
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
      onSwitchClassic={onSwitchClassic}
      onSwitch={onSwitch}
      messages={messages}
      loading={loading}
      error={error}
      onSend={onSend}
      ref={elModalRef}
    />
  );

  return modal;
}
