# Web Component

The `<insytful-search>` element gives you the search modal on any site, with a
single script tag and no build step. It's always themed, and renders in a
Shadow DOM so the host page's CSS can't break it.

```html
<script src="https://unpkg.com/insytful-ai-search-components@5/dist/insytful-search.js"></script>

<insytful-search api-uri="https://your-api.com" project-id="your-config">
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <span slot="description">Ask a question in your own words.</span>
  <span slot="disclaimer">AI generated answers may not always be accurate.</span>
  <insytful-close></insytful-close>
  <insytful-suggestion>How do I apply?</insytful-suggestion>
  <insytful-suggestion>Where can I find term dates?</insytful-suggestion>
</insytful-search>
```

Pin the major version in the script URL.

## Attributes

| Attribute | Description |
|---|---|
| `api-uri` | Root URL of the Insytful AI Search API. Required. |
| `project-id` | The site's config alias (`config` in React). Required. |
| `theme` | CSS added after the library's, inside the Shadow DOM. See [Theming](./theming.md). |
| `suggestions-position` | `"above"` (default) or `"below"` the input. |
| `sections` | Passed to the API with each question. |
| `dev-mode` | Present: mocked API responses, for local work. |

Changing an attribute takes effect straight away.

## Slots

| Slot | Content |
|---|---|
| `trigger` | The element that opens the modal. |
| `logo` | Shown above the title. |
| `title` | The modal heading. Defaults to "How can we help?". |
| `description` | Intro text under the title. |
| `disclaimer` | Small print. |
| `avatar` | Shown beside each answer, e.g. `<img slot="avatar" src="…" alt="">`. |

## Child elements

These configure the modal. They're read once, when the element connects.

- **`<insytful-close>`** — adds a close button. Its contents replace the ✕
  icon; `aria-label` defaults to "Close search".
- **`<insytful-suggestion>`** — one starter question each. They hide once the
  first question is sent.
- **`<insytful-mode name="…" path="…">`** — one per [mode](./react/modes.md).
  With two or more, tabs appear. A mode with a `path` is classic: submitting
  goes to that path with the encoded question appended. The text content is
  the tab label. Name the AI mode `ai`.
- **`<insytful-callout type="error">`** — replaces the default error message:

  ```html
  <insytful-callout type="error">
    <insytful-callout-title>Something went wrong</insytful-callout-title>
    <insytful-callout-text>We couldn't reach the search service. Please try again.</insytful-callout-text>
    <insytful-callout-cta href="/help">Visit the help centre</insytful-callout-cta>
  </insytful-callout>
  ```

## Methods and properties

```js
const search = document.querySelector('insytful-search');

search.open();                  // open
search.open('How do I apply?'); // open and ask straight away
search.close();
search.toggle();
search.isOpen;                  // read or set
```

## Events

All bubble and cross the Shadow DOM boundary.

| Event | `detail` | When |
|---|---|---|
| `insytful-open` | — | The modal opens. |
| `insytful-close` | — | The modal closes. |
| `insytful-search` | `{ query }` | A question is submitted. |
| `insytful-message` | The message, including any `ctas` | An answer finishes. |
| `insytful-error` | `{ error }` | A question fails. |
| `insytful-mode-change` | `{ mode }` | The user switches mode. |
| `insytful-cta-click` | The `Cta` | A quick action is clicked. See [CTAs](./ctas.md). |

## Not supported yet

The Web Component has no aggregated search (`searchConfig`) or reCAPTCHA
support, and no `Overview` or `Keyword` equivalents. Use the React components
for those.
