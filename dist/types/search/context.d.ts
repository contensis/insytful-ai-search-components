import { default as React } from 'react';
import { Cta, AIMessage } from '../api/types';
/**
 * Creates a scoped context with a hook that throws if used outside the provider.
 * Standard compound-component context pattern.
 */
export declare function createCompoundContext<T>(componentName: string): readonly [React.Provider<T | null>, (consumerName: string) => T, () => T | null];
export type SearchContextValue = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    titleId: string;
    descriptionId: string;
    options: {
        config?: string;
        searchConfig?: string;
        baseUrl: string;
    };
    messages: AIMessage[];
    loading: boolean;
    elapsed: number;
    error?: string | null;
    onSend: (msg: string) => Promise<void>;
    /** Observability: fired with the full CTA on every CTA chip click (D8). */
    onCtaClick?: (cta: Cta) => void;
    renderMarkdown?: (markdown: string) => React.ReactNode;
    logo?: React.ReactNode;
    isDevMode: boolean;
    offsets?: {
        top?: number | string;
        left?: number | string;
        right?: number | string;
    };
    /** Live summed height of `data-insytful-offset` host elements (sticky header etc.) */
    computedOffsetHeight: number;
};
export declare const SearchRootProvider: React.Provider<SearchContextValue | null>, useSearchContext: (consumerName: string) => SearchContextValue, useSearchContextSafe: () => SearchContextValue | null;
export type ModeContextValue = {
    mode: string;
    onSwitchMode: (mode: string) => void;
};
export declare const ModeProvider: React.Provider<ModeContextValue | null>, useModeContext: (consumerName: string) => ModeContextValue, useModeContextSafe: () => ModeContextValue | null;
