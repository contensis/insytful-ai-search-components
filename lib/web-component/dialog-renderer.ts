/**
 * DialogRenderer — builds the dialog DOM structure inside the shadow root.
 *
 * Mirrors the React component tree (SearchPortal > SearchRoot > Title,
 * Description, Messages, Input, Suggestions, Disclaimer) using plain DOM
 * elements that emit the SAME hook classes and `data-*` state attributes as
 * the React components. No presentational classes live here: the element
 * injects the shared stylesheet (`lib/styles/index.css`) into the shadow
 * root, so both flavours are styled by one sheet and the `theme` attribute
 * overrides it exactly like `<Theme css>` does for React.
 */

// Types-only import — adds zero runtime weight to the IIFE bundle.
import type { Cta } from '../api/types';
import { ctaViewModel, CTA_BAR_CLASS, CTA_LABEL_CLASS } from '../shared/cta/view-model';
import {
  executeCta,
  hasCtaHandlerOverride,
  dispatchCtaObservability,
} from '../shared/cta/handlers';

/* ------------------------------------------------------------------ */
/* SVG icon markup                                                      */
/* ------------------------------------------------------------------ */

// Icons carry no fill/stroke of their own: the stylesheet colours them via
// `fill: currentColor` / `stroke: currentColor`, same as the React icons.

/** Sparkle — AI mode leading icon (mirrors `AiIcon` in search-input.tsx). */
export const SPARKLE_ICON = `<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.6 9.6 9 15 7.4 9.6 2 8l5.4-1.6L9 1l1.6 5.4L16 8l-5.4 1.6Zm6.4 4.6 4-2.2-2.2 4 2.2 4-4-2.2-4 2.2 2.2-4-2.2-4 4 2.2ZM10 16l-1.7 3 1.7 3-3-1.7L4 22l1.7-3L4 16l3 1.7 3-1.7Z"/></svg>`;

/** Magnifier — classic mode leading icon (mirrors `ClassicIcon`). */
export const CLASSIC_ICON = `<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.27 18.54c1.613-.001 3.18-.541 4.45-1.535L19.715 21 21 19.715l-3.995-3.995a7.225 7.225 0 0 0 1.535-4.45C18.54 7.26 15.279 4 11.27 4 7.262 4 4 7.261 4 11.27c0 4.008 3.262 7.27 7.27 7.27Zm0-12.723a5.45 5.45 0 1 1 0 10.9 5.45 5.45 0 1 1 0-10.9Z"/></svg>`;

const SEND_ICON = `<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.991 8a1.606 1.606 0 0 0-.543-1.2L7.996.24a.96.96 0 0 0-1.267 1.442l5.758 5.067a.166.166 0 0 1 .046.183.167.167 0 0 1-.156.108H.967a.96.96 0 1 0 0 1.92h11.408a.167.167 0 0 1 .11.292l-5.758 5.067a.96.96 0 1 0 1.267 1.44L15.448 9.2A1.606 1.606 0 0 0 15.99 8Z"/></svg>`;

const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>`;

const SCROLL_HINT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" focusable="false" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14M19 12l-7 7-7-7"/></svg>`;

/* ------------------------------------------------------------------ */
/* Helper                                                               */
/* ------------------------------------------------------------------ */

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs?: Record<string, string>,
  className?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      node.setAttribute(k, v);
    }
  }
  return node;
}

/* ------------------------------------------------------------------ */
/* Render result                                                        */
/* ------------------------------------------------------------------ */

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
export function dialogTransition(open: boolean): string {
  return (
    'opacity var(--insytful-search-transition-duration, 200ms) var(--insytful-search-transition-easing, ease), ' +
    `visibility 0s linear ${open ? '0s' : 'var(--insytful-search-transition-duration, 200ms)'}`
  );
}

/* ------------------------------------------------------------------ */
/* Main render function                                                 */
/* ------------------------------------------------------------------ */

export function renderDialog(titleId: string, descriptionId: string): DialogElements {
  // --- Root container (no dialog role — that goes on dialogOuter) ---
  // `.insytful-theme` scopes the shared stylesheet, exactly like <Theme>.
  // `insytful-root` is a deprecated alias kept for 4.x `theme` CSS; remove in 5.0.
  const root = el('div', {}, 'insytful-theme insytful-root');

  // --- Trigger slot (light DOM projection) ---
  const triggerSlot = document.createElement('slot');
  triggerSlot.name = 'trigger';
  root.appendChild(triggerSlot);

  // --- Dialog outer (the full-screen overlay) ---
  // Dialog role lives here (not on root) so it is only exposed to assistive
  // technology when the overlay is visible. The `inert` attribute hides it when closed.
  const dialogOuter = el('div', {
    'id': 'insytful-search-dialog',
    'role': 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': titleId,
    'aria-describedby': descriptionId,
    'inert': '',
    'data-state': 'closed',
  }, 'insytful-search-dialog-outer');

  // Position, offsets and the open/close fade are per-instance (mirrors
  // SearchRoot, which sets the same properties inline).
  Object.assign(dialogOuter.style, {
    zIndex: 'var(--insytful-z-index, 999)',
    top: '0px',
    left: '0',
    right: '0',
    bottom: '0',
    opacity: '0',
    visibility: 'hidden',
    pointerEvents: 'none',
    transition: dialogTransition(false),
  });

  // --- Close button container (top-right of dialog) ---
  // Button itself is only appended when the light-DOM child <insytful-close> is present.
  const closeButtonContainer = el('div', { 'data-insytful-close-container': '' });

  // --- Dialog inner ---
  const dialogInner = el('div', {}, 'insytful-search-dialog-inner');

  // --- Empty state (logo + title + description) ---
  // Plain grouping element with no styles of its own: spacing comes from the
  // title/description rules, as it does in React.
  const emptyState = el('div', {}, 'insytful-search-empty-state');

  const logoSlot = document.createElement('slot');
  logoSlot.name = 'logo';
  emptyState.appendChild(logoSlot);

  // Title slot — wrapped in an <h1> that carries the Search.Title hook class
  const titleWrapper = el('h1', { 'id': titleId }, 'insytful-search-empty-state-title');
  const titleSlot = document.createElement('slot');
  titleSlot.name = 'title';
  titleSlot.textContent = 'How can we help?'; // default fallback
  titleWrapper.appendChild(titleSlot);
  emptyState.appendChild(titleWrapper);

  // Description slot — wrapped in a <p> that carries the Search.Description hook class
  const descWrapper = el('p', { 'id': descriptionId }, 'insytful-search-empty-state-text');
  const descriptionSlot = document.createElement('slot');
  descriptionSlot.name = 'description';
  descWrapper.appendChild(descriptionSlot);
  emptyState.appendChild(descWrapper);

  dialogInner.appendChild(emptyState);

  // --- Messages (mirrors Search.Messages) ---
  const messagesOuter = el('div', {}, 'insytful-search-messages-container');
  messagesOuter.style.display = 'none'; // hidden until messages exist

  const messagesScroll = el('div', {}, 'insytful-search-messages-container-scroll');

  const messagesContainer = el('div', {}, 'insytful-search-messages-outer');

  const messagesList = el('ul', {
    'aria-live': 'polite',
    'aria-atomic': 'false',
  }, 'insytful-search-messages-inner');
  messagesContainer.appendChild(messagesList);

  // Scroll spacer: expanded when user sends a follow-up so their message
  // can scroll to the top, collapses when response finishes loading.
  const scrollSpacer = el('div', { 'aria-hidden': 'true' }, 'insytful-search-scroll-spacer');
  scrollSpacer.style.height = '0px';
  messagesContainer.appendChild(scrollSpacer);

  messagesScroll.appendChild(messagesContainer);

  // Scroll hint — shown when content overflows and user hasn't reached bottom
  const scrollHint = el('div', { 'aria-hidden': 'true' }, 'insytful-search-messages-hint');
  scrollHint.style.display = 'none';
  const scrollHintIcon = el('div', {}, 'insytful-search-messages-icon');
  scrollHintIcon.innerHTML = SCROLL_HINT_ICON;
  scrollHint.appendChild(scrollHintIcon);

  messagesOuter.appendChild(messagesScroll);
  messagesOuter.appendChild(scrollHint);
  dialogInner.appendChild(messagesOuter);

  // --- Suggestions (mirrors Search.Suggestions; chips rendered by the element) ---
  const suggestionsContainer = el('div', { 'data-position': 'above' }, 'insytful-search-suggestions-outer');
  suggestionsContainer.style.display = 'none'; // hidden until suggestions exist
  dialogInner.appendChild(suggestionsContainer);

  // --- Input (mirrors Search.Input; state lives on the <form>) ---
  const inputForm = el('form', { 'data-mode': 'ai' }, 'insytful-search-message-input');

  const inputIcon = el('div', {}, 'insytful-search-message-input-icon');
  inputIcon.innerHTML = SPARKLE_ICON;
  inputForm.appendChild(inputIcon);

  // Glow behind the field — AI mode only (React omits it in classic mode)
  const inputGradient = el('div', {}, 'insytful-search-message-input-bg');
  const inputGlow = el('div', { 'aria-hidden': 'true' }, 'insytful-search-message-input-glow');
  inputGradient.appendChild(inputGlow);
  inputForm.appendChild(inputGradient);

  const textarea = el('textarea', {
    'rows': '1',
    'placeholder': 'Ask a question',
    'aria-label': 'Ask a question',
  }, 'insytful-search-message-input-textarea');
  inputForm.appendChild(textarea);

  const sendButton = el('button', {
    'type': 'submit',
    'aria-label': 'Send message',
  }, 'insytful-search-message-input-btn');
  sendButton.innerHTML = SEND_ICON;
  inputForm.appendChild(sendButton);

  dialogInner.appendChild(inputForm);

  // Mode switch (WC-only UI; React exposes SearchModeSwitch as a render prop).
  // Styled by lib/search/search-modes.css; `:empty` hides it when unused.
  const modeSwitchContainer = el('div', {}, 'insytful-search-mode-switch');
  dialogInner.appendChild(modeSwitchContainer);

  // --- Disclaimer (mirrors Search.Disclaimer) ---
  const disclaimerInner = el('div', {}, 'insytful-search-disclaimer-inner');
  const disclaimerSlot = document.createElement('slot');
  disclaimerSlot.name = 'disclaimer';
  disclaimerInner.appendChild(disclaimerSlot);
  dialogInner.appendChild(disclaimerInner);

  // --- Assemble ---
  dialogOuter.appendChild(closeButtonContainer);
  dialogOuter.appendChild(dialogInner);
  root.appendChild(dialogOuter);

  return {
    root,
    dialogOuter,
    dialogInner,
    triggerSlot,
    logoSlot,
    titleSlot,
    descriptionSlot,
    disclaimerSlot,
    messagesContainer,
    messagesScroll,
    messagesOuter,
    messagesList,
    scrollSpacer,
    scrollHint,
    emptyState,
    suggestionsContainer,
    closeButtonContainer,
    inputForm,
    inputIcon,
    textarea,
    sendButton,
    modeSwitchContainer,
    disclaimerInner,
    inputGradient,
  };
}

/* ------------------------------------------------------------------ */
/* Message rendering helpers                                            */
/* ------------------------------------------------------------------ */

/** Create the avatar wrapper. `placement` matches `data-placement` in React. */
function createAvatarNode(avatarHTML: string, placement: 'aside' | 'inline'): HTMLDivElement {
  const node = el('div', { 'data-placement': placement }, 'insytful-search-message-logo');
  node.innerHTML = avatarHTML;
  return node;
}

/**
 * Create a user message `<li>` element.
 * Same markup as the React `<Message>` for role === "user".
 */
export function renderUserMessage(content: string): HTMLLIElement {
  // data-role='user' is used to target user messages for scroll-to-top positioning
  const li = el('li', { 'data-role': 'user' }, 'insytful-search-message');

  const bubble = el('div', {}, 'insytful-search-message-content-outer');
  bubble.textContent = content;

  li.appendChild(bubble);
  return li;
}

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
export function renderAssistantMessage(avatarHTML?: string | null): {
  li: HTMLLIElement;
  contentDiv: HTMLDivElement;
  inner: HTMLDivElement;
} {
  // data-role='assistant' is used to identify assistant messages in the DOM
  const li = el('li', { 'data-role': 'assistant' }, 'insytful-search-message');

  if (avatarHTML) li.appendChild(createAvatarNode(avatarHTML, 'aside'));

  const outer = el('div', {}, 'insytful-search-message-content-outer');
  const inner = el('div', {}, 'insytful-search-message-content-inner');

  if (avatarHTML) inner.appendChild(createAvatarNode(avatarHTML, 'inline'));

  const contentDiv = el('div', {}, 'insytful-search-message-content');
  inner.appendChild(contentDiv);
  outer.appendChild(inner);
  li.appendChild(outer);

  return { li, contentDiv, inner };
}

/**
 * Create skeleton body content (just the inner content, no <li> wrapper).
 * Mirrors React's SearchSkeletonBody — renders inside an assistant message slot.
 */
export function renderSkeletonBody(searchingText = 'Generating response...'): HTMLDivElement {
  const content = el('div', {}, 'insytful-search-skeleton-content');

  for (let i = 0; i < 3; i++) {
    content.appendChild(el('div', {}, 'insytful-search-skeleton-bar'));
  }

  const text = el('span', {}, 'insytful-search-skeleton-text');
  text.textContent = searchingText;
  content.appendChild(text);

  return content;
}

/* ------------------------------------------------------------------ */
/* Close button, suggestion chip & mode switch helpers                  */
/* ------------------------------------------------------------------ */

/**
 * Create a close-button element. Placed absolutely inside `dialogOuter`, so
 * the focus trap automatically includes it. `innerHTML` is raw markup; the
 * caller is expected to have sanitised (DOMPurify) if the source is untrusted.
 *
 * Passing `null` / empty uses the default ✕ icon.
 */
export function renderCloseButton(
  innerHTML: string | null,
  onClick: () => void,
  ariaLabel = 'Close search',
): HTMLButtonElement {
  const btn = el('button', {
    'type': 'button',
    'aria-label': ariaLabel,
  }, 'insytful-search-close');
  btn.innerHTML = innerHTML && innerHTML.trim() ? innerHTML : CLOSE_ICON;
  btn.addEventListener('click', onClick);
  return btn;
}

/**
 * Create a suggestion chip. Same markup as one item of React's
 * `SearchSuggestions` (search-suggestions.tsx).
 */
export function renderSuggestionChip(text: string, onClick: () => void): HTMLLIElement {
  const li = el('li', {}, 'insytful-search-suggestions-item');

  const btn = el('button', { 'type': 'button' }, 'insytful-search-suggestions-item-btn');
  btn.textContent = text;
  btn.addEventListener('click', onClick);

  li.appendChild(btn);
  return li;
}

/**
 * Create mode switch tabs. The active tab carries `data-active`; see
 * lib/search/search-modes.css for the default look and tokens.
 */
export function renderModeSwitchTabs(
  modes: Array<{ name: string; label: string }>,
  activeMode: string,
  onSwitch: (mode: string) => void,
): HTMLDivElement {
  const wrapper = el('div', { 'role': 'group', 'aria-label': 'Search mode' }, 'insytful-search-mode-switch-tabs');

  for (const mode of modes) {
    const isActive = mode.name === activeMode;
    const attrs: Record<string, string> = { 'type': 'button', 'aria-pressed': String(isActive) };
    if (isActive) attrs['data-active'] = '';
    const btn = el('button', attrs, 'insytful-search-mode-tab');
    btn.textContent = mode.label;
    btn.addEventListener('click', () => onSwitch(mode.name));

    wrapper.appendChild(btn);
  }

  return wrapper;
}

/* ------------------------------------------------------------------ */
/* Error message helper                                                */
/* ------------------------------------------------------------------ */

/**
 * Create an error callout `<li>` element.
 * The callout markup matches React's `SearchErrorCallout`.
 */
export function renderErrorMessage(
  message: string,
  onSwitchClassic?: (() => void) | null,
  opts?: {
    title?: string;
    cta?: { text: string; path: string; target?: string; rel?: string };
  },
): HTMLLIElement {
  const li = el('li', { 'data-role': 'assistant' }, 'insytful-search-message');

  const callout = el('div', { 'role': 'alert' }, 'insytful-search-error-callout-inner');

  const content = el('div', {}, 'insytful-search-error-callout-content');

  const title = el('p', {}, 'insytful-search-error-callout-title');
  title.textContent = opts?.title ?? 'Something went wrong';

  const text = el('p', {}, 'insytful-search-error-callout-text');
  text.textContent = message;

  content.appendChild(title);
  content.appendChild(text);
  callout.appendChild(content);

  if (opts?.cta) {
    const cta = opts.cta;
    const target = cta.target ?? (cta.path.startsWith('https://www') ? '_blank' : undefined);
    const isExternal = target === '_blank';
    const rel = cta.rel ?? (isExternal ? 'noopener noreferrer' : undefined);

    const linkAttrs: Record<string, string> = { href: cta.path };
    if (target) linkAttrs.target = target;
    if (rel) linkAttrs.rel = rel;

    const link = el('a', linkAttrs, 'insytful-search-error-callout-cta');
    link.textContent = cta.text;
    if (isExternal) {
      const srOnly = el('span', {}, 'insytful-sr-only');
      srOnly.textContent = ' (opens in a new tab)';
      link.appendChild(srOnly);
    }
    callout.appendChild(link);
  } else if (onSwitchClassic) {
    const btn = el('button', { type: 'button' }, 'insytful-search-error-callout-btn');
    btn.textContent = 'Try classic?';
    btn.addEventListener('click', onSwitchClassic);
    callout.appendChild(btn);
  }

  li.appendChild(callout);

  return li;
}

/* ------------------------------------------------------------------ */
/* CTA quick-actions bar                                                */
/* ------------------------------------------------------------------ */

/* Hook classes come from the shared view model so React/WC parity is
   structural; `data-intent` / `data-position` are what the shared stylesheet
   (lib/search/search-ctas.css) keys on. The `-primary`/`-secondary` variant
   classes in `vm.classes.btn` are kept for 4.x consumers' own CSS. */

/** Module counter for unique `aria-labelledby` ids (no React.useId here). */
let ctaLabelIdCounter = 0;

/**
 * Create one CTA chip — an `<a>` for call/email/link (native navigation is
 * the default path) or a `<button type="button">` for event CTAs (D7).
 * Mirrors `CtaChip` in search-ctas.tsx.
 */
function renderCtaChip(cta: Cta, onCtaClick: (cta: Cta) => void): HTMLElement {
  const vm = ctaViewModel(cta);

  let chip: HTMLAnchorElement | HTMLButtonElement;
  if (vm.element === 'a') {
    const attrs: Record<string, string> = { href: vm.href ?? '', 'data-intent': vm.intent };
    if (vm.newTab) {
      attrs.target = '_blank';
      attrs.rel = 'noopener noreferrer';
    }
    chip = el('a', attrs, vm.classes.btn);

    // Anchors (call/email/link): native navigation is the default path — it
    // preserves middle-click, copy-link, long-press, and OS handler choice.
    // A registered override intercepts unmodified left-clicks only (D7).
    chip.addEventListener('click', (e: MouseEvent) => {
      onCtaClick(cta);
      const unmodified =
        e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
      if (unmodified && hasCtaHandlerOverride(cta.type)) {
        e.preventDefault();
        executeCta(cta); // runs the override + dispatches `insytful-cta`
      } else {
        // Native navigation proceeds — fire observability only. Calling
        // executeCta here would trigger a second, JS-driven navigation.
        dispatchCtaObservability(cta);
      }
    });
  } else {
    // `event` CTAs have no native action — executeCta dispatches the
    // CMS-named bus event (or a registered override) plus `insytful-cta`.
    chip = el('button', { type: 'button', 'data-intent': vm.intent }, vm.classes.btn);
    chip.addEventListener('click', () => {
      onCtaClick(cta);
      executeCta(cta);
    });
  }

  // Icon SVG strings are our own constants (lib/shared/cta/icons.ts) — never
  // CMS data — so innerHTML is safe here. External-link glyph trails
  // ("leaves this page" grammar); all others lead.
  const iconTrails = vm.iconKey === 'external';
  let iconSpan: HTMLSpanElement | null = null;
  if (vm.iconSvg) {
    iconSpan = el(
      'span',
      { 'aria-hidden': 'true', 'data-position': iconTrails ? 'trailing' : 'leading' },
      'insytful-search-cta-icon',
    );
    iconSpan.innerHTML = vm.iconSvg;
  }

  if (iconSpan && !iconTrails) chip.appendChild(iconSpan);

  // Label via textContent ONLY — CMS markup must render literally.
  chip.appendChild(document.createTextNode(vm.label));

  if (vm.srNewTabSuffix) {
    const srOnly = el('span', {}, 'insytful-sr-only');
    srOnly.textContent = ' (opens in a new tab)';
    chip.appendChild(srOnly);
  }

  if (iconSpan && iconTrails) chip.appendChild(iconSpan);

  return chip;
}

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
export function renderCtaBar(
  ctas: Cta[],
  opts: { onCtaClick(cta: Cta): void },
): HTMLElement {
  const wrapper = el('div', { 'aria-live': 'off' }, 'insytful-search-cta-outer');

  // One-shot availability cue for screen readers (see A11y notes above).
  // The node mounts empty and the text lands on a macrotask, so screen
  // readers see a live-region *change* (mirrors search-ctas.tsx's effect).
  const status = el('div', { role: 'status' }, 'insytful-sr-only');
  wrapper.appendChild(status);
  const announcement = `${ctas.length} quick action${ctas.length === 1 ? '' : 's'} available`;
  setTimeout(() => {
    status.textContent = announcement;
  }, 0);

  const labelId = `insytful-search-cta-label-${++ctaLabelIdCounter}`;
  const label = el('div', { id: labelId }, CTA_LABEL_CLASS);
  label.textContent = 'Quick actions';
  wrapper.appendChild(label);

  const bar = el('div', {
    'role': 'group',
    'aria-labelledby': labelId,
  }, CTA_BAR_CLASS);

  for (const cta of ctas) {
    bar.appendChild(renderCtaChip(cta, opts.onCtaClick));
  }
  wrapper.appendChild(bar);

  return wrapper;
}
