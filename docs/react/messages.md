# Messages

## `Search.Messages`

The conversation: each question, and each answer as it streams in. Must be
inside `Search.Root`.

```tsx
<InsytfulSearch.Messages
  feedback={{ report: { text: 'Report an error', href: '/report' } }}
  disclaimer="AI generated answers may not always be accurate."
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `feedback` | `SearchOverviewFeedback` | — | A report link and Helpful / Unhelpful vote under each finished answer. Answers the API didn't treat as substantive show the report link only. See [Feedback](./feedback.md). |
| `disclaimer` | `ReactNode` | — | Small print under each finished answer, below the feedback row. |
| `searching` | `{ from, to?, text }[]` | "Generating Response..." | Loading messages over time. `from` and `to` are milliseconds since the question was sent; `to` can be `"Infinity"`. A `...` in the text animates. |
| `children` | `ReactNode` | — | Rendered after the last message, inside the scroll area. |
| `className` | `string` | — | Added to the container. |

```tsx
searching={[
  { from: 0, to: 4000, text: 'Searching...' },
  { from: 4000, text: 'Still working on it...' },
]}
```

Answers render through `renderMarkdown` on `Search.Root`, and the logo from
`Search.Root`'s `logo` prop sits beside each one. [Quick actions](../ctas.md)
the API sends with an answer appear above it automatically.

When a follow-up is sent, the new question scrolls to the top of the
conversation, and an arrow button shows when more of the answer is below.

`Search.Messages` doesn't show failed requests; see
[Showing errors](./modal.md#showing-errors).

**Hook classes:**

- `insytful-search-messages-container`, `-container-scroll`, `-outer`,
  `-inner` (the list), `-hint` (the arrow button), each prefixed
  `insytful-search-messages`
- `insytful-search-message` (each message, with `data-role="user|assistant"`)
- `insytful-search-message-logo` (with `data-placement="aside|inline"`),
  `-content`, `-footer`, `-disclaimer`, each prefixed `insytful-search-message`

**Variables:** `--insytful-message-*`, `--insytful-scroll-hint-*`,
`--insytful-typing-indicator-text`, `--insytful-disclaimer-text`,
`--insytful-prose-*`, `--insytful-skeleton-*`.

## `Search.Disclaimer`

Small print you place yourself, e.g. fixed under the input.

```tsx
<InsytfulSearch.Disclaimer>AI generated answers may not always be accurate.</InsytfulSearch.Disclaimer>
```

Use either this or the `disclaimer` prop on `Search.Messages`, not both, or the
disclaimer shows twice.

Takes `children` and `className`. Hook class:
`insytful-search-disclaimer-inner`.
