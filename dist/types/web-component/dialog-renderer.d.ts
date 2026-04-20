/**
 * DialogRenderer — builds the dialog DOM structure inside the shadow root.
 *
 * Mirrors the React component tree (SearchPortal > SearchRoot > Title,
 * Description, Messages, Input, Suggestions, Disclaimer) using plain DOM
 * elements with the same BEM class names and Tailwind utility classes so
 * the shared CSS produces an identical visual result.
 */
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
    /** Container for chat messages (populated by Unit 4) */
    messagesContainer: HTMLDivElement;
    /** Scrolling wrapper inside messages */
    messagesScroll: HTMLDivElement;
    /** The outer wrapper around messagesScroll (controls visibility) */
    messagesOuter: HTMLDivElement;
    /** The <ul> inside messagesContainer that holds message <li> elements */
    messagesList: HTMLUListElement;
    /** Spacer element used for scroll-to-top positioning */
    scrollSpacer: HTMLDivElement;
    /** Scroll hint arrow shown when content overflows */
    scrollHint: HTMLDivElement;
    /** The empty-state wrapper (title + description + suggestions) */
    emptyState: HTMLDivElement;
    /** Container for suggestion chips (populated by Unit 5) */
    suggestionsContainer: HTMLDivElement;
    /** Wrapper around the input card — exposed so `order` can be toggled for suggestions-position="below" */
    inputCardOuter: HTMLDivElement;
    /** Container for the close button; button is appended only when <insytful-close> exists */
    closeButtonContainer: HTMLDivElement;
    /** The input form */
    inputForm: HTMLFormElement;
    /** The textarea element */
    textarea: HTMLTextAreaElement;
    /** The send button */
    sendButton: HTMLButtonElement;
    /** Container for mode switch tabs (populated by Unit 5) */
    modeSwitchContainer: HTMLDivElement;
    /** The input card wrapper (textarea + mode switch) */
    inputCard: HTMLDivElement;
    /** Disclaimer wrapper at the bottom */
    disclaimerWrapper: HTMLDivElement;
    /** Gradient shimmer behind the input card (AI mode, empty state) */
    inputGradient: HTMLDivElement;
}
export declare function renderDialog(titleId: string, descriptionId: string): DialogElements;
/**
 * Create a user message `<li>` element.
 * Matches the React `<Message>` component styling for role === "user".
 */
export declare function renderUserMessage(content: string): HTMLLIElement;
/**
 * Create an assistant message `<li>` element with an inner content div
 * that can be updated during streaming.
 *
 * Returns both the `<li>` and the content `<div>` so the caller can
 * update `contentDiv.innerHTML` as chunks arrive.
 */
export declare function renderAssistantMessage(avatarHTML?: string | null): {
    li: HTMLLIElement;
    contentDiv: HTMLDivElement;
};
/**
 * Create skeleton body content (just the inner content, no <li> wrapper).
 * Mirrors React's SearchSkeletonBody — renders inside an assistant message slot.
 */
export declare function renderSkeletonBody(searchingText?: string): HTMLDivElement;
/**
 * Create a typing indicator `<li>` with animated dots.
 * Uses the `after:animate-dot-animate` Tailwind utility (dot-animate keyframe).
 */
export declare function renderTypingIndicator(avatarHTML?: string | null, text?: string): HTMLLIElement;
/**
 * Create a skeleton loader `<li>` with animated shimmer bars.
 * Uses the `animate-skeleton-shimmer` Tailwind utility (skeleton-shimmer keyframe).
 */
export declare function renderSkeletonLoader(avatarHTML?: string | null): HTMLLIElement;
/**
 * Create a close-button element. Placed absolutely inside `dialogOuter`, so
 * the focus trap automatically includes it. `innerHTML` is raw markup; the
 * caller is expected to have sanitised (DOMPurify) if the source is untrusted.
 *
 * Passing `null` / empty uses the default ✕ icon.
 */
export declare function renderCloseButton(innerHTML: string | null, onClick: () => void, ariaLabel?: string): HTMLButtonElement;
/**
 * Create a suggestion chip button.
 * Matches the React `SearchSuggestions` component styling from search-suggestions.tsx.
 */
export declare function renderSuggestionChip(text: string, onClick: () => void): HTMLLIElement;
/**
 * Create mode switch tabs.
 * Matches the React `SwitchModeTabs` styling from the playground app.tsx.
 */
export declare function renderModeSwitchTabs(modes: Array<{
    name: string;
    label: string;
}>, activeMode: string, onSwitch: (mode: string) => void): HTMLDivElement;
/**
 * Create an error callout `<li>` element.
 * Matches the React `SearchErrorCallout` component styling.
 */
export declare function renderErrorMessage(message: string, onSwitchClassic?: (() => void) | null): HTMLLIElement;
