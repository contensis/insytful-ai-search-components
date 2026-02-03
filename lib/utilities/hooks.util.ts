import { useEffect, useMemo, useRef } from "react";
import { createFocusTrap } from "focus-trap";
import type { ChatModalProps  } from "../modal-components/chat-modal.types";
/* ------------------------------------------------------------------ */
/* useChatSend                                                          */
/* ------------------------------------------------------------------ */

type UseChatSendArgs = {
  isClassic: boolean;
  ask: (msg: string) => Promise<void>;
  classic?: ChatModalProps["classic"];
};

export function useChatSend({
  isClassic,
  ask,
  classic,
}: UseChatSendArgs): (msg: string) => Promise<void> {
  return useMemo(() => {
    if (!isClassic) {
      return async (msg: string) => {
        await ask(msg);
      };
    }

    return async (msg: string) => {
      const query = encodeURIComponent(msg);
      const path = classic?.path ?? "/search?q=";
      window.location.href = `${path}${query}`;
    };
  }, [isClassic, ask, classic?.path]);
}

/* ------------------------------------------------------------------ */
/* useModalFocusTrap                                                    */
/* ------------------------------------------------------------------ */

export function useModalFocusTrap(
  setOpen: (open: boolean) => void,
  isOpen: boolean
) {
  const elModalRef = useRef<HTMLDivElement | null>(null);
  const elTriggerRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen || !elModalRef.current) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const trap = createFocusTrap(elModalRef.current, {
      fallbackFocus: elModalRef.current,
      escapeDeactivates: true,
      allowOutsideClick: true,

      clickOutsideDeactivates: (event) => {
        const target = event.target as Node;

        // ❗ Do NOT deactivate when clicking the trigger
        if (elTriggerRef.current?.contains(target)) return false;

        return true;
      },

      onDeactivate: () => setOpen(false),
    });

    trap.activate();

    return () => {
      trap.deactivate();
      previousFocusRef.current?.focus();
    };
  }, [isOpen, setOpen]);

  return {
    elModalRef,
    elTriggerRef,
  };
}
