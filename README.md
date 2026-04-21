# Insytful AI Search Components

AI-powered search modals for the web. Ships in two flavours — a standalone **Web Component** for any HTML page, and **React components** for React applications. Both share the same visual design, theming, and Contensis RAG API integration.

## Install

**React:**

```bash
npm install insytful-ai-search-components
```

Peer dependencies: `react` (>=17) and `react-dom` (>=17).

**Web Component** — single script tag, no build step:

```html
<script src="https://unpkg.com/insytful-ai-search-components@2.1.7/dist/insytful-search.js"></script>
```

## Quick start — React

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
        <InsytfulSearch.Input />
        <InsytfulSearch.Messages />
        <InsytfulSearch.Suggestions items={['How do I...?', 'What is...?']} />
      </InsytfulSearch.Portal>
    </InsytfulSearch.Root>
  );
}
```

`InsytfulSearch.Root` provides shared context. `InsytfulSearch.Portal` renders into a Shadow DOM dialog on `document.body`. `Trigger` can be placed anywhere in your DOM.

## Quick start — Web Component

```html
<script src="https://unpkg.com/insytful-ai-search-components@2.1.7/dist/insytful-search.js"></script>

<insytful-search
  api-uri="https://your-api.com"
  project-id="your-project"
>
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <insytful-close></insytful-close>
  <insytful-suggestion>How do I get started?</insytful-suggestion>
</insytful-search>
```

## Documentation

- **[Web Component](./docs/web-component.md)** — attributes, slots, child elements, JavaScript API, Contensis/Razor integration, dynamic offsets
- **[React Components](./docs/react.md)** — full API reference, architecture, mode switching, context hooks, markdown rendering, TypeScript types
- **[Theming](./docs/theming.md)** — CSS custom properties, focus ring behaviour, font-size scaling

## Accessibility

Both versions share the same accessibility features:

- Dialog uses `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`
- Focus trapped via [focus-trap](https://github.com/focus-trap/focus-trap)
- `Escape` closes; clicking outside deactivates the focus trap
- Trigger elements expose `aria-expanded` and `data-state`
- `inert` hides the dialog from assistive tech when closed
- Respects `prefers-reduced-motion`
- AI-response prose scales with the user's browser text-size preference (see [Theming](./docs/theming.md#base-font-size-and-scaling))

## Browser support

Modern browsers with [Shadow DOM v1](https://caniuse.com/shadowdomv1) and [`:has()`](https://caniuse.com/css-has) (Chromium 105+, Safari 15.4+, Firefox 121+). Client-side rendering only (no SSR).

## Licence

MIT
