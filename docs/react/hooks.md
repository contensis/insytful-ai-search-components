# Hooks

The components are built on these hooks. Use them directly to build a fully
custom UI.

Each takes its connection settings as arguments. The `…Context` variants read
them from [`InsytfulSearch.Provider`](../getting-started.md#sharing-options-with-insytfulsearchprovider)
instead.

## `useAIConversation`

A multi-turn conversation, as used by the modal.

```ts
const { messages, loading, error, elapsed, ask } =
  useAIConversation(config, baseUrl, recaptchaSiteKey?, searchConfig?);

// inside InsytfulSearch.Provider:
const conversation = useAIConversationContext();
```

| Returns | Description |
|---|---|
| `messages` | `AIMessage[]`: `{ role: "user" \| "assistant", content, ctas?, mid?, sid? }`. The last assistant message grows as the answer streams. |
| `loading` | `true` while an answer is in flight. |
| `error` | The error message, or `null`. |
| `elapsed` | Milliseconds since the question was sent, for loading messages. |
| `ask(question)` | Sends a question. |

## `useAIResponse`

A single answer, as used by `Search.Overview`.

```ts
const { response, ctas, loading, elapsed, error, ask, answerIds } =
  useAIResponse(config, baseUrl, recaptchaSiteKey?, searchConfig?);

// inside InsytfulSearch.Provider:
const answer = useAIResponseContext();
```

| Returns | Description |
|---|---|
| `response` | The answer's Markdown so far, or `null`. |
| `ctas` | [Quick actions](../ctas.md) sent with the answer. |
| `loading`, `elapsed`, `error` | As above. |
| `ask(question)` | Asks a question, replacing any previous answer. |
| `answerIds` | The answer's session and message ids, for voting. |

## `useKeywordSearch`

Keyword search, as used by `Search.Keyword`. It has no `…Context` variant.

```ts
const { results, pagination, loading, error, search } =
  useKeywordSearch(config, baseUrl, searchConfig?);

search('term dates');     // first page
search('term dates', 2);  // page 2
```

| Returns | Description |
|---|---|
| `results` | `KeywordSearchHit[]`. Each hit's `card` has `title`, `description` (plain text), `snippet` (HTML with only `<mark>`, or `null`), `published` (ISO date), `image` and `siteName`. The hit also carries `url`, `canonicalUrl`, `rank`, `site` and more. |
| `pagination` | `{ page, pageIndex, totalPages, totalResults, hasPreviousPage, hasNextPage, … }` once a search succeeds, otherwise `null`. `page` is 1-based and `pageIndex` 0-based. `totalResults` is capped at 10,000; `totalIsCapped` says when. |
| `loading` | `true` while a search is in flight. |
| `error` | `{ code, message }`, or `null`. `code` is the API's error code, or `network_error`; `message` is for developers, not end users. |
| `search(term, page?, pageSize?)` | Runs a search. `page` is 1-based (default 1); `pageSize` defaults to 10. A newer search cancels an older one. |

## Types

Exported from the package root: `SearchConfig`, `AIMessage`, `Cta` and its
variants, `KeywordSearchHit`, `KeywordResultCard`, `KeywordHighlights`,
`KeywordPagination`, `KeywordSearchResponse`, `KeywordSearchError`, and each
component's props type.
