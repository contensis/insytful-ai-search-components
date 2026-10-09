# Insytful AI Search Components

AI-powered search for the web, in two flavours: **React components** and a
standalone **Web Component**. Both share the same design, theming and Insytful
AI Search API integration.

- **React** — a composable search modal, a standalone AI answer to show above
  your search results (`Search.Overview`), keyword search results
  (`Search.Keyword`), and hooks for a fully custom UI.
- **Web Component** — the search modal on any site, from one script tag.

## Install

**React** (peer deps: `react` and `react-dom` >= 17):

```bash
npm install insytful-ai-search-components
```

**Web Component** (no build step; pin the major version):

```html
<script src="https://unpkg.com/insytful-ai-search-components@5/dist/insytful-search.js"></script>
```

## Quick start

**React:**

```tsx
import 'insytful-ai-search-components/style.css';
import { Theme, InsytfulSearch } from 'insytful-ai-search-components';

export function App() {
  return (
    <Theme>
      <InsytfulSearch.Root
        options={{ config: 'your-config', apiUrl: 'https://your-api.com' }}
        renderMarkdown={renderMarkdown}
      >
        <InsytfulSearch.Trigger>Search</InsytfulSearch.Trigger>
        <InsytfulSearch.Portal>
          <InsytfulSearch.Close />
          <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
          <InsytfulSearch.Input />
          <InsytfulSearch.Messages />
          <InsytfulSearch.Suggestions items={['How do I apply?']} />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Root>
    </Theme>
  );
}
```

Answers arrive as Markdown, so pass a renderer as `renderMarkdown`; see
[Getting started](./docs/getting-started.md#rendering-answers).

**Web Component:**

```html
<insytful-search api-uri="https://your-api.com" project-id="your-config">
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <insytful-close></insytful-close>
  <insytful-suggestion>How do I apply?</insytful-suggestion>
</insytful-search>
```

## Styling

Components are unstyled until wrapped in `<Theme>`. From there, override the
`--insytful-*` CSS variables for colours, radii and sizes, or target the
`insytful-search-*` hook classes for anything else. Every shipped rule is a
single class deep, so your overrides win without `!important`. See
[Theming](./docs/theming.md) and [CSS variables](./docs/css-variables.md).

## Documentation

- [Getting started](./docs/getting-started.md) — connection options,
  aggregated searches, rendering answers
- React: [the search modal](./docs/react/modal.md),
  [input and suggestions](./docs/react/input.md),
  [messages](./docs/react/messages.md), [modes](./docs/react/modes.md),
  [Overview](./docs/react/overview.md), [Keyword](./docs/react/keyword.md),
  [feedback](./docs/react/feedback.md),
  [error callout](./docs/react/error-callout.md),
  [hooks](./docs/react/hooks.md)
- [Web Component](./docs/web-component.md)
- [Theming](./docs/theming.md) and [CSS variables](./docs/css-variables.md)
- [Quick action CTAs](./docs/ctas.md)
- [Sticky headers and banners](./docs/sticky-headers.md)

## Upgrading

5.0 removes the old "RAG" names (`RAGProvider` becomes
`InsytfulSearch.Provider`) and `Search.Overview`'s `error` prop. 4.0
changed the styling model and some hook classes. See
[CHANGELOG.md](./CHANGELOG.md) for migration notes.

## Local development

```bash
npm install
npm run storybook
```

Storybook runs both flavours against a mocked API, so no backend is needed.

## Browser support

Chromium 105+, Safari 15.4+, Firefox 121+ (Shadow DOM, `:has()`, `:where()`).
Client-side rendering only.

## Licence

MIT
