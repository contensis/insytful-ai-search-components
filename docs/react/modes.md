# Modes

Modes let one modal offer more than one kind of search, typically AI answers
and a classic search that goes to your existing results page.

```tsx
<InsytfulSearch.Root options={options}>
  <InsytfulSearch.Trigger>Search</InsytfulSearch.Trigger>
  <InsytfulSearch.Portal>
    <InsytfulSearch.Modes defaultValue="ai">
      <InsytfulSearch.ModeSwitch>
        {({ mode, onSwitch }) => (
          <div role="tablist">
            <button role="tab" aria-selected={mode === 'ai'} onClick={() => onSwitch('ai')}>Ask AI</button>
            <button role="tab" aria-selected={mode === 'classic'} onClick={() => onSwitch('classic')}>Search</button>
          </div>
        )}
      </InsytfulSearch.ModeSwitch>

      <InsytfulSearch.Mode name="ai">
        <InsytfulSearch.Input />
        <InsytfulSearch.Messages />
      </InsytfulSearch.Mode>

      <InsytfulSearch.Mode name="classic" path="/search?q=">
        <InsytfulSearch.Input />
      </InsytfulSearch.Mode>
    </InsytfulSearch.Modes>
  </InsytfulSearch.Portal>
</InsytfulSearch.Root>
```

## `Search.Modes`

Holds the active mode.

| Prop | Type | Default | Description |
|---|---|---|---|
| `defaultValue` | `string` | `"ai"` | Starting mode when uncontrolled. |
| `value` / `onValueChange` | `string` / `(mode) => void` | uncontrolled | Controlled mode. |

## `Search.Mode`

Renders its children only while its mode is active.

| Prop | Type | Description |
|---|---|---|
| `name` | `string` | The mode's identifier. Required. Name the AI mode `"ai"`: `Search.Input` treats every other name as classic. |
| `path` | `string` | Makes this a classic mode. Submitting closes the modal and goes to `path` with the encoded question appended, e.g. `/search?q=term+dates`. Must be on the same origin. |
| `onNavigate` | `(url: string) => void` | Navigates with your router instead of a full page load. |

## `Search.ModeSwitch`

Gives you the active `mode` and an `onSwitch(mode)` function as a render prop.
The tab markup and styling are yours; the library doesn't ship any for React.
(The Web Component draws its own tabs, styled by the `--insytful-mode-*`
[variables](../css-variables.md#mode-tabs-web-component-only).)
