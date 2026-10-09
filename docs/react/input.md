# Input and suggestions

## `Search.Input`

The question box: a textarea and a send button. Enter sends; Shift+Enter adds a
new line.

```tsx
<InsytfulSearch.Input placeholder="Type your question here..." />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | "Ask a question" ("Search" in classic mode) | Placeholder text. |
| `embedded` | `boolean` | `false` | Drops the input's own border, focus ring and AI glow, for use inside a card of your own. |
| `onSubmit` | `(question: string) => void` | sends to the modal | Handles the question yourself instead, e.g. to navigate or open the modal. Required outside `Search.Root`. |
| `disabled` | `boolean` | `false` | Only used outside `Search.Root`; inside it, the input is disabled while an answer loads. |
| `className` | `string` | — | Added to the form. |

Inside [`Search.Modes`](./modes.md) the input follows the active mode: a
sparkle icon and glow in AI mode, a search icon in classic mode.

**Hook classes:** `insytful-search-message-input` (the form), `-icon`, `-bg`,
`-glow`, `-textarea`, `-btn` (each prefixed `insytful-search-message-input`).

**State attributes on the form:** `data-mode="ai|classic"`, `data-embedded`,
`data-has-messages` (once a conversation has started).

**Variables:** `--insytful-input-card-*`, `--insytful-btn-icon-search-*`,
`--insytful-semantic-search-field-*`.

## `Search.Suggestions`

Starter questions shown as buttons. Clicking one sends it as a question. Must
be inside `Search.Root`.

```tsx
<InsytfulSearch.Suggestions
  items={['Where can I find term dates?', 'How do I apply?']}
  position="below"
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `string[]` | — | The questions. Nothing renders when empty. |
| `position` | `"above" \| "below"` | `"above"` | Where they sit relative to the input. `"below"` reorders them within the dialog's column layout. |
| `className` | `string` | — | Added to the outer element. |

Suggestions don't hide themselves once a conversation starts. Render them
conditionally on `useSearchContext().messages.length` if you want that.

**Hook classes:** `insytful-search-suggestions-outer` (carries
`data-position`), `-inner`, `-item`, `-item-btn` (each prefixed
`insytful-search-suggestions`).

**Variables:** `--insytful-btn-prompt-*`.
