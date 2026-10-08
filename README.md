# Insytful AI Search Components

AI-powered search for the web, in two flavours: **React components** and a
standalone **Web Component**. Both share the same design, theming and Insytful
AI Search API integration.

Full documentation: <https://www.insytful.com/help-and-docs/guides/insytful-ai-search/front-end-implementation/insytful-ai-search-overview>

## Install

**React** (peer deps: `react` and `react-dom` >= 17):

```bash
npm install insytful-ai-search-components
```

**Web Component** (no build step; pin the major version):

```html
<script src="https://unpkg.com/insytful-ai-search-components@4/dist/insytful-search.js"></script>
```

## React

```tsx
import 'insytful-ai-search-components/style.css';
import { Theme, InsytfulSearch } from 'insytful-ai-search-components';

export function App() {
  return (
    <Theme>
      <InsytfulSearch.Root options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}>
        <InsytfulSearch.Trigger>Search</InsytfulSearch.Trigger>
        <InsytfulSearch.Portal>
          <InsytfulSearch.Close />
          <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
          <InsytfulSearch.Input />
          <InsytfulSearch.Messages />
          <InsytfulSearch.Suggestions />
        </InsytfulSearch.Portal>
      </InsytfulSearch.Root>
    </Theme>
  );
}
```

Components are unstyled without `<Theme>`. `InsytfulSearch.Overview` renders a
standalone answer above search results, without a modal.

### `Search.Messages`

```tsx
<InsytfulSearch.Messages
  feedback={{ report: { text: 'Report an error', href: '/report' } }}
  disclaimer="AI generated answers may not always be accurate."
/>
```

- `feedback` — a report link and Helpful / Unhelpful vote under each finished
  answer. Answers the API didn't treat as substantive show the report link only.
  See [Feedback](#feedback) for the options.
- `disclaimer` — small print under each finished answer, below the feedback
  row. Use it instead of `<InsytfulSearch.Disclaimer>`, not alongside it, or the
  disclaimer shows twice.

### `Search.Overview`

```tsx
<InsytfulSearch.Overview
  term={searchTerm}
  options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}
  type="conversational"
  renderMarkdown={renderMarkdown}
  feedback={{ report: { text: 'Report an error', href: '/report' } }}
  disclaimer="AI generated answers may not always be accurate."
/>
```

- `type` — `"keyword"` (default) is a single answer behind Show more.
  `"conversational"` keeps a thread: expanding reveals a follow-up input and
  each follow-up renders beneath the first answer.
- `expanded` / `onExpandedChange` — controlled expansion. Leave both off to
  keep the built-in toggle; pass them when the host owns the state (e.g. per
  tab).
- `collapsible` — `"auto"` (default) clips a collapsed answer only when it
  overflows the teaser height; `true` always does; `false` never does. The
  skeleton and errors are never clipped.
- `feedback` — a report link and Helpful / Unhelpful vote under the answer, and
  under each follow-up in `"conversational"` mode. Each answer is voted on
  separately; answers the API didn't treat as substantive show the report link
  only. The row is hidden while the answer is collapsed. See
  [Feedback](#feedback) for the options.
- `disclaimer` — small print under the answer, below the feedback row. In
  `"conversational"` mode it also appears under each follow-up.
- `renderError(error)` — your own error state, given the error message.
  Defaults to `Search.ErrorCallout` with a general message.
- `renderEmpty` — shown when the answer finishes with no text. Renders nothing
  by default. An empty answer doesn't hold the teaser's space or show the
  disclaimer.

Also: `heading`, `hLevel`, `icon`, `searching`, `onCtaClick`,
`placeholder`, `isDevMode`, `className`, `style`. Root state attributes:
`data-overflowing`, `data-expanded`, `data-conversational`, `data-error`,
`data-empty`.

### `Search.Keyword`

Keyword search results: a list of result cards, with pagination when there's
more than one page.

```tsx
<InsytfulSearch.Keyword
  term={searchTerm}
  options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}
  renderEmpty={() => <p>No results for “{searchTerm}”.</p>}
/>
```

- `renderHit(hit, index)` — your own card. Defaults to the library's result
  card; `hLevel` sets its heading level (default 3). `hit.card.snippet` is HTML
  with only `<mark>`, escaped by the API.
- `renderError(error)` — defaults to `Search.ErrorCallout` with a general
  message. Branch on `error.code` (e.g. `index_not_built`) for your own.
- `renderLoading` — defaults to card-shaped skeletons. `renderEmpty` renders
  nothing by default.
- `options` can be left off inside `InsytfulSearch.Provider`, as with
  `Search.Overview`.

Also: `isDevMode`, `className`. Root state attributes: `data-loading`,
`data-error` (the error code), `data-empty`. For a fully custom UI, use the
`useKeywordSearch(config, baseUrl)` hook.

### Feedback

`feedback` on `Search.Overview` and `Search.Messages` takes the same object:

```tsx
feedback={{
  report: { text: 'Report an error', href: '/report', newTab: true },
  onVote: (vote, { mid }) => analytics.track('ai_vote', { vote, mid }),
}}
```

- `report` — optional link before the vote buttons. `newTab` opens it in a new
  tab and adds screen-reader text saying so.
- `onVote` — called after the API accepts a vote, with `"helpful"`,
  `"unhelpful"` or `null` (retracted) and the answer's `mid`. For host
  analytics; the components send the vote themselves.
- `helpful` / `unhelpful` — button contents. Default to thumb icons with
  visually hidden labels.
- `thanks` — announced to screen readers once a vote is cast. Defaults to
  "Thanks for your feedback".

Clicking the other button changes the vote; clicking the pressed one retracts
it. If the vote window has closed, or the answer can't be voted on, the buttons
are hidden for that answer.

### Aggregated searches

An aggregated search answers from several sites' content under its own
settings. Pass its slug as `searchConfig` in place of `config`:

```tsx
options={{ searchConfig: 'your-aggregated-search', baseUrl: 'https://your-api.com' }}
```

Embedded on one member's site? Pass that site's alias as `config` too, and its
pages are favoured. Sessions and votes are keyed on the slug. Use the
`recaptchaSiteKey` from `GET /search-configuration/:slug`, not a member's.

- [React guide](https://www.insytful.com/help-and-docs/guides/insytful-ai-search/front-end-implementation/ai-search-reacttsx-implementation)
- [Theming](https://www.insytful.com/help-and-docs/guides/insytful-ai-search/front-end-implementation/ai-search-theming)

## Web Component

```html
<insytful-search api-uri="https://your-api.com" project-id="your-project">
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <insytful-close></insytful-close>
  <insytful-suggestion>How do I apply?</insytful-suggestion>
</insytful-search>
```

- [Web Component guide](https://www.insytful.com/help-and-docs/guides/insytful-ai-search/front-end-implementation/ai-search-classic-contensis-implementation)

## Sticky headers and banners

Mark any sticky or fixed host chrome with `data-insytful-offset`:

```html
<header data-insytful-offset>…</header>
<div class="cookie-banner" data-insytful-offset>…</div>
```

The library sums the rendered heights of those elements and keeps the sum
live with a `ResizeObserver`, so breakpoints and banners that appear or
dismiss need no extra code. Both flavours use it:

- The modal (`Search.Root` / `<insytful-search>`) is pushed down by that
  height so it opens below the header.
- `Search.Overview` keeps a follow-up question clear of the header when it
  scrolls the question to the top of the page, leaving a 16px gap below it.

`data-insytful-modal-offset` still works as a deprecated alias until 5.0.

## Quick action CTAs (calls-to-action)

The Insytful AI Search API can send calls-to-action with an answer. They are
configured per site in the CMS and selected server-side per query. The
components render them as a "Quick actions" row above the answer, visible while
it streams.

| CTA type | Rendered as | Default behaviour |
|---|---|---|
| `link` | Anchor | Navigates to `cta.url` |
| `call` | Anchor | Opens `tel:` link |
| `email` | Anchor | Opens `mailto:` link |
| `event` | Button | Dispatches a CMS-named event on the shared event bus |

No setup is required for the defaults. The hooks below let you observe clicks,
override what a click does, or react to `event` CTAs.

### Observing clicks

**React**: pass `onCtaClick` to `Search.Root` (or `Search.Overview`). It
receives the full sanitized `Cta`:

```tsx
<InsytfulSearch.Root
  options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}
  onCtaClick={(cta) => analytics.track('ai_search_cta_click', { type: cta.type, label: cta.label })}
>
```

**Web Component**: listen for the composed `insytful-cta-click` DOM event:

```js
document.querySelector('insytful-search')
  .addEventListener('insytful-cta-click', (e) => {
    console.log('CTA clicked:', e.detail); // the full Cta object
  });
```

Both fire on every CTA click and never cancel the action. They are
observability hooks, not interception points. To change what a click does,
register a handler override.

### Overriding execution

`registerCtaHandler(type, handler)` replaces the built-in action for one CTA
type and returns an unregister function that restores the previous behaviour:

```ts
// React / npm:
import { registerCtaHandler } from 'insytful-ai-search-components';

// Web Component / script tag:
const { registerCtaHandler } = window.InsytfulSearch;

const unregister = registerCtaHandler('link', (cta) => {
  myRouter.navigate(cta.url); // cta is narrowed to the "link" variant
});

// Later, restore the default (native navigation):
unregister();
```

The handler registry is shared across every component instance on the page,
and between the React and Web Component bundles when both are loaded. Register
once, not per instance.

### `event` CTAs and the event bus

`event` CTAs dispatch their CMS-configured event name on a shared `EventTarget`
at `window.insytfulAISearchEvents`. Subscribe using this guarded form, which
works whether your script runs before or after the package loads:

```html
<script>
  (window.insytfulAISearchEvents ??= new EventTarget()).addEventListener("openWebChat", (e) => {
    MyChatVendor.load().then(() => MyChatVendor.open(e.detail?.topic));
  });
</script>
```

Three related events, different transports:

| Event | Transport | When it fires | Use it for |
|---|---|---|---|
| `insytful-cta` | Bus (`window.insytfulAISearchEvents`) | Every CTA execution, click or programmatic. Detail is `{ name, cta }` | Analytics across all CTA types |
| `insytful-cta-click` | DOM event from `<insytful-search>` | User clicks a CTA in the Web Component. Detail is the `Cta` | Per-element tracking, host reactions such as closing the modal |
| CMS-named (e.g. `openWebChat`) | Bus (`window.insytfulAISearchEvents`) | An `event` CTA executes | Actually doing the thing |

Security notes:

- `e.detail` is CMS-authored data. Treat it as untrusted: never `innerHTML` it and never deep-merge it into configuration objects.
- Bus events can be forged by any script on the page. Make no security decisions based on them.
- The bus is same-realm only. Embedded iframes need `postMessage`.
- CTA `detail` payloads must never carry user-derived or personal data.

### Closing the modal from a CTA

The package never auto-closes the modal on a CTA click. Close it yourself in
your handler:

```tsx
// React, via onOpenChange state:
<InsytfulSearch.Root open={open} onOpenChange={setOpen}
  onCtaClick={(cta) => { if (cta.type === 'event') setOpen(false); }}>
```

```js
// Web Component:
const el = document.querySelector('insytful-search');
el.addEventListener('insytful-cta-click', (e) => {
  if (e.detail.type === 'event') el.close();
});
```

### Theming CTAs

Hook classes: `insytful-search-cta-bar`, `insytful-search-cta-label`,
`insytful-search-cta-btn`. Each chip carries `data-intent="primary|secondary"`.
Override these tokens on `.insytful-theme` (React: in your stylesheet or via
`<Theme css>`; Web Component: via the `theme` attribute):

```css
.insytful-theme {
  --insytful-cta-bar-gap: 8px;
  --insytful-cta-radius: 9999px;
  --insytful-cta-label-text: var(--insytful-text-muted);
  --insytful-cta-primary-bg-default: #2e3339;
  --insytful-cta-primary-bg-hover: #3c444d;
  --insytful-cta-primary-text: #ffffff;
  --insytful-cta-primary-border: transparent;
  --insytful-cta-secondary-bg-default: transparent;
  --insytful-cta-secondary-bg-hover: #f2f2f2;
  --insytful-cta-secondary-text: var(--insytful-text-default);
  --insytful-cta-secondary-border: #c8cdd3;
}
```

## Upgrading

4.0 changes the styling model and some hook classes. See
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
