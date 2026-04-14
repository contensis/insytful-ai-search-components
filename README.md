# Insytful AI Search Components

AI-powered search modals with two delivery options:

1. **[Web Component](#web-component)** — Standalone `<insytful-search>` custom element for any HTML page. No React, no build step, no npm. Ideal for CMS sites (Contensis, WordPress, static HTML).
2. **[React Components](#react-components)** — Radix-style compound components for React applications. Install via npm.

Both share the same visual design, [CSS theming](#css-custom-properties), and Contensis RAG API integration.

## Table of Contents

- [Web Component](#web-component)
  - [Setup](#setup)
  - [Contensis CMS (Razor)](#contensis-cms--razor)
  - [Attributes](#attributes)
  - [Slots](#slots)
  - [Child Elements](#child-elements)
  - [JavaScript API](#javascript-api)
  - [Dynamic Offsets](#dynamic-offsets)
- [React Components](#react-components)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Architecture](#architecture)
  - [Components](#components)
  - [Mode Switching](#mode-switching)
  - [Context Hooks](#context-hooks)
  - [Styling](#styling)
  - [Markdown Rendering](#markdown-rendering)
  - [TypeScript](#typescript)
- [CSS Custom Properties](#css-custom-properties)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)

---

## Web Component

A single script tag adds AI search to any page. No build step, no npm, no framework required.

### Setup

```html
<script src="https://unpkg.com/insytful-ai-search-components@2.1.2/dist/insytful-search.js"></script>

<insytful-search
  api-uri="https://your-api.com"
  project-id="your-project"
>
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <span slot="description">Ask a question in your own words</span>
  <span slot="disclaimer">AI responses may not always be accurate.</span>

  <insytful-close></insytful-close>
  <insytful-suggestion>How do I get started?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
</insytful-search>
```

### Contensis CMS / Razor

For classic Contensis sites using the .NET framework, add the Web Component to your layout or view:

```cshtml
@{
    const string InsytfulAISearchTheme = @"
        .insytful-root {
          --insytful-font-family: 'Helvetica Neue', Arial, sans-serif;
          --insytful-btn-prompt-bg-default: #f2f2f2;
          --insytful-btn-prompt-bg-hover: #e5e5e5;
          --insytful-btn-icon-search-bg-default: #da3949;
          --insytful-btn-icon-search-bg-hover: #bf2f3d;
        }
    ";
}

<script src="https://unpkg.com/insytful-ai-search-components@2.1.2/dist/insytful-search.js"></script>

<style>
  insytful-search:not(:defined) { display: none; }
</style>

<insytful-search
  api-uri="CurrentContext.Site.AI.Endpoint"
  project-id="CurrentContext.Site.AI.ProjectId"
  suggestions-position="below"
  theme="@InsytfulAISearchTheme"
>
  <button slot="trigger" class="search-trigger">Search this site</button>
  <span slot="title">Ask our AI</span>
  <span slot="description">Get instant answers about our courses and services</span>
  <span slot="disclaimer">AI responses may not always be accurate. Please verify important information.</span>

  <insytful-close></insytful-close>

  <img slot="avatar" src="/_design/img/logo-icon.png" alt="" width="32" height="32" style="width:100%;height:100%;object-fit:contain;" />

  <insytful-suggestion>How do I apply?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
  <insytful-suggestion>Contact us</insytful-suggestion>

  <insytful-mode name="ai">AI Search</insytful-mode>
  <insytful-mode name="classic" path="/search/index.aspx?search_keywords=">Classic Search</insytful-mode>
</insytful-search>
```

To integrate with an existing search form (e.g. a dropdown with search types), open the dialog programmatically:

```cshtml
<div>
  <input type="text" name="search" aria-label="Search" placeholder="Search..." id="search" />
  <select id="search-type" name="search-type" aria-label="Select a type of search">
    <option value="all">All</option>
    <option value="courses">Courses</option>
    <option value="ai">AI Search</option>
  </select>
  <input type="image" id="search-btn" alt="Search" src="..." />
</div>

<insytful-search
  id="ai-search"
  api-uri="CurrentContext.Site.AI.Endpoint"
  project-id="CurrentContext.Site.AI.ProjectId"
  suggestions-position="below"
>
  <span slot="title">Ask our AI</span>
  <span slot="description">Get instant answers about our courses and services</span>
  <span slot="disclaimer">AI responses may not always be accurate.</span>

  <insytful-close></insytful-close>
  <img slot="avatar" src="/_design/img/logo-icon.png" alt="" width="32" height="32" style="width:100%;height:100%;object-fit:contain;" />

  <insytful-suggestion>How do I apply?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
</insytful-search>

<script src="https://unpkg.com/insytful-ai-search-components@2.1.2/dist/insytful-search.js"></script>
```

```cshtml
@{
    string custom = @"
    (function($) {
        $(function() {
            var element = document.getElementById('ai-search');

            $('#search').keypress(function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    $('#search-btn').trigger('click');
                }
            });

            $('#search-btn').on('click', function(e) {
                e.preventDefault();
                var type = $('#search-type :selected').val();
                var query = $('#search').val()
                    .replace(/[^0-9a-z\s]/gi, '')
                    .trim();

                if (type === 'ai') {
                    element.open(query);
                } else {
                    var urlEnd = query.replace(/\s+/g, '+');
                    if (type === 'courses') {
                        window.open('/search/index.aspx/courses?search_keywords=' + urlEnd, '_self');
                    } else {
                        window.open('/search/index.aspx?search_keywords=' + urlEnd, '_self');
                    }
                }
            });
        });
    })(jQuery);
    ";
    CurrentContext.Page.Scripts.AddInline(custom, ScriptLocation.BodyEnd);
}
```

### Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `api-uri` | Yes | Contensis RAG API endpoint |
| `project-id` | Yes | Project identifier for the RAG API |
| `sections` | No | Comma-separated section slugs to scope results |
| `dev-mode` | No | Enable mock responses for development (no backend needed) |
| `theme` | No | Custom CSS string injected into the Shadow DOM (use `.insytful-root` to set [CSS custom properties](#css-custom-properties)) |
| `suggestions-position` | No | `"above"` (default) or `"below"` — position of suggestion chips relative to the input field |

### Slots

| Slot | Description |
|------|-------------|
| `trigger` | Button that opens/closes the dialog |
| `title` | Heading text for the empty state |
| `description` | Subheading text below the title |
| `disclaimer` | Footer text (e.g. AI accuracy warning) |
| `logo` | Image shown in the dialog empty state (not in messages) |
| `avatar` | Image shown next to AI responses and the typing indicator |

### Child Elements

```html
<!-- Suggestion chips (shown before the first query) -->
<insytful-suggestion>How do I apply?</insytful-suggestion>

<!-- Close button (top-right inside the dialog).
     Empty content uses the default X icon; or pass your own markup. -->
<insytful-close></insytful-close>
<insytful-close aria-label="Dismiss search">Cancel</insytful-close>

<!-- Avatar shown next to AI responses in the chat -->
<img slot="avatar" src="/logo.png" alt="" width="32" height="32" />

<!-- Mode switching (AI search + classic URL navigation) -->
<insytful-mode name="ai">AI Search</insytful-mode>
<insytful-mode name="classic" path="/search?q=">Classic Search</insytful-mode>
```

The **close button** lives inside the dialog (focus-trap-aware) and is styled via `--insytful-btn-close-*` variables.

The **avatar** appears next to each AI response and the typing indicator. On desktop it sits as a column beside the message; on mobile it floats left so the first line of text wraps beside it and subsequent content flows full width. Style the wrapper via `.insytful-search-message-logo` in your theme CSS. This is the Web Component equivalent of the React `logo` prop on `Root`.

### JavaScript API

```javascript
const element = document.querySelector('insytful-search');

// Open/close programmatically
element.open();          // open the empty dialog
element.open('query');   // open and immediately send a query
element.close();
element.toggle();

// Check state
console.log(element.isOpen);

// Override markdown rendering
element.renderMarkdown = (md) => myCustomParser(md);

// Listen for events
element.addEventListener('insytful-open', () => console.log('Opened'));
element.addEventListener('insytful-close', () => console.log('Closed'));
element.addEventListener('insytful-search', (e) => console.log('Query:', e.detail.query));
element.addEventListener('insytful-message', (e) => console.log('Response:', e.detail.content));
element.addEventListener('insytful-mode-change', (e) => console.log('Mode:', e.detail.mode));
element.addEventListener('insytful-error', (e) => console.log('Error:', e.detail.error));
```

### Dynamic Offsets

If your site has a sticky header, add `data-insytful-modal-offset` so the dialog doesn't overlap it:

```html
<header data-insytful-modal-offset>Your sticky header</header>
```

The modal measures their combined height via `ResizeObserver` and adjusts its `top` offset.

---

## React Components

Radix-style compound components for React applications.

### Installation

```bash
npm install insytful-ai-search-components
```

**Peer dependencies:** `react` (>=17) and `react-dom` (>=17).

### Quick Start

```tsx
import { useState } from 'react';
import { InsytfulSearch } from 'insytful-ai-search-components';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <InsytfulSearch.Root
      options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}
      open={open}
      onOpenChange={setOpen}
    >
      <InsytfulSearch.Trigger>Search</InsytfulSearch.Trigger>

      <InsytfulSearch.Portal>
        <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
        <InsytfulSearch.Description>Ask a question in your own words.</InsytfulSearch.Description>
        <InsytfulSearch.Input />
        <InsytfulSearch.Messages />
        <InsytfulSearch.Suggestions items={['How do I...?', 'What is...?']} />
        <InsytfulSearch.Disclaimer>AI may make mistakes.</InsytfulSearch.Disclaimer>
      </InsytfulSearch.Portal>
    </InsytfulSearch.Root>
  );
}
```

`InsytfulSearch.Root` provides shared context to all child components. `InsytfulSearch.Portal` renders its children into a Shadow DOM dialog on `document.body`, preserving React context across the boundary.

### Architecture

```
InsytfulSearch.Root          -- Context provider (lives in your DOM tree)
+-- InsytfulSearch.Trigger   -- Toggle button (place anywhere in your DOM)
+-- InsytfulSearch.Portal    -- Shadow DOM dialog (portalled to document.body)
    +-- InsytfulSearch.Close -- Close button (top-right; optional)
    +-- InsytfulSearch.Title
    +-- InsytfulSearch.Description
    +-- InsytfulSearch.Input
    +-- InsytfulSearch.Messages
    +-- InsytfulSearch.Suggestions
    +-- InsytfulSearch.Disclaimer
```

`Root` lives in the consumer's DOM so components like `Trigger` can be placed anywhere (e.g. in a site header). `Portal` creates the Shadow DOM boundary for the modal dialog.

### Components

##### `InsytfulSearch.Root`

Provider component. Everything else must be a descendant.

```tsx
<InsytfulSearch.Root
  options={{ config: 'your-config' }}
  open={isOpen}
  onOpenChange={setOpen}
  theme={customCSS}
  renderMarkdown={(md) => <ReactMarkdown>{md}</ReactMarkdown>}
  logo={<MyLogo />}
  isDevMode={false}
  offsets={{ top: 80 }}
>
  {children}
</InsytfulSearch.Root>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `options` | `{ config: string, baseUrl?: string }` | Yes | RAG API configuration |
| `open` | `boolean` | No | Controlled open state |
| `defaultOpen` | `boolean` | No | Initial open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | No | Called when open state changes |
| `theme` | `string` | No | Custom CSS injected into Shadow DOM |
| `renderMarkdown` | `(md: string) => ReactNode` | No | Custom markdown renderer |
| `logo` | `ReactNode` | No | Logo shown next to AI responses |
| `isDevMode` | `boolean` | No | Use mock responses for development |
| `offsets` | `{ top?, bottom?, left?, right? }` | No | Modal positioning (number or string) |

#### `InsytfulSearch.Portal`

Renders children into the Shadow DOM dialog. Must be a descendant of `Root`.

```tsx
<InsytfulSearch.Portal>
  {/* Modal content goes here */}
</InsytfulSearch.Portal>
```

#### `InsytfulSearch.Trigger`

Toggles the modal. Renders a `<button>` by default, or merges props onto your child element with `asChild`.

```tsx
<InsytfulSearch.Trigger>Open Search</InsytfulSearch.Trigger>

// Or with your own element
<InsytfulSearch.Trigger asChild>
  <button className="my-button">Search</button>
</InsytfulSearch.Trigger>
```

> **Note:** When using `asChild`, the child's `onClick` handler will be replaced by the toggle behaviour.

#### `InsytfulSearch.Close`

Closes the modal. Place inside `InsytfulSearch.Portal` so the focus trap includes it. Renders a top-right X button styled via `--insytful-btn-close-*` tokens; pass children to override the icon, or `asChild` to merge props onto your own element.

```tsx
<InsytfulSearch.Portal>
  <InsytfulSearch.Close />

  {/* Custom icon */}
  <InsytfulSearch.Close>
    <MyIcon />
  </InsytfulSearch.Close>

  {/* Or your own button element */}
  <InsytfulSearch.Close asChild>
    <button className="my-close-btn" aria-label="Dismiss">x</button>
  </InsytfulSearch.Close>
</InsytfulSearch.Portal>
```

#### `InsytfulSearch.Title`

Heading for the empty state. Wires `aria-labelledby` on the dialog.

```tsx
<InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
```

#### `InsytfulSearch.Description`

Subheading text below the title.

```tsx
<InsytfulSearch.Description>Ask a question in your own words.</InsytfulSearch.Description>
```

#### `InsytfulSearch.Input`

Textarea with send button. Adapts icon and aria-label based on mode (AI sparkle vs search magnifier).

```tsx
<InsytfulSearch.Input />

// Embedded variant (no border/focus ring, for use inside a hero component wrapper)
<InsytfulSearch.Input embedded />

// Custom submit handler (e.g. open modal from a header search)
<InsytfulSearch.Input onSubmit={(query) => { openModal(); sendQuery(query); }} />
```

| Prop | Type | Description |
|------|------|-------------|
| `embedded` | `boolean` | Removes border/focus ring for card layouts |
| `placeholder` | `string` | Override placeholder text |
| `onSubmit` | `(query: string) => void` | Custom submit handler (bypasses context `onSend`) |
| `className` | `string` | Additional CSS classes |

#### `InsytfulSearch.Messages`

Displays the AI conversation thread with auto-scroll, typing indicator, gradient overflow mask, and error display.

```tsx
<InsytfulSearch.Messages className="px-4" />
```

#### `InsytfulSearch.Suggestions`

Clickable suggestion chips. Clicking sends the suggestion text via context `onSend`.

```tsx
<InsytfulSearch.Suggestions items={['How do I...?', 'What features are available?']} />

// Render below the input (default is "above")
<InsytfulSearch.Suggestions position="below" items={['Tell me more', 'Other courses']} />
```

| Prop | Type | Description |
|------|------|-------------|
| `items` | `string[]` | Suggestion strings. Each renders as a clickable chip. |
| `position` | `"above" \| "below"` | Where suggestions sit relative to the input. Defaults to `"above"`. |
| `className` | `string` | Additional CSS classes on the outer wrapper. |

#### `InsytfulSearch.Disclaimer`

Footer text, typically for AI disclaimers.

```tsx
<InsytfulSearch.Disclaimer>AI-generated answers may contain mistakes.</InsytfulSearch.Disclaimer>
```

### Mode Switching

Switch between AI search and classic (URL-based) search:

```tsx
<InsytfulSearch.Root options={{ config: 'your-config' }} open={open} onOpenChange={setOpen}>
  <InsytfulSearch.Modes defaultValue="ai">
    <InsytfulSearch.ModeSwitch>
      {({ mode, onSwitch }) => (
        <div className="tabs">
          <button onClick={() => onSwitch('ai')} className={mode === 'ai' ? 'active' : ''}>
            AI Search
          </button>
          <button onClick={() => onSwitch('classic')} className={mode === 'classic' ? 'active' : ''}>
            Classic Search
          </button>
        </div>
      )}
    </InsytfulSearch.ModeSwitch>

    <InsytfulSearch.Mode name="ai">
      <InsytfulSearch.Title>AI Search</InsytfulSearch.Title>
      <InsytfulSearch.Input />
      <InsytfulSearch.Messages />
    </InsytfulSearch.Mode>

    <InsytfulSearch.Mode name="classic" path="/search?q=">
      <InsytfulSearch.Title>Classic Search</InsytfulSearch.Title>
      <InsytfulSearch.Input />
    </InsytfulSearch.Mode>
  </InsytfulSearch.Modes>
</InsytfulSearch.Root>
```

#### `InsytfulSearch.Modes`

Container for mode switching. Manages active mode state.

| Prop | Type | Description |
|------|------|-------------|
| `defaultValue` | `string` | Initial mode (default: `"ai"`) |
| `value` | `string` | Controlled mode |
| `onValueChange` | `(mode: string) => void` | Called when mode changes |

#### `InsytfulSearch.Mode`

Renders children only when this mode is active.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | Mode identifier (e.g. `"ai"`, `"classic"`) |
| `path` | `string` | No | Navigation URL prefix (e.g. `/search?q=`) |
| `onNavigate` | `(url: string) => void` | No | Custom navigation for SPA routing |

When `path` is set, submitting navigates to `path + encodeURIComponent(query)` instead of calling the AI API. Navigation is restricted to same-origin paths.

#### `InsytfulSearch.ModeSwitch`

Render-prop component for building mode switch UI (tabs, pills, etc).

```tsx
<InsytfulSearch.ModeSwitch>
  {({ mode, onSwitch }) => <MyTabs active={mode} onSwitch={onSwitch} />}
</InsytfulSearch.ModeSwitch>
```

### Context Hooks

For advanced usage, the library exports context hooks:

```tsx
import { InsytfulSearch } from 'insytful-ai-search-components';

// Inside a Search.Root descendant -- throws if used outside Root
const { messages, loading, onSend, open } = InsytfulSearch.useSearchContext('MyComponent');

// Inside a Search.Modes descendant -- throws if used outside Modes
const { mode, onSwitchMode } = InsytfulSearch.useModeContext('MyComponent');

// Safe variant -- returns null if not inside Search.Modes
const modeCtx = InsytfulSearch.useModeContextSafe();
```

### Styling

#### Custom Theme CSS

Pass CSS via the `theme` prop on `Root`. It's injected into the Shadow DOM alongside the base styles:

```tsx
import theme from './my-theme.css?inline';

<InsytfulSearch.Root theme={theme} options={...}>
```

> **Security note:** The `theme` prop injects raw CSS into the Shadow DOM. Only pass trusted, developer-authored CSS -- never user-generated content.

See [CSS Custom Properties](#css-custom-properties) for the full list of theming tokens.

#### Dynamic Offsets

Add `data-insytful-modal-offset` to elements that should push the modal down (e.g. a sticky header):

```html
<header data-insytful-modal-offset>Your site header</header>
```

The modal measures their combined height via `ResizeObserver` and adjusts its `top` offset.

### Markdown Rendering

The `renderMarkdown` prop on `Root` controls how AI responses are rendered. If omitted, responses display as plain text.

```tsx
import ReactMarkdown from 'react-markdown';

<InsytfulSearch.Root
  renderMarkdown={(md) => <ReactMarkdown>{md}</ReactMarkdown>}
  options={...}
>
```

> **Security note:** Your `renderMarkdown` implementation must sanitize output. AI responses are untrusted content -- do not use `dangerouslySetInnerHTML` or enable raw HTML passthrough. Libraries like `react-markdown` are safe by default.

### TypeScript

All components and props are fully typed:

```tsx
import type {
  SearchRootProps,
  SearchTriggerProps,
  SearchModesProps,
  SearchModeProps,
  SearchModeSwitchProps,
  SearchSuggestionsProps,
} from 'insytful-ai-search-components';
```

---

## CSS Custom Properties

Both versions support the same theme variables. For the Web Component, set these on `.insytful-root` inside your `theme` attribute. For React, set them on `:host` inside your `theme` prop.

```css
/* Typography */
--insytful-font-family: system-ui, -apple-system, sans-serif;

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
--insytful-btn-prompt-focus: var(--insytful-semantic-search-field-focus);

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
--insytful-semantic-search-field-focus: #35d2c5;

/* Transitions */
--insytful-search-transition-duration: 200ms;

/* Z-index */
--insytful-z-index: 999;
```

## Accessibility

Both the React and Web Component versions share the same accessibility features:

- Dialog uses `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`
- Focus is trapped inside the modal via [focus-trap](https://github.com/focus-trap/focus-trap)
- `Escape` closes the modal; clicking outside deactivates the focus trap
- Trigger elements set `aria-expanded` and `data-state`
- `inert` attribute hides the dialog from assistive tech when closed
- Respects `prefers-reduced-motion` (transitions disabled)

## Browser Support

Modern browsers with [Shadow DOM v1](https://caniuse.com/shadowdomv1). Client-side rendering only (no SSR).

## Licence

MIT
