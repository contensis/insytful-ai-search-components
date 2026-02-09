/**
 * Custom React Hooks for Chat Modal Functionality
 * 
 * This file contains reusable hooks for:
 * - Focus trapping (accessibility)
 * - Message sending (AI vs classic search modes)
 * - Auto-scrolling to bottom of messages
 */

import { useEffect, useMemo, useRef } from "react";
import { createFocusTrap } from "focus-trap";
import type { ChatModalProps  } from "../modal-components/chat-modal.types";

/* ------------------------------------------------------------------ */
/* useChatSend - Handles message submission                            */
/* ------------------------------------------------------------------ */

type UseChatSendArgs = {
  isClassic: boolean;  // Classic search mode vs AI conversation mode
  ask: (msg: string) => Promise<void>;  // AI conversation function
  classic?: ChatModalProps["classic"];  // Classic search configuration
};

/**
 * Hook that returns a message send function based on mode
 * 
 * AI Mode: Sends message to RAG conversation API
 * Classic Mode: Redirects to search results page
 * 
 * @param isClassic - Whether to use classic search mode
 * @param ask - RAG conversation function for AI mode
 * @param classic - Configuration for classic search mode
 * @returns Async function to send a message
 */
export function useChatSend({
  isClassic,
  ask,
  classic,
}: UseChatSendArgs): (msg: string) => Promise<void> {
  return useMemo(() => {
    // AI Mode: Send to RAG conversation
    if (!isClassic) {
      return async (msg: string) => {
        await ask(msg);
      };
    }

    // Classic Mode: Redirect to search results page
    return async (msg: string) => {
      const query = encodeURIComponent(msg);
      const path = classic?.path ?? "/search?q=";  // Default to /search?q=
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
  const elpreviousFocusRef = useRef<HTMLElement | null>(null);
  const elTrapRef = useRef<ReturnType<typeof createFocusTrap> | null>(null);

  // Store setOpen and isOpen in refs so the focus trap can access the latest values without needing to be re-created
  // Prevents focus trap from breaking when setOpen changes on every render
  const setOpenRef = useRef(setOpen);
  const isOpenRef = useRef(isOpen);
  useEffect(() => { setOpenRef.current = setOpen; }, [setOpen]);
  useEffect(() => { isOpenRef.current = isOpen; }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !elModalRef.current) return;

    // Element that was focused before opening the modal, to restore focus on close.
    elpreviousFocusRef.current = document.activeElement as HTMLElement;

    const trap = createFocusTrap(elModalRef.current, {
      fallbackFocus: elModalRef.current,
      initialFocus: () => elModalRef.current?.querySelector("textarea") ?? elModalRef.current,
      escapeDeactivates: true,           // pressing Escape closes modal
      allowOutsideClick: true,
      clickOutsideDeactivates: (e) => {
        // Check if the click target is the close/toggle button
        // If so, let the button handle the toggle without deactivating the trap first
        const target = e.target as HTMLElement;
        const isToggleButton = target.closest('button')?.textContent?.includes('Open') || 
                               target.closest('button')?.textContent?.includes('Close');
        
        // Only auto-deactivate if clicking outside AND not on a toggle button
        return !isToggleButton;
      },
      onDeactivate: () => setOpen(false),
      returnFocusOnDeactivate: false,    
    });

    elTrapRef.current = trap;
    trap.activate();

    return () => {
      trap.deactivate();
      elTrapRef.current = null;
      elpreviousFocusRef.current?.focus();
    };
  }, [isOpen, setOpen]);

  return {
    elModalRef,
  };
}
