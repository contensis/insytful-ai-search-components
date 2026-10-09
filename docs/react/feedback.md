# Feedback

`feedback` on [`Search.Overview`](./overview.md) and
[`Search.Messages`](./messages.md) adds a report link and Helpful / Unhelpful
vote under each finished answer. Both take the same object:

```tsx
feedback={{
  report: { text: 'Report an error', href: '/report', newTab: true },
  onVote: (vote, { mid }) => analytics.track('ai_vote', { vote, mid }),
}}
```

| Option | Type | Description |
|---|---|---|
| `report` | `{ text, href, newTab? }` | Optional link before the vote buttons. `newTab` opens it in a new tab and adds screen-reader text saying so. |
| `onVote` | `(vote, { mid }) => void` | Called after the API accepts a vote, with `"helpful"`, `"unhelpful"` or `null` (retracted) and the answer's `mid`. For your analytics; the components send the vote themselves. |
| `helpful` / `unhelpful` | `ReactNode` | Button contents. Default to thumb icons with visually hidden labels. |
| `thanks` | `ReactNode` | Announced to screen readers once a vote is cast. Defaults to "Thanks for your feedback". |

Clicking the other button changes the vote; clicking the pressed one retracts
it. If the vote window has closed, or the answer can't be voted on, the buttons
are hidden for that answer. Answers the API didn't treat as substantive show
the report link only.

## Customising

**Hook classes:** `insytful-search-overview-feedback` (the row), `-report`,
`-votes`, `-vote`, `-status`, each prefixed
`insytful-search-overview-feedback`. The same classes are used in the modal.

**Variables:** `--insytful-feedback-vote-bg-hover`,
`--insytful-message-footer-border`.
