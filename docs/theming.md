# Theming

## How it works

There are three levels of control:

1. **Default look** — import `insytful-ai-search-components/style.css` and wrap
   the components in `<Theme>`.
2. **CSS variables** — override the `--insytful-*` variables on
   `.insytful-theme` to change colours, radii, sizes and motion. See
   [CSS variables](./css-variables.md).
3. **Hook classes** — target the `insytful-search-*` classes and `data-*` state
   attributes for anything the variables don't cover.

Or go **unstyled**: leave out `<Theme>` and the stylesheet. Components still
render their hook classes and state attributes for you to style from scratch.

Every shipped rule is scoped under `.insytful-theme` and is only as specific as
a single class. A rule of yours against a hook class (`.insytful-search-x`)
wins because it comes later, with no `!important`. Host resets such as
`* { padding: 0 }` can't strip the components' layout.

## `<Theme>`

```tsx
<Theme css={`.insytful-theme { --insytful-brand-primary: #5128c3; }`}>
  …
</Theme>
```

- `css` — raw CSS added after the library's. It also reaches inside the modal's
  Shadow DOM, which your page stylesheet can't.
- Other `div` props (`className`, `style`, `data-*`) go on the wrapper element.

For the Web Component, pass the same CSS in the `theme` attribute.

## Modal isolation

`Search.Portal` renders the modal on `document.body`. Its `isolation` prop sets
how far the host page's CSS can reach it:

- `"shadow"` (default) — the modal renders in a Shadow DOM, so host CSS can't
  break it. Restyle it with `<Theme css>`.
- `"none"` — the modal renders in the light DOM and your page stylesheet
  applies. Use it for unstyled or heavily customised modals, and import the
  stylesheet yourself when themed.

`Search.Overview` and `Search.Keyword` always render in the light DOM, so your
page stylesheet reaches them either way.

## Dark mode

No dark theme ships. Override the variables under a media query, or under a
class of your own:

```css
@media (prefers-color-scheme: dark) {
  .insytful-theme {
    --insytful-modal-bg: #1b1d21;
    --insytful-text-default: #e8e8e8;
    --insytful-text-muted: #a0a0a0;
    /* …and the surface, border and answer-text variables */
  }
}
```

## Hook classes and state attributes

Each component's root class and state attributes. The component pages list
the classes inside each one.

| Component | Root class | State attributes |
|---|---|---|
| `Portal` | `insytful-search-dialog-outer` | `data-state="open\|closed"` |
| `Trigger` | none (pass `className`) | `data-state="open\|closed"`, `aria-expanded` |
| `Close` | `insytful-search-close` | |
| `Title` | `insytful-search-empty-state-title` | |
| `Description` | `insytful-search-empty-state-text` | |
| `Input` | `insytful-search-message-input` | `data-mode="ai\|classic"`, `data-embedded`, `data-has-messages` |
| `Suggestions` | `insytful-search-suggestions-outer` | `data-position="above\|below"` |
| `Messages` | `insytful-search-messages-container` | each message: `data-role="user\|assistant"` |
| `Disclaimer` | `insytful-search-disclaimer-inner` | |
| `Ctas` | `insytful-search-cta-outer` | each chip: `data-intent="primary\|secondary"` |
| `Overview` | `insytful-search-overview` | `data-overflowing`, `data-expanded`, `data-conversational`, `data-error`, `data-empty` |
| `Keyword` | `insytful-search-keyword` | `data-loading`, `data-error`, `data-empty`; each card: `data-has-image`; pagination items: `data-active`, `data-direction`, `data-ellipsis` |
| `ErrorCallout` | `insytful-search-error-callout-inner` | |

Every component except `Portal` and `ErrorCallout` accepts `className`.
`Overview` also accepts `style`.
