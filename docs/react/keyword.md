# `Search.Keyword`

Keyword search results: a list of result cards, with pagination when there's
more than one page. It doesn't need `Search.Root`.

```tsx
<InsytfulSearch.Keyword
  term={searchTerm}
  options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}
  renderEmpty={() => <p>No results for “{searchTerm}”.</p>}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `term` | `string` | — | The search term. Required. A new term runs a new search; an empty one runs none. |
| `options` | `SearchConfig` | from `Provider` | [Connection options](../getting-started.md#connection-options). |
| `renderHit` | `(hit, index) => ReactNode` | result card | Your own card. `hit.card.snippet` is HTML containing only `<mark>`, already escaped by the API. |
| `hLevel` | `number` | `3` | Heading level of the default card's title. |
| `renderLoading` | `() => ReactNode` | card-shaped skeletons | Shown while a search is in flight. |
| `renderError` | `(error) => ReactNode` | `ErrorCallout` | Shown when a search fails. Branch on `error.code`, e.g. `index_not_built` ("coming soon") or `keyword_search_disabled` (hide search). |
| `renderEmpty` | `() => ReactNode` | nothing | Shown when a search succeeds with no results. |
| `isDevMode` | `boolean` | `false` | Mocked API responses. |
| `className` | `string` | — | Added to the root. |

After a page change, focus and scroll move to the top of the new results.

The default card shows the title, published date (e.g. "28 September 2026"),
snippet and image, linking to the page's canonical URL.

For a fully custom UI, use the [`useKeywordSearch`](./hooks.md#usekeywordsearch)
hook.

## Customising

**State attributes on the root:** `data-loading`, `data-error` (the error
code), `data-empty`.

**Hook classes:**

- `insytful-search-keyword` (root), `insytful-search-keyword-list`,
  `insytful-search-keyword-item`
- Card: `insytful-search-result-card` (with `data-has-image`), `-image`,
  `-body`, `-title`, `-link`, `-date`, `-snippet`, each prefixed
  `insytful-search-result-card`
- Pagination: `insytful-search-pagination`, `-list`, `-item` (with
  `data-active`, `data-direction="previous|next"` or `data-ellipsis`), `-link`,
  each prefixed `insytful-search-pagination`
- Loading: `insytful-search-skeleton-card`

**Variables:** `--insytful-result-card-*`, `--insytful-pagination-*`,
`--insytful-skeleton-*`.
