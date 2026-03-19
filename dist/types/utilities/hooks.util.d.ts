/**
 * Custom React Hooks
 *
 * Focus trapping for accessible modal behaviour.
 */
export declare function useModalFocusTrap(setOpen: (open: boolean) => void, isOpen: boolean): {
    elModalRef: import('react').MutableRefObject<HTMLDivElement | null>;
};
