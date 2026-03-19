# Insytful AI Search Components

Radix-style compound components for AI-powered search modals. Built with React, TypeScript, and Tailwind CSS. Uses Shadow DOM for style isolation.

## Installation

```bash
npm install insytful-ai-search-components
```

**Peer dependencies:** `react` (>=17) and `react-dom` (>=17).

## Quick Start

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

## Architecture

```
InsytfulSearch.Root          — Context provider (lives in your DOM tree)
├── InsytfulSearch.Trigger   — Toggle button (place anywhere in your DOM)
└── InsytfulSearch.Portal    — Shadow DOM dialog (portalled to document.body)
    ├── InsytfulSearch.Title
    ├── InsytfulSearch.Description
    ├── InsytfulSearch.Input
    ├── InsytfulSearch.Messages
    ├── InsytfulSearch.Suggestions
    └── InsytfulSearch.Disclaimer
```

`Root` lives in the consumer's DOM so components like `Trigger` can be placed anywhere (e.g. in a site header). `Portal` creates the Shadow DOM boundary for the modal dialog.

## Components

### `InsytfulSearch.Root`

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

### `InsytfulSearch.Portal`

Renders children into the Shadow DOM dialog. Must be a descendant of `Root`.

```tsx
<InsytfulSearch.Portal>
  {/* Modal content goes here */}
</InsytfulSearch.Portal>
```

### `InsytfulSearch.Trigger`

Toggles the modal. Renders a `<button>` by default, or merges props onto your child element with `asChild`.

```tsx
<InsytfulSearch.Trigger>Open Search</InsytfulSearch.Trigger>

// Or with your own element
<InsytfulSearch.Trigger asChild>
  <button className="my-button">Search</button>
</InsytfulSearch.Trigger>
```

> **Note:** When using `asChild`, the child's `onClick` handler will be replaced by the toggle behaviour.

### `InsytfulSearch.Title`

Heading for the empty state. Wires `aria-labelledby` on the dialog.

```tsx
<InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
```

### `InsytfulSearch.Description`

Subheading text below the title.

```tsx
<InsytfulSearch.Description>Ask a question in your own words.</InsytfulSearch.Description>
```

### `InsytfulSearch.Input`

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

### `InsytfulSearch.Messages`

Displays the AI conversation thread with auto-scroll, typing indicator, gradient overflow mask, and error display.

```tsx
<InsytfulSearch.Messages className="px-4" />
```

### `InsytfulSearch.Suggestions`

Clickable suggestion chips. Clicking sends the suggestion text via context `onSend`.

```tsx
<InsytfulSearch.Suggestions items={['How do I...?', 'What features are available?']} />
```

### `InsytfulSearch.Disclaimer`

Footer text, typically for AI disclaimers.

```tsx
<InsytfulSearch.Disclaimer>AI-generated answers may contain mistakes.</InsytfulSearch.Disclaimer>
```

## Mode Switching

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

### `InsytfulSearch.Modes`

Container for mode switching. Manages active mode state.

| Prop | Type | Description |
|------|------|-------------|
| `defaultValue` | `string` | Initial mode (default: `"ai"`) |
| `value` | `string` | Controlled mode |
| `onValueChange` | `(mode: string) => void` | Called when mode changes |

### `InsytfulSearch.Mode`

Renders children only when this mode is active.

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | `string` | Yes | Mode identifier (e.g. `"ai"`, `"classic"`) |
| `path` | `string` | No | Navigation URL prefix (e.g. `/search?q=`) |
| `onNavigate` | `(url: string) => void` | No | Custom navigation for SPA routing |

When `path` is set, submitting navigates to `path + encodeURIComponent(query)` instead of calling the AI API. Navigation is restricted to same-origin paths.

### `InsytfulSearch.ModeSwitch`

Render-prop component for building mode switch UI (tabs, pills, etc).

```tsx
<InsytfulSearch.ModeSwitch>
  {({ mode, onSwitch }) => <MyTabs active={mode} onSwitch={onSwitch} />}
</InsytfulSearch.ModeSwitch>
```

## Context Hooks

For advanced usage, the library exports context hooks:

```tsx
import { InsytfulSearch } from 'insytful-ai-search-components';

// Inside a Search.Root descendant — throws if used outside Root
const { messages, loading, onSend, open } = InsytfulSearch.useSearchContext('MyComponent');

// Inside a Search.Modes descendant — throws if used outside Modes
const { mode, onSwitchMode } = InsytfulSearch.useModeContext('MyComponent');

// Safe variant — returns null if not inside Search.Modes
const modeCtx = InsytfulSearch.useModeContextSafe();
```

## Styling

### Custom Theme CSS

Pass CSS via the `theme` prop on `Root`. It's injected into the Shadow DOM alongside the base styles:

```tsx
import theme from './my-theme.css?inline';

<InsytfulSearch.Root theme={theme} options={...}>
```

> **Security note:** The `theme` prop injects raw CSS into the Shadow DOM. Only pass trusted, developer-authored CSS — never user-generated content.

### CSS Custom Properties

Override these variables in your theme CSS to change colours:

```css
:host {
  /* Text */
  --insytful-text-default: #333333;
  --insytful-text-muted: #6c6c6c;
  --insytful-text-link-default: #1d70b8;
  --insytful-text-link-hover: #184b76;

  /* Brand */
  --insytful-brand-primary: #195491;

  /* Suggestion buttons */
  --insytful-btn-prompt-bg-default: #e2eefa;
  --insytful-btn-prompt-bg-hover: #c8daec;
  --insytful-btn-prompt-text: #333333;

  /* Send button */
  --insytful-btn-icon-search-bg-default: #2e3339;
  --insytful-btn-icon-search-bg-hover: #3c444d;
  --insytful-btn-icon-search-icon: #ffffff;

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
}
```

### Dynamic Offsets

Add `data-insytful-modal-offset` to elements that should push the modal down (e.g. a sticky header):

```html
<header data-insytful-modal-offset>Your site header</header>
```

The modal measures their combined height via `ResizeObserver` and adjusts its `top` offset.

## Markdown Rendering

The `renderMarkdown` prop on `Root` controls how AI responses are rendered. If omitted, responses display as plain text.

```tsx
import ReactMarkdown from 'react-markdown';

<InsytfulSearch.Root
  renderMarkdown={(md) => <ReactMarkdown>{md}</ReactMarkdown>}
  options={...}
>
```

> **Security note:** Your `renderMarkdown` implementation must sanitize output. AI responses are untrusted content — do not use `dangerouslySetInnerHTML` or enable raw HTML passthrough. Libraries like `react-markdown` are safe by default.

## TypeScript

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

## Accessibility

- Dialog uses `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`
- Focus is trapped inside the modal via [focus-trap](https://github.com/focus-trap/focus-trap)
- `Escape` closes the modal; clicking outside deactivates the focus trap
- `Trigger` sets `aria-expanded` and `data-state`
- `inert` attribute hides the dialog from assistive tech when closed
- Respects `prefers-reduced-motion` (transitions disabled)

## Browser Support

Modern browsers with [Shadow DOM v1](https://caniuse.com/shadowdomv1). Client-side rendering only (no SSR).

## Licence

MIT
