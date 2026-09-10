import { Cta } from '../api/rag.types';
/** Sparkle — AI mode leading icon (mirrors `AiIcon` in search-input.tsx). */
export declare const SPARKLE_ICON = "<svg focusable=\"false\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z\"/></svg>";
/** Magnifier — classic mode leading icon (mirrors `ClassicIcon`). */
export declare const CLASSIC_ICON = "<svg focusable=\"false\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.45 5.45 0 1 1 0 10.9 5.45 5.45 0 1 1 0-10.9Z\"/></svg>";
export interface DialogElements {
    /** The outermost container appended to the shadow root */
    root: HTMLDivElement;
    /** The dialog overlay — controls visibility via inert/opacity */
    dialogOuter: HTMLDivElement;
    /** The inner content column */
    dialogInner: HTMLDivElement;
    /** Slot for the trigger button (lives in light DOM projection) */
    triggerSlot: HTMLSlotElement;
    /** Slot for logo */
    logoSlot: HTMLSlotElement;
    /** Slot for title (empty-state heading) */
    titleSlot: HTMLSlotElement;
    /** Slot for description (empty-state text) */
    descriptionSlot: HTMLSlotElement;
    /** Slot for disclaimer text */
    disclaimerSlot: HTMLSlotElement;
    /** `.insytful-search-messages-outer` — holds the list and the scroll spacer */
    messagesContainer: HTMLDivElement;
    /** `.insytful-search-messages-container-scroll` — the scrolling element */
    messagesScroll: HTMLDivElement;
    /** `.insytful-search-messages-container` — outer wrapper (controls visibility) */
    messagesOuter: HTMLDivElement;
    /** The <ul> inside messagesContainer that holds message <li> elements */
    messagesList: HTMLUListElement;
    /** Spacer element used for scroll-to-top positioning */
    scrollSpacer: HTMLDivElement;
    /** Scroll hint arrow shown when content overflows */
    scrollHint: HTMLDivElement;
    /** Unstyled wrapper around logo, title and description; hidden once a conversation starts */
    emptyState: HTMLDivElement;
    /** `.insytful-search-suggestions-outer` — chips are rendered inside */
    suggestionsContainer: HTMLDivElement;
    /** Container for the close button; button is appended only when <insytful-close> exists */
    closeButtonContainer: HTMLDivElement;
    /** The input <form> — carries `data-mode` / `data-has-messages` */
    inputForm: HTMLFormElement;
    /** Leading icon wrapper — swapped between sparkle and magnifier by mode */
    inputIcon: HTMLDivElement;
    /** The textarea element */
    textarea: HTMLTextAreaElement;
    /** The send button */
    sendButton: HTMLButtonElement;
    /** Container for mode switch tabs (empty when no modes are configured) */
    modeSwitchContainer: HTMLDivElement;
    /** `.insytful-search-disclaimer-inner` */
    disclaimerInner: HTMLDivElement;
    /** `.insytful-search-message-input-bg` — glow behind the field (AI mode only) */
    inputGradient: HTMLDivElement;
}
/**
 * Transition for the dialog overlay's open/close fade.
 *
 * visibility (not just opacity/inert) is required so contrast scanners and
 * the a11y tree treat the closed dialog as hidden. The zero-duration
 * visibility transition is delayed on close so the opacity fade-out plays
 * before the element is hidden; on open it applies immediately.
 */
export declare function dialogTransition(open: boolean): string;
export declare function renderDialog(titleId: string, descriptionId: string): DialogElements;
/**
 * Create a user message `<li>` element.
 * Same markup as the React `<Message>` for role === "user".
 */
export declare function renderUserMessage(content: string): HTMLLIElement;
/**
 * Create an assistant message `<li>` with an inner content div that can be
 * updated during streaming.
 *
 * Tree (identical to the React `<Message>` for role === "assistant"):
 *   li > [logo data-placement=aside] + outer > inner > [logo data-placement=inline] + content
 * The stylesheet shows the aside logo on desktop and the inline one on mobile.
 *
 * Returns the `<li>`, the streaming target `contentDiv`, and `inner` so the
 * caller can insert the CTA row above it (a sibling inside `outer`).
 */
export declare function renderAssistantMessage(avatarHTML?: string | null): {
    li: HTMLLIElement;
    contentDiv: HTMLDivElement;
    inner: HTMLDivElement;
};
/**
 * Create skeleton body content (just the inner content, no <li> wrapper).
 * Mirrors React's SearchSkeletonBody — renders inside an assistant message slot.
 */
export declare function renderSkeletonBody(searchingText?: string): HTMLDivElement;
/**
 * Create a close-button element. Placed absolutely inside `dialogOuter`, so
 * the focus trap automatically includes it. `innerHTML` is raw markup; the
 * caller is expected to have sanitised (DOMPurify) if the source is untrusted.
 *
 * Passing `null` / empty uses the default ✕ icon.
 */
export declare function renderCloseButton(innerHTML: string | null, onClick: () => void, ariaLabel?: string): HTMLButtonElement;
/**
 * Create a suggestion chip. Same markup as one item of React's
 * `SearchSuggestions` (search-suggestions.tsx).
 */
export declare function renderSuggestionChip(text: string, onClick: () => void): HTMLLIElement;
/**
 * Create mode switch tabs. The active tab carries `data-active`; see
 * lib/search/search-modes.css for the default look and tokens.
 */
export declare function renderModeSwitchTabs(modes: Array<{
    name: string;
    label: string;
}>, activeMode: string, onSwitch: (mode: string) => void): HTMLDivElement;
/**
 * Create an error callout `<li>` element.
 * The callout markup matches React's `SearchErrorCallout`.
 */
export declare function renderErrorMessage(message: string, onSwitchClassic?: (() => void) | null, opts?: {
    title?: string;
    cta?: {
        text: string;
        path: string;
        target?: string;
        rel?: string;
    };
}): HTMLLIElement;
/**
 * Create the CTA quick-actions row rendered above an assistant answer.
 * Mirrors `lib/search/search-ctas.tsx` via the shared `ctaViewModel`.
 *
 * A11y (§10):
 * - the wrapper is `aria-live="off"` so the messages list's ancestor
 *   `aria-live="polite"` region never announces interactive content as flat
 *   prose;
 * - availability is announced instead via a one-shot visually-hidden
 *   `role="status"` node ("N quick actions available");
 * - the row is `role="group"` labelled by the visible "Quick actions"
 *   micro-label (`aria-labelledby`, unique id via a module counter);
 * - every chip is a separate tab stop — no roving tabindex.
 *
 * The caller inserts the returned element inside the assistant message's
 * `-content-outer`, ABOVE the `-content-inner` wrapper, so streaming
 * innerHTML rewrites of the content div cannot destroy the row or its
 * keyboard focus.
 */
export declare function renderCtaBar(ctas: Cta[], opts: {
    onCtaClick(cta: Cta): void;
}): HTMLElement;
