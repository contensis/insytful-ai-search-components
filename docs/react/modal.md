# The search modal

The modal is built from parts inside `InsytfulSearch.Root`. You choose which
parts to use and how to lay them out.

```tsx
<Theme>
  <InsytfulSearch.Root
    options={{ config: 'your-config', apiUrl: 'https://your-api.com' }}
    renderMarkdown={renderMarkdown}
  >
    <InsytfulSearch.Trigger>Search</InsytfulSearch.Trigger>
    <InsytfulSearch.Portal>
      <InsytfulSearch.Close />
      <InsytfulSearch.Title>How can we help?</InsytfulSearch.Title>
      <InsytfulSearch.Description>Ask a question in your own words.</InsytfulSearch.Description>
      <InsytfulSearch.Input />
      <InsytfulSearch.Suggestions items={['How do I apply?', 'Term dates']} />
      <InsytfulSearch.Messages disclaimer="AI generated answers may not always be accurate." />
    </InsytfulSearch.Portal>
  </InsytfulSearch.Root>
</Theme>
```

Each page load starts a fresh conversation.

## `Search.Root`

Holds the modal's state and the conversation. It renders no markup of its own,
so `Search.Trigger` can sit anywhere in your page inside it.

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `SearchConfig` | from `Provider` | [Connection options](../getting-started.md#connection-options). |
| `open` / `onOpenChange` | `boolean` / `(open) => void` | uncontrolled | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | Initial open state when uncontrolled. |
| `renderMarkdown` | `(md: string) => ReactNode` | plain text | Renders answers. See [Rendering answers](../getting-started.md#rendering-answers). |
| `logo` | `ReactNode` | — | Shown beside each answer, e.g. your assistant's avatar. |
| `onCtaClick` | `(cta) => void` | — | Called on every quick-action click. See [CTAs](../ctas.md). |
| `offsets` | `{ top?, left?, right? }` | measured | Insets for the modal, in px or any CSS length. `top` overrides the [sticky header](../sticky-headers.md) measurement. |
| `isDevMode` | `boolean` | `false` | Mocked API responses. |

Opening the modal locks page scrolling and traps focus inside it; closing
restores both, and returns focus to where it was.

## `Search.Portal`

The dialog itself, rendered on `document.body`. Put the modal's content inside
it.

| Prop | Type | Default | Description |
|---|---|---|---|
| `isolation` | `"shadow" \| "none"` | `"shadow"` | `"shadow"` keeps host CSS out; `"none"` lets your page stylesheet in. See [Modal isolation](../theming.md#modal-isolation). |

Hook classes: `insytful-search-dialog-outer` (carries `data-state`),
`insytful-search-dialog-inner`.

## `Search.Trigger`

A button that toggles the modal. Takes any `<button>` props.

- `asChild` — pass your own element as the only child and the trigger
  behaviour is merged onto it instead of rendering a `<button>`.

Calling `preventDefault()` in your `onClick` stops it toggling. It carries
`data-state="open|closed"` and `aria-expanded`, and has no hook class: style it
with your own `className`.

## `Search.Close`

A close button, with a ✕ icon by default. Takes any `<button>` props;
`aria-label` defaults to "Close search".

- `children` — replaces the icon.
- `asChild` — merges the close behaviour onto your own element.

Hook class: `insytful-search-close`. Variables: `--insytful-btn-close-*`.

## `Search.Title` and `Search.Description`

The modal's heading and intro text. They give the dialog its accessible name
and description, so include a `Title` even if you hide it visually.

- `Title` renders an `<h1>` with `insytful-search-empty-state-title`.
- `Description` renders a `<p>` with `insytful-search-empty-state-text`.

Both take `children` and `className`.

## Showing errors

`Search.Messages` doesn't render failed requests itself. Read the error from
the modal's context and show `ErrorCallout` (or your own):

```tsx
function ModalError() {
  const { error } = InsytfulSearch.useSearchContext('ModalError');
  return error ? <InsytfulSearch.ErrorCallout text="Please try again." /> : null;
}
```

`useSearchContext` must be called inside `Search.Root`. It also exposes
`messages`, `loading`, `open`, `onOpenChange` and `onSend(question)`, for
layouts that change once a conversation starts.
