# Insytful AI Search Components

AI-powered search modals with two delivery options:

1. **[Web Component](#web-component-setup)** — Standalone `<insytful-search>` custom element for any HTML page. No React, no build step, no npm. Ideal for CMS sites (Contensis, WordPress, static HTML).
2. **[React Components](#react-setup)** — Radix-style compound components for React applications. Install via npm.

Both share the same visual design, CSS theming, and Contensis RAG API integration.

---

## Web Component Setup

A single script tag adds AI search to any page. No build step, no npm, no framework required.

### Setup

Add the script to your page, then use the `<insytful-search>` element:

```html
<script src="https://unpkg.com/insytful-ai-search-components/dist/insytful-search.js"></script>

<insytful-search
  api-uri="https://rag-api.insytful.com/api/v1"
  project-id="your-project"
>
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <span slot="description">Ask a question in your own words</span>
  <span slot="disclaimer">AI responses may not always be accurate.</span>

  <insytful-suggestion>How do I get started?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
</insytful-search>
```

### Contensis CMS (C# / Razor)

For classic Contensis sites using the .NET framework, add the Web Component to your layout or view:

```cshtml
@using Contensis.Framework.Web

<!-- Insytful AI Search Web Component -->
<script src="https://unpkg.com/insytful-ai-search-components/dist/insytful-search.js"></script>

<style>
  /* Prevent flash of unstyled content before the script loads */
  insytful-search:not(:defined) { display: none; }
</style>

<insytful-search
  api-uri="CurrentContext.Site.AI.Endpoint"
  project-id="CurrentContext.Site.AI.ProjectId"
>
  <button slot="trigger" class="search-trigger">Search this site</button>
  <span slot="title">Ask our AI</span>
  <span slot="description">Get instant answers about our courses and services</span>
  <span slot="disclaimer">AI responses may not always be accurate. Please verify important information.</span>

  <insytful-suggestion>How do I apply?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
  <insytful-suggestion>Contact us</insytful-suggestion>

  <insytful-mode name="ai">AI Search</insytful-mode>
  <insytful-mode name="classic" path="/search/index.aspx?search_keywords=">Classic Search</insytful-mode>
</insytful-search>
```

To integrate with an existing search form (e.g. a dropdown with search types), you can open the AI search dialog programmatically when the user selects "AI Search":

```cshtml
<div class="sys_textBoxWithRedirect">
  <input type="text" name="search" aria-label="Search" placeholder="Search..." id="search" />
  <select id="searchType" name="searchType" aria-label="Select a type of search">
    <option value="courses">Courses</option>
    <option value="all">Whole site</option>
    <option value="ai">AI Search</option>
  </select>
  <input type="image" id="topSearchButton" alt="Search" src="/_design/img/search-button-50px-2017.png" />
</div>

<!-- AI search component (trigger hidden — opened programmatically) -->
<insytful-search
  id="aiSearch"
  api-uri="CurrentContext.Site.AI.Endpoint"
  project-id="CurrentContext.Site.AI.ProjectId"
>
  <span slot="title">Ask our AI</span>
  <span slot="description">Get instant answers about our courses and services</span>
  <span slot="disclaimer">AI responses may not always be accurate.</span>

  <insytful-suggestion>How do I apply?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
</insytful-search>

<script src="https://unpkg.com/insytful-ai-search-components/dist/insytful-search.js"></script>
```

```cshtml
@{
    string scriptToAdd = @"
    (function($) {
        $(function() {
            var aiSearch = document.getElementById('aiSearch');

            $('#search').keypress(function(e) {
                if (e.which == 13) {
                    e.preventDefault();
                    $('#topSearchButton').trigger('click');
                }
            });

            $('#topSearchButton').on('click', function(e) {
                e.preventDefault();
                var searchType = $('#searchType :selected').val();
                var query = $('#search')
                    .val()
                    .replace(/[^0-9a-z\s]/gi, '')
                    .replace(/\s+/gi, '+');

                if (searchType === 'ai') {
                    // Open the AI Search Dialog
                    aiSearch.open();
                } else if (searchType === 'courses') {
                    // Code for Course Search ...
                } else {
                    // Code for Whole Site Search ...
                }
            });
        });
    })(jQuery);
    ";
    CurrentContext.Page.Scripts.AddInline(scriptToAdd, ScriptLocation.BodyEnd);
}
```

### Web Component Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `api-uri` | Yes | Contensis RAG API endpoint |
| `project-id` | Yes | Project identifier for the RAG API |
| `sections` | No | Comma-separated section slugs to scope results |
| `dev-mode` | No | Enable mock responses for development (no backend needed) |
| `theme` | No | Custom CSS string injected into the Shadow DOM |

### Slots

| Slot | Description |
|------|-------------|
| `trigger` | Button that opens/closes the dialog |
| `title` | Heading text for the empty state |
| `description` | Subheading text below the title |
| `disclaimer` | Footer text (e.g. AI accuracy warning) |
| `logo` | Logo image shown in the dialog header |

### Child Elements

```html
<!-- Suggestion chips (shown before the first query) -->
<insytful-suggestion>How do I apply?</insytful-suggestion>

<!-- Mode switching (AI search + classic URL navigation) -->
<insytful-mode name="ai">AI Search</insytful-mode>
<insytful-mode name="classic" path="/search?q=">Classic Search</insytful-mode>
```

### JavaScript API

```javascript
const el = document.querySelector('insytful-search');

// Open/close programmatically
el.open();
el.close();
el.toggle();

// Check state
console.log(el.isOpen);

// Override markdown rendering
el.renderMarkdown = (md) => myCustomParser(md);

// Listen for events
el.addEventListener('insytful-open', () => console.log('Opened'));
el.addEventListener('insytful-close', () => console.log('Closed'));
el.addEventListener('insytful-search', (e) => console.log('Query:', e.detail.query));
el.addEventListener('insytful-message', (e) => console.log('Response:', e.detail.content));
el.addEventListener('insytful-mode-change', (e) => console.log('Mode:', e.detail.mode));
el.addEventListener('insytful-error', (e) => console.log('Error:', e.detail.error));
```

### Dynamic Offsets

If your site has a sticky header, add `data-insytful-modal-offset` so the dialog doesn't overlap it:

```html
<header data-insytful-modal-offset>Your sticky header</header>
```

---

---

## React Setup

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
```

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

// Inside a Search.Root descendant — throws if used outside Root
const { messages, loading, onSend, open } = InsytfulSearch.useSearchContext('MyComponent');

// Inside a Search.Modes descendant — throws if used outside Modes
const { mode, onSwitchMode } = InsytfulSearch.useModeContext('MyComponent');

// Safe variant — returns null if not inside Search.Modes
const modeCtx = InsytfulSearch.useModeContextSafe();
```

### Styling

#### Custom Theme CSS

Pass CSS via the `theme` prop on `Root`. It's injected into the Shadow DOM alongside the base styles:

```tsx
import theme from './my-theme.css?inline';

<InsytfulSearch.Root theme={theme} options={...}>
```

> **Security note:** The `theme` prop injects raw CSS into the Shadow DOM. Only pass trusted, developer-authored CSS — never user-generated content.

#### CSS Custom Properties

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

> **Security note:** Your `renderMarkdown` implementation must sanitize output. AI responses are untrusted content — do not use `dangerouslySetInnerHTML` or enable raw HTML passthrough. Libraries like `react-markdown` are safe by default.

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

## Accessibility

Both the React and Web Component versions share the same accessibility features:

- Dialog uses `role="dialog"`, `aria-modal`, `aria-labelledby`, and `aria-describedby`
- Focus is trapped inside the modal via [focus-trap](https://github.com/focus-trap/focus-trap)
- `Escape` closes the modal; clicking outside deactivates the focus trap
- Trigger elements set `aria-expanded` and `data-state`
- `inert` attribute hides the dialog from assistive tech when closed
- Respects `prefers-reduced-motion` (transitions disabled)

## CSS Custom Properties

Both versions support the same theme variables. Override them in your custom CSS:

```css
:host {
  --insytful-text-default: #333333;
  --insytful-text-muted: #6c6c6c;
  --insytful-brand-primary: #195491;
  --insytful-btn-prompt-bg-default: #e2eefa;
  --insytful-btn-icon-search-bg-default: #2e3339;
  --insytful-semantic-search-field-focus: #35d2c5;
  --insytful-search-transition-duration: 200ms;
  --insytful-z-index: 999;
}
```

## Browser Support

Modern browsers with [Shadow DOM v1](https://caniuse.com/shadowdomv1). Client-side rendering only (no SSR).

## Licence

MIT
