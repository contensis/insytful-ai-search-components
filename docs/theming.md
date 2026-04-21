# Theming

Both the Web Component and React versions support the same theme variables. For the Web Component, set them on `.insytful-root` inside your `theme` attribute. For React, set them on `:host` inside your `theme` prop.

## CSS Custom Properties

```css
/* Typography */
--insytful-font-family: system-ui, -apple-system, sans-serif;
--insytful-base-font-size: 1rem;

/* Text */
--insytful-text-default: #333333;
--insytful-text-muted: #6c6c6c;
--insytful-text-link-default: #1d70b8;
--insytful-text-link-hover: #184b76;
--insytful-typing-indicator-text: var(--insytful-text-muted);
--insytful-disclaimer-text: var(--insytful-text-muted);

/* Brand */
--insytful-brand-primary: #195491;

/* Modal surface */
--insytful-modal-bg: #ffffff;
--insytful-modal-max-width: 784px;
--insytful-modal-radius: 0px;

/* Suggestion buttons */
--insytful-btn-prompt-bg-default: #e2eefa;
--insytful-btn-prompt-bg-hover: #c8daec;
--insytful-btn-prompt-text: #333333;
--insytful-btn-prompt-radius: 12px;
--insytful-btn-prompt-focus: var(--insytful-semantic-focus-ring);

/* Input card */
--insytful-input-card-bg: #ffffff;
--insytful-input-card-radius: 16px;
--insytful-input-card-border: var(--insytful-semantic-search-field-stroke);
--insytful-input-card-border-width: 1px;

/* Send button */
--insytful-btn-icon-search-bg-default: #2e3339;
--insytful-btn-icon-search-bg-hover: #3c444d;
--insytful-btn-icon-search-icon: #ffffff;

/* Close button */
--insytful-btn-close-bg: transparent;
--insytful-btn-close-bg-hover: #f2f2f2;
--insytful-btn-close-icon: var(--insytful-text-default);
--insytful-btn-close-size: 40px;

/* Error callout */
--insytful-callout-error-border: #d93025;
--insytful-callout-error-bg: #fce8e6;

/* Search field */
--insytful-semantic-search-field-stroke: #333333;

/* Focus ring — single library-wide token governing every focus ring.
   The older --insytful-semantic-search-field-focus name is kept as a
   deprecated alias so existing overrides keep working. */
--insytful-semantic-search-field-focus: #35d2c5; /* deprecated */
--insytful-semantic-focus-ring: var(--insytful-semantic-search-field-focus);

/* Transitions */
--insytful-search-transition-duration: 200ms;

/* Z-index */
--insytful-z-index: 999;
```

## Focus ring behaviour

Every focusable element in the library emits a `2px` outline at `2px` offset, coloured by `--insytful-semantic-focus-ring`. No hardcoded `ring-offset-*` bands — the offset shows the page background, so the indicator is visible on any theme.

The default modal flow renders the search input with its halo wrapper (`.insytful-search-message-input-bg`). In that flow the **wrapper** gets the focus ring when the textarea is focused; tabbing to the send button moves the ring onto the button. This is driven by `:has()` selectors in the library's own CSS — no consumer configuration required.

**Using `<InsytfulSearch.Input embedded>` inside your own card?** The embedded renderer omits the halo wrapper so the textarea rings itself as a fallback (you always see focus). If you'd rather have your own outer card take the ring, add two rules in your consumer CSS:

```css
/* Ring the outer card when the textarea inside has focus, not when any
   descendant has focus (which :focus-within would give). */
.my-hero-card:has(.insytful-search-message-input-textarea:focus) {
  outline: 2px solid var(--insytful-semantic-focus-ring);
  outline-offset: 2px;
}

/* Suppress the textarea's own fallback ring so it doesn't stack inside the
   card ring. */
.my-hero-card .insytful-search-message-input-textarea:focus {
  outline: none;
}
```

The send button still rings on its own when tabbed to, and the card ring drops — so you see one clean indicator per focus stop. Requires `:has()` (Chromium 105+, Safari 15.4+, Firefox 121+).

## Base font-size and scaling

`--insytful-base-font-size` sets the typographic base for AI-response markdown prose (headings, paragraphs, lists, inline code, blockquotes). All prose sizing — font-size, margins, padding — is in `em`, so the whole block scales uniformly with this single variable. Border widths and border-radii stay in `px` so they don't distort when the base changes.

Why `em`, not `rem`? `rem` always resolves against the host page's `<html>`, even inside a Shadow DOM — we can't isolate it from a host doing `html { font-size: 62.5% }`. `em` inherits from our own root, which we control, so a consumer gets a predictable single knob.

**Default — `1rem`**

Inherits from the host page's `<html>` font-size. On a standard page that's 16px, and end users who change their browser default (for readability) see the AI response prose scale with their preference.

**Override with a `px` value** — pins the base, disables text-size scaling:

```css
/* Use when the host page does `html { font-size: 62.5% }` or similar —
   otherwise the prose would render at ~62.5% of the intended size. */
--insytful-base-font-size: 16px;
```

**Override with a `rem` value** — keeps text-size scaling, shifts the base:

```css
/* Nudge the base up 12.5% while still honouring browser text-size prefs. */
--insytful-base-font-size: 1.125rem;
```

### Responsive prose

Body text inside assistant responses steps up by 25% at the `md` breakpoint (≥768px). With the default base of `1rem`, that's 16px on mobile → 20px desktop. Because the prose uses `em`, headings scale proportionally with the body — a consistent **1.5× heading-to-body hierarchy** across breakpoints, and everything scales uniformly when `--insytful-base-font-size` changes.

If you prefer fixed-size prose that doesn't step up at the `md` breakpoint, override the responsive wrapper class in your theme CSS. The class name below is a stable styling hook (consider it part of the public API):

```css
/* Lock body text to the base value on all breakpoints. */
.insytful-search-message-content-outer { font-size: 1em; }
```

To pin at a specific size regardless of the base variable:

```css
.insytful-search-message-content-outer { font-size: 16px; }
```
