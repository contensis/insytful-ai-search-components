import { DialogElements } from './dialog-renderer';
import { RAGClient } from './rag-client';
export declare class InsytfulSearchElement extends HTMLElement {
    static observedAttributes: string[];
    private _isOpen;
    private _elements;
    private _shadow;
    private _themeStyle;
    private _resizeObserver;
    private _triggerClickHandler;
    private _offsetHeight;
    private _focusTrap;
    private _previousActiveElement;
    private _prevOverflow;
    private _prevPaddingRight;
    private _prevScrollY;
    private _titleId;
    private _descriptionId;
    private _ragClient;
    private _messages;
    private _isLoading;
    private _streamingContent;
    private _abortController;
    private _currentTypingIndicator;
    private _conversationGeneration;
    private _hasReachedBottom;
    private _lastProgrammaticScroll;
    private _messagesResizeObserver;
    private _suggestions;
    private _modes;
    private _currentMode;
    /**
     * Override the default markdown renderer.
     * The callback receives raw markdown and must return an HTML string.
     * Output is always sanitized with DOMPurify regardless of the callback.
     */
    renderMarkdown: ((md: string) => string) | null;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    disconnectedCallback(): void;
    /** Whether the dialog is currently open. */
    get isOpen(): boolean;
    /** Programmatically open or close the dialog. */
    set isOpen(value: boolean);
    /** Open the dialog. */
    open(): void;
    /** Close the dialog. */
    close(): void;
    /** Toggle the dialog open/closed. */
    toggle(): void;
    /** Access the RAG client for sending queries. */
    get ragClient(): RAGClient | null;
    /** Access internal dialog elements (for unit 4/5 extensions). */
    get dialogElements(): DialogElements | null;
    private _setOpen;
    private _restoreBodyScroll;
    private _setupTriggerSlot;
    private _updateTriggerState;
    private _setupInputForm;
    private _handleSend;
    private _runConversation;
    /**
     * Render markdown to sanitized HTML, using custom override if provided.
     */
    private _renderMarkdownSafe;
    /**
     * Remove the typing indicator from the messages list.
     */
    private _removeTypingIndicator;
    /**
     * Auto-scroll the messages container to the bottom during streaming,
     * but only if the user hasn't manually scrolled up.
     */
    private _autoScrollDuringStream;
    /**
     * Scroll a message element to the top of the chat viewport.
     * Mirrors search-messages.tsx `scrollMessageToTop`.
     */
    private _scrollMessageToTop;
    private _setupScrollTracking;
    private _updateScrollHint;
    private _setupOffsetMeasurement;
    private _measureOffset;
    private _applyOffset;
    private _buildRAGClient;
    /**
     * One-time parse of `<insytful-suggestion>` child elements.
     * CMS content is server-rendered so children are present at mount time.
     */
    private _parseSuggestions;
    /**
     * Hide the suggestions container (called after the first message is sent).
     */
    private _hideSuggestions;
    /**
     * One-time parse of `<insytful-mode>` child elements.
     * Reads `name`, `path` attributes and `textContent` as the tab label.
     */
    private _parseModes;
    /**
     * Render mode switch tabs into the modeSwitchContainer.
     */
    private _renderModeTabs;
    /**
     * Switch the active mode and re-render tabs.
     */
    private _switchMode;
    /**
     * One-time parse of `<insytful-close>` child elements.
     * If present, renders a close button into `closeButtonContainer` that
     * lives inside `dialogOuter` — so the focus trap picks it up automatically.
     *
     * The child's innerHTML (sanitised via DOMPurify) becomes the button's
     * content; an empty `<insytful-close></insytful-close>` renders a default
     * ✕ icon. Light-DOM children are hidden (`display: none`) since the render
     * happens in the shadow DOM.
     */
    private _parseCloseButton;
    /**
     * Apply `order:` CSS to the suggestions container and input-card wrapper
     * based on the `suggestions-position` attribute. Uses inline styles directly
     * rather than CSS sibling rules so the behaviour is independent of where the
     * elements sit in `dialogInner`'s flex children.
     */
    private _applySuggestionsPosition;
    /**
     * Navigate for classic mode — same-origin validated.
     * Mirrors search-modes.tsx classicOnSend logic.
     */
    private _navigateClassic;
}
