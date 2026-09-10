import { default as React } from 'react';
export declare function useModalFocusTrap(setOpen: (open: boolean) => void, isOpen: boolean): {
    elModalRef: React.MutableRefObject<HTMLDivElement | null>;
};
export declare const useStableId: (prefix: string) => string;
