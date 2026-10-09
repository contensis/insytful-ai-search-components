# `Search.Overview`

A standalone AI answer for a search term, usually shown above your search
results. It doesn't need `Search.Root` or a modal.

```tsx
<InsytfulSearch.Overview
  term={searchTerm}
  options={{ config: 'your-config', apiUrl: 'https://your-api.com' }}
  renderMarkdown={renderMarkdown}
  feedback={{ report: { text: 'Report an error', href: '/report' } }}
  disclaimer="AI generated answers may not always be accurate."
/>
```

A collapsed answer shows as a teaser with a Show more button; expanding it
reveals the rest.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `term` | `string` | — | The question. Required. A new term starts a new answer. |
| `options` | `SearchConfig` | from `Provider` | [Connection options](../getting-started.md#connection-options). |
| `renderMarkdown` | `(md: string) => ReactNode` | — | Renders the answer. Without it, no answer text shows. |
| `type` | `"keyword" \| "conversational"` | `"keyword"` | See [Types](#types). |
| `expanded` / `onExpandedChange` | `boolean` / `(expanded) => void` | uncontrolled | Controlled expansion, for when the host owns the state (e.g. per tab). |
| `collapsible` | `"auto" \| boolean` | `"auto"` | `"auto"` clips a collapsed answer only when it's taller than the teaser; `true` always does; `false` never does. Loading and errors are never clipped. |
| `reserve` | `boolean \| number` | `true` | Holds the teaser's height from the first frame, so the page below doesn't jump as the answer streams in. `true` reserves 220px; a number sets the height in px; `false` sizes to the content. |
| `heading` | `string` | "AI Overview" | Heading text. |
| `hLevel` | `number` | `2` | Heading level. |
| `icon` | `ReactNode` | — | Shown before the heading. |
| `feedback` | `SearchOverviewFeedback` | — | See [Feedback](./feedback.md). |
| `disclaimer` | `ReactNode` | — | Small print under the answer, below the feedback row. |
| `renderError` | `(error: string) => ReactNode` | `ErrorCallout` | Your own error state, given the error message. The default shows a general message, since the API's can be technical. |
| `renderEmpty` | `() => ReactNode` | nothing | Shown when the answer finishes with no text. An empty answer doesn't hold the teaser's space or show the disclaimer. |
| `searching` | `{ from, to?, text }[]` | — | Timed loading messages, as on [`Search.Messages`](./messages.md). |
| `placeholder` | `string` | — | Follow-up input placeholder (conversational only). |
| `onCtaClick` | `(cta) => void` | — | Called on every quick-action click. See [CTAs](../ctas.md). |
| `isDevMode` | `boolean` | `false` | Mocked API responses. |
| `className`, `style` | | — | Added to the root. |

## Types

- **`"keyword"`** — a single answer behind Show more.
- **`"conversational"`** — expanding reveals a follow-up input. Each follow-up
  renders beneath the first answer, with its own feedback and disclaimer, and
  scrolls to the top of the page clear of any
  [sticky header](../sticky-headers.md).

## Feedback

The feedback row sits under the answer, and under each follow-up in
`"conversational"` mode. Each answer is voted on separately. The row is hidden
while the answer is collapsed.

## Customising

**State attributes on the root:** `data-overflowing`, `data-expanded`,
`data-conversational`, `data-error`, `data-empty`.

**Hook classes:** `insytful-search-overview` (root), then `-body`, `-heading`,
`-icon`, `-content`, `-footer`, `-disclaimer`, `-error`, `-fade`, `-show-more`,
`-followups`, `-thread`, `-input`, each prefixed `insytful-search-overview`.
Follow-ups reuse the modal's `insytful-search-message*` classes.

**Variables:** `--insytful-overview-*`, `--insytful-btn-show-more-*`,
`--insytful-prose-*`. The teaser height is set on the root as
`--insytful-overview-collapsed-height`.
