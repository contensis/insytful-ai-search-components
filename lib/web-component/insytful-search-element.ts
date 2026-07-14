/**
 * InsytfulSearchElement — the <insytful-search> custom element.
 *
 * Mirrors the React SearchRoot + SearchPortal behaviour:
 *   - Attaches an open shadow root with scoped CSS
 *   - Builds a dialog DOM via DialogRenderer
 *   - Manages open/close state, body scroll lock, and offset measurement
 *   - Handles query submission, streaming AI responses with markdown rendering
 *   - Exposes `api-uri`, `project-id`, `sections`, `dev-mode`, `theme`
 *     as observed attributes
 */

import css from '../web-component.css?inline';
import {
  renderDialog,
  renderUserMessage,
  renderAssistantMessage,
  renderSkeletonBody,
  renderErrorMessage,
  renderSuggestionChip,
  renderModeSwitchTabs,
  renderCloseButton,
  type DialogElements,
} from './dialog-renderer';
import { RAGClient } from './rag-client';
// Types-only import — adds zero runtime weight to the IIFE bundle.
import type { RAGMessage } from '../api/rag.types';
import { renderMarkdown as defaultRenderMarkdown } from './markdown';
import { createMockFetch } from './mock-sse';
import { setupFocusTrap, type FocusTrap } from './focus-trap-setup';
import DOMPurify from 'dompurify';

/* ------------------------------------------------------------------ */
/* Unique ID generator (no React.useId available)                       */
/* ------------------------------------------------------------------ */

let idCounter = 0;
function uniqueId(prefix: string): string {
  return `${prefix}-${++idCounter}`;
}

/* ------------------------------------------------------------------ */
/* Custom Element                                                       */
/* ------------------------------------------------------------------ */

export class InsytfulSearchElement extends HTMLElement {
  static observedAttributes = ['api-uri', 'project-id', 'sections', 'dev-mode', 'theme', 'suggestions-position'];

  /* Internal state */
  private _isOpen = false;
  private _elements: DialogElements | null = null;
  private _shadow: ShadowRoot | null = null;
  private _themeStyle: HTMLStyleElement | null = null;
  private _resizeObserver: ResizeObserver | null = null;
  private _triggerClickHandler: ((e: Event) => void) | null = null;
  private _offsetHeight = 0;

  /* Focus trap state */
  private _focusTrap: FocusTrap | null = null;
  private _previousActiveElement: Element | null = null;

  /* Body scroll lock state (mirrors SearchRootInner lines 110-134) */
  private _prevOverflow = '';
  private _prevPaddingRight = '';
  private _prevScrollY = 0;

  /* ARIA IDs */
  private _titleId = '';
  private _descriptionId = '';

  /* RAG client — lazily created from attributes */
  private _ragClient: RAGClient | null = null;

  /* Conversation state (mirrors useRAGConversation's RAGMessage[] state) */
  private _messages: RAGMessage[] = [];
  private _isLoading = false;
  private _streamingContent = '';
  private _abortController: AbortController | null = null;
  private _conversationGeneration = 0;

  /* Scroll state */
  private _hasReachedBottom = false;
  private _lastProgrammaticScroll = 0;
  private _messagesResizeObserver: ResizeObserver | null = null;

  /* Suggestion chips */
  private _suggestions: string[] = [];

  /* Mode switching */
  private _modes: Array<{ name: string; path?: string; label: string }> = [];
  private _currentMode = 'ai';

  /* Error callout config (parsed from <insytful-callout type="error"> child) */
  private _errorCallout: {
    title?: string;
    text?: string;
    cta?: { text: string; path: string; target?: string; rel?: string };
  } | null = null;

  /* Avatar — cloned into each assistant message */
  private _avatarHTML: string | null = null;

  /* Skeleton loading text */
  searchingText: string = 'Generating response...';

  /**
   * Override the default markdown renderer.
   * The callback receives raw markdown and must return an HTML string.
   * Output is always sanitized with DOMPurify regardless of the callback.
   */
  renderMarkdown: ((md: string) => string) | null = null;

  /* ---------------------------------------------------------------- */
  /* Lifecycle                                                          */
  /* ---------------------------------------------------------------- */

  connectedCallback(): void {
    // Clear any stale RAG session so each page load starts fresh
    // (mirrors search-root.tsx top-level side-effect)
    RAGClient.clearSession();

    // Generate stable IDs for this instance
    this._titleId = uniqueId('insytful-search-heading');
    this._descriptionId = uniqueId('insytful-search-description');

    // Attach open shadow root
    this._shadow = this.attachShadow({ mode: 'open' });

    // Inject base CSS
    const baseStyle = document.createElement('style');
    baseStyle.textContent = css;
    this._shadow.appendChild(baseStyle);

    // Inject theme CSS (updated via attribute)
    this._themeStyle = document.createElement('style');
    const themeAttr = this.getAttribute('theme');
    if (themeAttr) this._themeStyle.textContent = themeAttr;
    this._shadow.appendChild(this._themeStyle);

    // Inject ::slotted() rules for projected content
    const slottedStyle = document.createElement('style');
    slottedStyle.textContent = `
      /* Ensure the custom element takes up space in the layout */
      :host {
        display: block;
      }

      /* Style projected slot content to match React component defaults */
      ::slotted([slot="title"]) {
        color: var(--insytful-text-default);
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
        text-align: center;
        margin: 0;
      }
      @media (min-width: 768px) {
        ::slotted([slot="title"]) {
          font-size: 56px;
          line-height: 64px;
        }
      }
      ::slotted([slot="description"]) {
        color: var(--insytful-text-default);
        font-size: 14px;
        line-height: 24px;
        font-weight: normal;
        text-align: center;
        margin: 0;
      }
      @media (min-width: 768px) {
        ::slotted([slot="description"]) {
          font-size: 20px;
          line-height: 32px;
        }
      }
      ::slotted([slot="disclaimer"]) {
        font-size: 14px;
        line-height: 24px;
        font-weight: normal;
        text-align: center;
        color: var(--insytful-disclaimer-text);
      }
    `;
    this._shadow.appendChild(slottedStyle);

    // Build dialog DOM
    this._elements = renderDialog(this._titleId, this._descriptionId);
    this._shadow.appendChild(this._elements.root);

    // --- Trigger slot handling ---
    this._setupTriggerSlot();

    // --- Input form submission ---
    this._setupInputForm();

    // --- Scroll tracking for overflow hint ---
    this._setupScrollTracking();

    // --- Offset measurement ---
    this._setupOffsetMeasurement();

    // --- Build RAG client from attributes ---
    this._buildRAGClient();

    // --- Parse suggestion chips from light DOM children ---
    this._parseSuggestions();

    // --- Parse mode children from light DOM ---
    this._parseModes();

    // --- Parse error callout config from light DOM ---
    this._parseErrorCallout();

    // --- Parse avatar from light DOM ---
    this._parseAvatar();

    // --- Parse close-button children from light DOM ---
    this._parseCloseButton();

    // --- Apply initial suggestions-position (if set at mount time) ---
    this._applySuggestionsPosition();
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void {
    if (oldVal === newVal) return;

    switch (name) {
      case 'theme':
        if (this._themeStyle) {
          this._themeStyle.textContent = newVal ?? '';
        }
        break;
      case 'api-uri':
      case 'project-id':
      case 'sections':
        // Rebuild RAG client when connection attributes change
        this._buildRAGClient();
        break;
      case 'dev-mode':
        // Rebuild RAG client to inject/remove mock fetch
        this._buildRAGClient();
        break;
      case 'suggestions-position':
        this._applySuggestionsPosition();
        break;
    }
  }

  disconnectedCallback(): void {
    // Abort any in-flight stream
    if (this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }

    // Deactivate focus trap
    if (this._focusTrap) {
      this._focusTrap.deactivate();
      this._focusTrap = null;
    }
    this._previousActiveElement = null;

    // Clean up ResizeObservers
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this._messagesResizeObserver) {
      this._messagesResizeObserver.disconnect();
      this._messagesResizeObserver = null;
    }

    // Restore body scroll if we're still open when removed
    if (this._isOpen) {
      this._restoreBodyScroll();
    }

    // Clean up trigger click handlers
    if (this._elements?.triggerSlot && this._triggerClickHandler) {
      const assigned = this._elements.triggerSlot.assignedElements();
      for (const el of assigned) {
        el.removeEventListener('click', this._triggerClickHandler);
      }
    }

    this._elements = null;
    this._shadow = null;
    this._themeStyle = null;
    this._ragClient = null;
  }

  /* ---------------------------------------------------------------- */
  /* Public API                                                         */
  /* ---------------------------------------------------------------- */

  /** Whether the dialog is currently open. */
  get isOpen(): boolean {
    return this._isOpen;
  }

  /** Programmatically open or close the dialog. */
  set isOpen(value: boolean) {
    this._setOpen(value);
  }

  /** Open the dialog, optionally sending a query immediately. */
  open(query?: string): void {
    this._setOpen(true);
    const trimmed = query?.trim();
    if (trimmed) setTimeout(() => this._handleSend(trimmed), 0);
  }

  /** Close the dialog. */
  close(): void {
    this._setOpen(false);
  }

  /** Toggle the dialog open/closed. */
  toggle(): void {
    this._setOpen(!this._isOpen);
  }

  /** Access the RAG client for sending queries. */
  get ragClient(): RAGClient | null {
    return this._ragClient;
  }

  /** Access internal dialog elements (for unit 4/5 extensions). */
  get dialogElements(): DialogElements | null {
    return this._elements;
  }

  /* ---------------------------------------------------------------- */
  /* Private — open/close with body scroll lock                         */
  /* ---------------------------------------------------------------- */

  private _setOpen(open: boolean): void {
    if (open === this._isOpen) return;

    const dialog = this._elements?.dialogOuter;
    if (!dialog) return;

    this._isOpen = open;

    if (open) {
      // Save the currently focused element so we can restore it on close
      this._previousActiveElement = document.activeElement;

      // Save scroll position and lock body scroll
      // (mirrors SearchRootInner lines 115-122)
      this._prevScrollY = window.scrollY;
      this._prevOverflow = document.body.style.overflow;
      this._prevPaddingRight = document.body.style.paddingRight;

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      window.scrollTo(0, 0);

      // Show dialog
      dialog.removeAttribute('inert');
      dialog.style.opacity = '1';
      dialog.style.pointerEvents = 'auto';
      dialog.classList.remove('insytful-search-dialog-closed');
      dialog.classList.add('insytful-search-dialog-open');

      // Update offset
      this._measureOffset();

      // Activate focus trap after the dialog is visible in the DOM
      // (setTimeout 0 ensures layout has settled before focus-trap queries focusable elements)
      setTimeout(() => {
        // Guard: dialog may have been closed before this fires (rapid open→close)
        if (!this._isOpen) return;
        if (!this._focusTrap) {
          this._focusTrap = setupFocusTrap(dialog, {
            onDeactivate: () => this._setOpen(false),
          });
        }
        this._focusTrap.activate();
      }, 0);

      // Dispatch open event
      this.dispatchEvent(new CustomEvent('insytful-open', {
        bubbles: true,
        composed: true,
      }));
    } else {
      // Deactivate focus trap before hiding the dialog
      if (this._focusTrap) {
        this._focusTrap.deactivate();
      }

      // Hide dialog
      dialog.setAttribute('inert', '');
      dialog.style.opacity = '0';
      dialog.style.pointerEvents = 'none';
      dialog.classList.remove('insytful-search-dialog-open');
      dialog.classList.add('insytful-search-dialog-closed');

      // Restore body scroll
      // (mirrors SearchRootInner lines 124-128)
      this._restoreBodyScroll();

      // Restore focus to the element that was focused before opening
      if (this._previousActiveElement instanceof HTMLElement) {
        this._previousActiveElement.focus();
      }
      this._previousActiveElement = null;

      // Dispatch close event
      this.dispatchEvent(new CustomEvent('insytful-close', {
        bubbles: true,
        composed: true,
      }));
    }

    // Update trigger elements
    this._updateTriggerState();
  }

  private _restoreBodyScroll(): void {
    document.body.style.overflow = this._prevOverflow;
    document.body.style.paddingRight = this._prevPaddingRight;
    window.scrollTo(0, this._prevScrollY);
  }

  /* ---------------------------------------------------------------- */
  /* Private — trigger slot                                             */
  /* ---------------------------------------------------------------- */

  private _setupTriggerSlot(): void {
    const slot = this._elements?.triggerSlot;
    if (!slot) return;

    this._triggerClickHandler = () => {
      this.toggle();
    };

    const handler = this._triggerClickHandler;
    const attachToElements = () => {
      const assigned = slot.assignedElements();
      for (const el of assigned) {
        // Remove first to prevent duplicate listeners across slotchange events
        el.removeEventListener('click', handler);
        el.setAttribute('data-insytful-toggle', '');
        el.addEventListener('click', handler);
      }
      this._updateTriggerState();
    };

    slot.addEventListener('slotchange', () => {
      attachToElements();
    });

    // Also attach to any initially slotted elements
    attachToElements();
  }

  private _updateTriggerState(): void {
    const slot = this._elements?.triggerSlot;
    if (!slot) return;

    const assigned = slot.assignedElements();
    for (const el of assigned) {
      el.setAttribute('aria-expanded', String(this._isOpen));
      el.setAttribute('data-state', this._isOpen ? 'open' : 'closed');
    }
  }

  /* ---------------------------------------------------------------- */
  /* Private — input form                                               */
  /* ---------------------------------------------------------------- */

  private _setupInputForm(): void {
    const form = this._elements?.inputForm;
    const textarea = this._elements?.textarea;
    if (!form || !textarea) return;

    form.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleSend();
    });

    textarea.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        this._handleSend();
      }
    });
  }

  private _handleSend(text?: string): void {
    const textarea = this._elements?.textarea;
    if (!textarea) return;

    const trimmed = text ?? textarea.value.trim();
    if (!trimmed) return;

    textarea.value = '';

    // Hide suggestions after first message is sent (suggestions are for empty state only)
    this._hideSuggestions();

    // Dispatch search event for external listeners
    this.dispatchEvent(new CustomEvent('insytful-search', {
      bubbles: true,
      composed: true,
      detail: { query: trimmed },
    }));

    // Check if the active mode has a navigation path (classic mode)
    const activeMode = this._modes.find((m) => m.name === this._currentMode);
    if (activeMode?.path) {
      this._navigateClassic(activeMode.path, trimmed);
      return;
    }

    // If already loading, abort the current stream first
    if (this._isLoading && this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }

    // Run the AI conversation flow
    this._runConversation(trimmed);
  }

  /* ---------------------------------------------------------------- */
  /* Private — conversation & streaming                                  */
  /* ---------------------------------------------------------------- */

  private async _runConversation(query: string): Promise<void> {
    if (!this._elements || !this._ragClient) return;

    // Increment generation so stale finally blocks from aborted streams
    // don't stomp our loading state (fixes race when user sends follow-up
    // while previous stream is still active)
    const generation = ++this._conversationGeneration;

    const { messagesList, messagesOuter, emptyState, sendButton, messagesScroll, scrollSpacer } = this._elements;

    // --- Add user message ---
    this._messages.push({ role: 'user', content: query });
    const userLi = renderUserMessage(query);
    messagesList.appendChild(userLi);

    // Show messages container, hide empty state and input gradient
    messagesOuter.style.display = '';
    emptyState.style.display = 'none';
    if (this._elements.inputGradient) {
      this._elements.inputGradient.style.display = 'none';
    }

    // Reset scroll state for new question
    this._hasReachedBottom = false;
    this._updateScrollHint();

    // Scroll last user message to top for follow-up questions
    if (this._messages.length > 1) {
      this._lastProgrammaticScroll = Date.now();
      const userMessages = messagesScroll.querySelectorAll(
        ".insytful-search-message[data-role='user']",
      );
      const lastUserMsg = userMessages[userMessages.length - 1] as HTMLElement | null;
      if (lastUserMsg) {
        this._scrollMessageToTop(messagesScroll, lastUserMsg, scrollSpacer);
      }
    }

    // --- Start loading with synthetic empty assistant ---
    // When loading but there's no assistant message yet (user just submitted),
    // append a synthetic empty assistant so the skeleton has a slot to render in.
    this._isLoading = true;
    sendButton.disabled = true;

    // Create assistant message with skeleton body inside
    const { li: assistantLi, contentDiv } = renderAssistantMessage(this._avatarHTML);
    const skeletonBody = renderSkeletonBody(this.searchingText);
    contentDiv.appendChild(skeletonBody);

    messagesList.appendChild(assistantLi);

    // --- Stream response ---
    this._abortController = new AbortController();
    this._streamingContent = '';

    try {
      const generator = this._ragClient.ask(query, this._abortController.signal);

      // Replace skeleton body with real content on first non-empty chunk
      let firstChunk = true;

      for await (const chunk of generator) {
        this._streamingContent += chunk;

        if (firstChunk && this._streamingContent.length > 0) {
          // Clear skeleton and render first content
          contentDiv.innerHTML = '';
          firstChunk = false;
        }

        if (!firstChunk) {
          // Render accumulated markdown on each chunk (after skeleton cleared)
          contentDiv.innerHTML = this._renderMarkdownSafe(this._streamingContent);
        }

        // Auto-scroll during streaming
        this._autoScrollDuringStream();
      }

      // Finalize assistant message
      this._messages.push({ role: 'assistant', content: this._streamingContent });

      // Dispatch message event
      this.dispatchEvent(new CustomEvent('insytful-message', {
        bubbles: true,
        composed: true,
        detail: {
          role: 'assistant',
          content: this._streamingContent,
        },
      }));

    } catch (err: unknown) {
      // Remove the assistant message with skeleton if stream failed
      if (assistantLi.parentNode) {
        assistantLi.remove();
      }

      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';

      // Don't show error UI for user-initiated aborts
      if (!(err instanceof DOMException && err.name === 'AbortError')) {
        // Offer classic mode fallback if a mode with a path is configured
        const classicMode = this._modes.find(m => m.path && m.name !== this._currentMode);
        const onSwitchClassic = classicMode
          ? () => this._navigateClassic(classicMode.path!, query)
          : null;

        const calloutConfig = this._errorCallout;
        const errorLi = renderErrorMessage(
          calloutConfig?.text ?? errorMessage,
          onSwitchClassic,
          { title: calloutConfig?.title, cta: calloutConfig?.cta },
        );
        messagesList.appendChild(errorLi);

        // Dispatch error event
        this.dispatchEvent(new CustomEvent('insytful-error', {
          bubbles: true,
          composed: true,
          detail: { error: errorMessage },
        }));
      }
    } finally {
      // Only reset shared state if this is still the active conversation
      // (a newer _runConversation may have started after we were aborted)
      if (this._conversationGeneration === generation) {
        this._isLoading = false;
        this._abortController = null;
        sendButton.disabled = false;
      }

      // Collapse scroll spacer smoothly once response finishes
      scrollSpacer.style.transition = 'height 500ms ease-out';
      scrollSpacer.style.height = '0px';

      this._updateScrollHint();
    }
  }

  /**
   * Render markdown to sanitized HTML, using custom override if provided.
   */
  private _renderMarkdownSafe(content: string): string {
    if (this.renderMarkdown) {
      // Always sanitize even if user provides custom renderer
      return DOMPurify.sanitize(this.renderMarkdown(content));
    }
    return defaultRenderMarkdown(content);
  }

  /**
   * Auto-scroll the messages container to the bottom during streaming,
   * but only if the user hasn't manually scrolled up.
   */
  private _autoScrollDuringStream(): void {
    const scroller = this._elements?.messagesScroll;
    const spacer = this._elements?.scrollSpacer;
    if (!scroller) return;

    // Don't auto-scroll when the spacer is expanded — this means
    // _scrollMessageToTop is managing the viewport for a follow-up question.
    // Scrolling to scrollHeight would overshoot into empty spacer space.
    if (spacer && parseInt(spacer.style.height || '0', 10) > 0) return;

    // If user has scrolled up, don't auto-scroll
    const atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 60;
    if (atBottom || Date.now() - this._lastProgrammaticScroll < 800) {
      scroller.scrollTo({
        top: scroller.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  /**
   * Scroll a message element to the top of the chat viewport.
   * Mirrors search-messages.tsx `scrollMessageToTop`.
   */
  private _scrollMessageToTop(
    scroller: HTMLDivElement,
    messageEl: HTMLElement,
    spacer: HTMLDivElement,
  ): void {
    // Expand spacer instantly so the browser has room to scroll
    spacer.style.transition = 'none';
    spacer.style.height = `${scroller.clientHeight}px`;

    // Double-rAF for layout settlement
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const msgRect = messageEl.getBoundingClientRect();
        const scrollerRect = scroller.getBoundingClientRect();
        const targetTop = scroller.scrollTop + (msgRect.top - scrollerRect.top);
        scroller.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Private — scroll overflow detection                                */
  /* ---------------------------------------------------------------- */

  private _setupScrollTracking(): void {
    const scroller = this._elements?.messagesScroll;
    if (!scroller) return;

    const onScroll = () => {
      this._updateScrollHint();

      const atBottom =
        scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 40;
      const isProgrammatic = Date.now() - this._lastProgrammaticScroll < 800;

      if (atBottom && !isProgrammatic && scroller.scrollHeight > scroller.clientHeight) {
        this._hasReachedBottom = true;
        this._updateScrollHint();
      }
    };

    scroller.addEventListener('scroll', onScroll);

    // Watch for content size changes (streaming responses growing)
    const messagesList = this._elements?.messagesList;
    if (messagesList) {
      let rafId = 0;
      this._messagesResizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => this._updateScrollHint());
      });
      this._messagesResizeObserver.observe(messagesList);
    }
  }

  private _updateScrollHint(): void {
    const scroller = this._elements?.messagesScroll;
    const scrollHint = this._elements?.scrollHint;
    if (!scroller || !scrollHint) return;

    const isOverflowing = scroller.scrollHeight > scroller.clientHeight;
    const showHint = isOverflowing && !this._hasReachedBottom && !this._isLoading;

    scrollHint.style.display = showHint ? '' : 'none';

    // Apply mask gradient when hint is showing
    if (showHint) {
      scroller.style.maskImage = 'linear-gradient(to bottom, black 0%, black 90%, rgba(0,0,0,0.3) 100%)';
      scroller.style.webkitMaskImage = 'linear-gradient(to bottom, black 0%, black 90%, rgba(0,0,0,0.3) 100%)';
    } else {
      scroller.style.maskImage = '';
      scroller.style.webkitMaskImage = '';
    }
  }

  /* ---------------------------------------------------------------- */
  /* Private — offset measurement                                       */
  /* ---------------------------------------------------------------- */

  private _setupOffsetMeasurement(): void {
    // Query elements with the offset marker attribute
    // (mirrors SearchRootInner lines 138-149)
    const measure = () => {
      const els = document.querySelectorAll('[data-insytful-modal-offset]');
      let h = 0;
      els.forEach((el) => (h += (el as HTMLElement).offsetHeight));
      this._offsetHeight = h;
      this._applyOffset();
    };

    measure();

    // Observe offset elements for size changes
    const els = document.querySelectorAll('[data-insytful-modal-offset]');
    if (els.length > 0) {
      this._resizeObserver = new ResizeObserver(measure);
      els.forEach((el) => this._resizeObserver!.observe(el));
    }
  }

  private _measureOffset(): void {
    const els = document.querySelectorAll('[data-insytful-modal-offset]');
    let h = 0;
    els.forEach((el) => (h += (el as HTMLElement).offsetHeight));
    this._offsetHeight = h;
    this._applyOffset();
  }

  private _applyOffset(): void {
    const dialog = this._elements?.dialogOuter;
    if (!dialog) return;
    dialog.style.top = `${this._offsetHeight}px`;
  }

  /* ---------------------------------------------------------------- */
  /* Private — RAG client                                               */
  /* ---------------------------------------------------------------- */

  private _buildRAGClient(): void {
    const baseUrl = this.getAttribute('api-uri');
    const projectId = this.getAttribute('project-id');

    if (!baseUrl || !projectId) {
      this._ragClient = null;
      return;
    }

    const isDevMode = this.hasAttribute('dev-mode');

    this._ragClient = new RAGClient({
      baseUrl,
      projectId,
      sections: this.getAttribute('sections') ?? undefined,
      fetchFn: isDevMode ? createMockFetch(baseUrl) : undefined,
    });
  }

  /* ---------------------------------------------------------------- */
  /* Private — suggestion chips                                         */
  /* ---------------------------------------------------------------- */

  /**
   * One-time parse of `<insytful-suggestion>` child elements.
   * CMS content is server-rendered so children are present at mount time.
   */
  private _parseSuggestions(): void {
    const container = this._elements?.suggestionsContainer;
    if (!container) return;

    const suggestionEls = this.querySelectorAll('insytful-suggestion');
    if (suggestionEls.length === 0) return;

    this._suggestions = [];
    for (const el of suggestionEls) {
      const text = el.textContent?.trim();
      if (text) this._suggestions.push(text);
    }

    if (this._suggestions.length === 0) return;

    // Build the suggestions list matching React SearchSuggestions structure
    const ul = document.createElement('ul');
    ul.className = 'insytful-search-suggestions-inner flex gap-[16px] w-full min-w-0 flex-wrap justify-center p-0 m-0 list-none';

    for (const text of this._suggestions) {
      const chip = renderSuggestionChip(text, () => this._handleSend(text));
      ul.appendChild(chip);
    }

    container.appendChild(ul);
    container.style.display = '';
  }

  /**
   * Hide the suggestions container (called after the first message is sent).
   */
  private _hideSuggestions(): void {
    const container = this._elements?.suggestionsContainer;
    if (container) {
      container.style.display = 'none';
    }
  }

  /* ---------------------------------------------------------------- */
  /* Private — mode switching                                           */
  /* ---------------------------------------------------------------- */

  /**
   * One-time parse of `<insytful-mode>` child elements.
   * Reads `name`, `path` attributes and `textContent` as the tab label.
   */
  private _parseModes(): void {
    const modeEls = this.querySelectorAll('insytful-mode');
    if (modeEls.length === 0) return;

    this._modes = [];
    for (const el of modeEls) {
      const name = el.getAttribute('name');
      if (!name) continue;

      const path = el.getAttribute('path') || undefined;
      const label = el.textContent?.trim() || name;

      this._modes.push({ name, path, label });
    }

    if (this._modes.length === 0) return;

    // Default mode: first mode without a `path` attribute, or "ai" if none exists
    const defaultMode = this._modes.find((m) => !m.path);
    this._currentMode = defaultMode ? defaultMode.name : 'ai';

    // Render mode switch tabs if 2+ modes
    if (this._modes.length >= 2) {
      this._renderModeTabs();
    }
  }

  /**
   * One-time parse of `<insytful-callout type="error">` child config.
   * The callout itself is never displayed in light DOM (unprojected children
   * are hidden); its descendants are read as data and used by the error
   * handler when an API call fails.
   *
   * Supported children:
   *   <insytful-callout-title>...</insytful-callout-title>
   *   <insytful-callout-text>...</insytful-callout-text>
   *   <insytful-callout-cta href="..." [target="..."] [rel="..."]>...</insytful-callout-cta>
   */
  private _parseErrorCallout(): void {
    const calloutEl = this.querySelector('insytful-callout[type="error"]');
    if (!calloutEl) return;

    const titleEl = calloutEl.querySelector('insytful-callout-title');
    const textEl = calloutEl.querySelector('insytful-callout-text');
    const ctaEl = calloutEl.querySelector('insytful-callout-cta');

    const title = titleEl?.textContent?.trim() || undefined;
    const text = textEl?.textContent?.trim() || undefined;

    let cta: { text: string; path: string; target?: string; rel?: string } | undefined;
    if (ctaEl) {
      const ctaText = ctaEl.textContent?.trim();
      const path = ctaEl.getAttribute('href') || undefined;
      if (ctaText && path) {
        cta = {
          text: ctaText,
          path,
          target: ctaEl.getAttribute('target') || undefined,
          rel: ctaEl.getAttribute('rel') || undefined,
        };
      }
    }

    if (!title && !text && !cta) return;
    this._errorCallout = { title, text, cta };
  }

  /**
   * Render mode switch tabs into the modeSwitchContainer.
   */
  private _renderModeTabs(): void {
    const container = this._elements?.modeSwitchContainer;
    if (!container) return;

    // Clear existing tabs
    container.innerHTML = '';

    const tabs = renderModeSwitchTabs(
      this._modes.map((m) => ({ name: m.name, label: m.label })),
      this._currentMode,
      (mode: string) => this._switchMode(mode),
    );

    container.appendChild(tabs);
  }

  /**
   * Switch the active mode and re-render tabs.
   */
  private _switchMode(mode: string): void {
    if (mode === this._currentMode) return;
    this._currentMode = mode;

    // Toggle input gradient — visible only in AI mode with no messages
    this._updateInputGradient();

    // Re-render tabs to update active state
    this._renderModeTabs();

    // Dispatch mode change event
    this.dispatchEvent(new CustomEvent('insytful-mode-change', {
      bubbles: true,
      composed: true,
      detail: { mode },
    }));
  }

  /** Show the input gradient in AI mode with no messages, hide otherwise. */
  private _updateInputGradient(): void {
    const gradient = this._elements?.inputGradient;
    if (!gradient) return;
    const isClassic = this._modes.find(m => m.name === this._currentMode)?.path;
    const show = !isClassic && this._messages.length === 0;
    gradient.style.display = show ? '' : 'none';
  }

  /* ---------------------------------------------------------------- */
  /* Private — avatar                                                    */
  /* ---------------------------------------------------------------- */

  /**
   * One-time parse of an avatar element from the light DOM.
   * Accepts `<img slot="avatar" ...>` or any element with `slot="avatar"`.
   * The element's outer HTML is sanitised and stored for cloning into
   * each assistant message. The light-DOM element is hidden.
   */
  private _parseAvatar(): void {
    if (this._avatarHTML !== null) return;

    const source = this.querySelector('[slot="avatar"]') as HTMLElement | null;
    if (!source) return;

    const sanitised = DOMPurify.sanitize(source.outerHTML);
    if (sanitised) {
      source.style.display = 'none';
      this._avatarHTML = sanitised;
    }
  }

  /* ---------------------------------------------------------------- */
  /* Private — close button                                             */
  /* ---------------------------------------------------------------- */

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
  private _parseCloseButton(): void {
    const container = this._elements?.closeButtonContainer;
    if (!container) return;

    const closeEls = this.querySelectorAll('insytful-close');
    if (closeEls.length === 0) return;

    // Use the first <insytful-close>; additional ones are ignored.
    const source = closeEls[0] as HTMLElement;
    source.style.display = 'none';

    const rawHTML = source.innerHTML?.trim() || '';
    const sanitised = rawHTML ? DOMPurify.sanitize(rawHTML) : '';
    const ariaLabel = source.getAttribute('aria-label') || 'Close search';

    const btn = renderCloseButton(sanitised, () => this.close(), ariaLabel);
    container.appendChild(btn);
  }

  /* ---------------------------------------------------------------- */
  /* Private — suggestions position                                     */
  /* ---------------------------------------------------------------- */

  /**
   * Apply `order:` CSS to the suggestions container and input-card wrapper
   * based on the `suggestions-position` attribute. Uses inline styles directly
   * rather than CSS sibling rules so the behaviour is independent of where the
   * elements sit in `dialogInner`'s flex children.
   */
  private _applySuggestionsPosition(): void {
    const suggestions = this._elements?.suggestionsContainer;
    const inputCardOuter = this._elements?.inputCardOuter;
    const disclaimer = this._elements?.disclaimerWrapper;
    if (!suggestions || !inputCardOuter || !disclaimer) return;

    const position = this.getAttribute('suggestions-position');
    if (position === 'below') {
      // Keep disclaimer visually last — bump it past the reordered input/suggestions
      inputCardOuter.style.order = '1';
      suggestions.style.order = '2';
      disclaimer.style.order = '3';
    } else {
      inputCardOuter.style.order = '';
      suggestions.style.order = '';
      disclaimer.style.order = '';
    }
  }

  /**
   * Navigate for classic mode — same-origin validated.
   * Mirrors search-modes.tsx classicOnSend logic.
   */
  private _navigateClassic(path: string, query: string): void {
    const encoded = encodeURIComponent(query);

    try {
      const url = new URL(`${path}${encoded}`, window.location.origin);
      if (url.origin !== window.location.origin) {
        console.warn('[Insytful] Navigation blocked: path must be same-origin');
        return;
      }
    } catch {
      console.warn('[Insytful] Navigation blocked: invalid path');
      return;
    }

    // Close dialog before navigation
    this._setOpen(false);

    window.location.href = `${path}${encoded}`;
  }
}
