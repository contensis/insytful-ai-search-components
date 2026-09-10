/**
 * Custom React Hooks
 *
 * Focus trapping for accessible modal behaviour.
 */

import React, { useEffect, useRef, useState } from "react";
import { createFocusTrap } from "focus-trap";

/* ------------------------------------------------------------------ */
/* useModalFocusTrap                                                    */
/* ------------------------------------------------------------------ */

export function useModalFocusTrap(
  setOpen: (open: boolean) => void,
  isOpen: boolean
) {
  const elModalRef = useRef<HTMLDivElement | null>(null);
  const elPreviousFocusRef = useRef<HTMLElement | null>(null);
  const elTrapRef = useRef<ReturnType<typeof createFocusTrap> | null>(null);

  const setOpenRef = useRef(setOpen);
  const isOpenRef = useRef(isOpen);
  useEffect(() => { setOpenRef.current = setOpen; }, [setOpen]);
  useEffect(() => { isOpenRef.current = isOpen; }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !elModalRef.current) return;

    elPreviousFocusRef.current = document.activeElement as HTMLElement;

    const trap = createFocusTrap(elModalRef.current, {
      fallbackFocus: elModalRef.current,
      initialFocus: () =>
        elModalRef.current?.querySelector("textarea") ?? elModalRef.current,
      escapeDeactivates: true,
      allowOutsideClick: true,
      clickOutsideDeactivates: (e) => {
        const target = e.target as HTMLElement;
        const isToggleButton = !!target.closest("[data-insytful-toggle]");
        return !isToggleButton;
      },
      onDeactivate: () => {
        if (isOpenRef.current) {
          setOpenRef.current(false);
        }
      },
      returnFocusOnDeactivate: false,
    });

    elTrapRef.current = trap;
    trap.activate();

    return () => {
      trap.deactivate();
      elTrapRef.current = null;
      elPreviousFocusRef.current?.focus();
    };
  }, [isOpen]);

  return { elModalRef };
}

/* ------------------------------------------------------------------ */
/* useStableId                                                          */
/* ------------------------------------------------------------------ */

// useId ships in React 18; fall back to a counter-based stable id for the
// React 17 peer range (same pattern as search-root.tsx).
let idCounter = 0;
export const useStableId =
  typeof React.useId === "function"
    ? (prefix: string) => `${prefix}-${React.useId()}`
    : (prefix: string) => {
        const [id] = useState(() => `${prefix}-${++idCounter}`);
        return id;
      };
