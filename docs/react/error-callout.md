# `Search.ErrorCallout`

The library's error state: a title, a message and an optional action. It's
the default error for `Search.Overview` and `Search.Keyword`, and you can
render it anywhere else, e.g. [in the modal](./modal.md#showing-errors).

```tsx
<InsytfulSearch.ErrorCallout
  title="Something went wrong"
  text="We couldn't reach the search service. Please try again."
  cta={{ text: 'Visit the help centre', path: '/help' }}
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | "Something went wrong" | Heading. |
| `text` | `string` | "Failed to fetch" | Message. |
| `cta` | `{ text, path }` | — | A link below the message. Links starting `https://www` open in a new tab. |
| `onSwitchClassic` | `() => void` | — | Shows a "Try classic?" button instead of a link, e.g. to switch [modes](./modes.md). Ignored when `cta` is set. |

It renders with `role="alert"`, so screen readers announce it when it appears.

To customise the default in `Search.Overview` or `Search.Keyword`, return your
own `ErrorCallout` from their `renderError` prop.

## Customising

**Hook classes:** `insytful-search-error-callout-inner` (root), `-content`,
`-title`, `-text`, `-cta`, `-btn`, each prefixed
`insytful-search-error-callout`.

**Variables:** `--insytful-callout-error-*`.
