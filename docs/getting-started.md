# Getting started

## React or Web Component?

Both render the same search modal with the same design and theming.

- **React components** — for React sites. You compose the modal from parts,
  and you also get the standalone `Search.Overview` (an AI answer above your
  results) and `Search.Keyword` (keyword results), plus hooks for a fully
  custom UI.
- **Web Component** — one `<script>` tag and an `<insytful-search>` element,
  for any site with no build step. It provides the modal only. See
  [Web Component](./web-component.md).

## Install

```bash
npm install insytful-ai-search-components
```

Peer dependencies: `react` and `react-dom` 17 or later.

```tsx
import 'insytful-ai-search-components/style.css';
import { Theme, InsytfulSearch } from 'insytful-ai-search-components';
```

Wrap the components in `<Theme>` for the default look. Without it they're
unstyled. See [Theming](./theming.md).

## Connection options

`Search.Root`, `Search.Overview` and `Search.Keyword` take the same `options`
object:

| Option | Description |
|---|---|
| `baseUrl` | Root URL of the Insytful AI Search API. Required. |
| `config` | The site's config alias. Required unless `searchConfig` is set. |
| `searchConfig` | The slug of an [aggregated search](#aggregated-searches). |
| `recaptchaSiteKey` | Google reCAPTCHA v3 **site** key (the public one). When set, every AI query needs a passing reCAPTCHA check. Keyword search doesn't use it. |

```tsx
<InsytfulSearch.Root options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}>
```

### Sharing options with `InsytfulSearch.Provider`

When several components on a page use the same connection, wrap them in
`InsytfulSearch.Provider` and leave `options` off. `options` wins when both are
set; with neither, the component throws.

```tsx
<InsytfulSearch.Provider config="your-config" baseUrl="https://your-api.com">
  <InsytfulSearch.Overview term={searchTerm} renderMarkdown={renderMarkdown} />
  <InsytfulSearch.Keyword term={searchTerm} />
</InsytfulSearch.Provider>
```

The Provider also loads reCAPTCHA once for everything inside it when
`recaptchaSiteKey` is set.

### Aggregated searches

An aggregated search answers from several sites' content under its own
settings. Pass its slug as `searchConfig` in place of `config`:

```tsx
options={{ searchConfig: 'your-aggregated-search', baseUrl: 'https://your-api.com' }}
```

Embedded on one member's site? Pass that site's alias as `config` too, and its
pages are favoured. Sessions and votes are keyed on the slug. Use the
`recaptchaSiteKey` from `GET /search-configuration/:slug`, not a member's.

## Rendering answers

Answers arrive as Markdown. The library doesn't bundle a Markdown renderer, so
pass one as `renderMarkdown` on `Search.Root` or `Search.Overview`:

```tsx
import ReactMarkdown from 'react-markdown';

const renderMarkdown = (md: string) => <ReactMarkdown>{md}</ReactMarkdown>;
```

Without it, the modal shows answers as plain text and `Search.Overview` shows
no answer text at all. The output is styled by the answer text rules and the
`--insytful-prose-*` [variables](./css-variables.md).

The Web Component has a Markdown renderer built in.

## Local development without a backend

`isDevMode` on `Search.Root`, `Search.Overview` or `Search.Keyword` (or the
`dev-mode` attribute on the Web Component) swaps the API for mocked
responses.

## Browser support

Chromium 105+, Safari 15.4+, Firefox 121+ (Shadow DOM, `:has()`, `:where()`).
Client-side rendering only.
