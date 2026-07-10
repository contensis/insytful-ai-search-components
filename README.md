# Insytful AI Search Components

AI-powered search modals for the web. Ships in two flavours — a standalone **Web Component** for any HTML page, and **React components** for React applications. Both share the same visual design, theming, and Insytful RAG API integration.

## Install

**React:**

```bash
npm install insytful-ai-search-components
```

Peer dependencies: `react` (>=17) and `react-dom` (>=17).

**Web Component** — single script tag, no build step:

```html
<script src="https://unpkg.com/insytful-ai-search-components/dist/insytful-search.js"></script>
```

## React

```tsx
import { useState } from 'react';
import { InsytfulSearch } from 'insytful-ai-search-components';

export function App() {
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
        <InsytfulSearch.Suggestions />
      </InsytfulSearch.Portal>
      <InsytfulSearch.Close />
    </InsytfulSearch.Root>
  );
}
```

[Full React guide →](https://insytful.com/help-and-docs/guides/insytful-ai-search/react-implementation)

### Loading message rotation (React only)

Customise the loading message that displays while the AI is generating a response. Messages rotate based on elapsed time (in milliseconds):

```tsx
<InsytfulSearch.Messages
  searching={{
    messages: [
      { from: 0, to: 1000, text: "Searching..." },
      { from: 1000, to: 4000, text: "Finding the most relevant pages..." },
      { from: 4000, to: 6000, text: "Finding the most relevant pages..." },
      { from: 6000, to: "Infinity", text: "Writing an answer..." },
    ],
  }}
/>
```

If `searching` is not provided, the default message "Generating response..." is used. Timestamps are in milliseconds (e.g., `1000` = 1 second, `6000` = 6 seconds).

**Note:** Message rotation is currently available in React only. Web Component support can be added in a future release if needed.

## Web Component

```html
<script src="https://unpkg.com/insytful-ai-search-components/dist/insytful-search.js"></script>

<insytful-search api-uri="https://your-api.com" project-id="your-project">
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <insytful-suggestion slot="suggestions"></insytful-suggestion>
  <insytful-close slot="close"></insytful-close>
</insytful-search>
```

[Full Web Component guide →](https://insytful.com/help-and-docs/guides/insytful-ai-search/web-component-implementation)

## Local development

```bash
npm install
npm run storybook
```

Opens Storybook with live, hot-reloadable demos of both flavours — the React modal and corner-widget variants, and the standalone Web Component — each running against a mocked API response so no backend is required. Storybook is dev tooling only; it is never bundled into the published package.

## Release checklist

Before publishing a new version:

```bash
# 1. Verify code quality
npm run lint

# 2. Run tests
npm run test

# 3. Build all outputs (React components + Web Component)
npm run build:all

# 4. Create package tarball (optional, for inspection)
npm run pack

# 5. Publish to npm (when ready)
npm publish
```

The `npm publish` step is handled by the `prepublishOnly` hook, which runs `npm run build:all` automatically to ensure dist files are up-to-date.

## Configuration & theming

See the [full documentation on insytful.com](https://insytful.com/help-and-docs/guides/insytful-ai-search/overview) for configuration options, [theming](https://insytful.com/help-and-docs/guides/insytful-ai-search/theming), and API details.

Both variants scale text size with the browser's text-size preferences via the `--insytful-base-font-size` CSS variable, ensuring accessibility for users with vision needs.

## Accessibility

Both versions share the same accessibility features:

- Dialog uses `role="dialog"`, `aria-modal`, `aria-labelledby`, `aria-describedby`
- Focus trapped via [focus-trap](https://github.com/focus-trap/focus-trap)
- `Escape` closes; clicking outside deactivates the focus trap
- Trigger elements expose `aria-expanded` and `data-state`
- `inert` hides the dialog from assistive tech when closed
- Respects `prefers-reduced-motion`

## Browser support

Modern browsers with [Shadow DOM v1](https://caniuse.com/shadowdomv1) and [`:has()`](https://caniuse.com/css-has) (Chromium 105+, Safari 15.4+, Firefox 121+). Client-side rendering only (no SSR).

## Licence

MIT
