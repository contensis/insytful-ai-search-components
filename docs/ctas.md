# Quick action CTAs (calls-to-action)

The Insytful AI Search API can send calls-to-action with an answer. They are
configured per site in the CMS and selected server-side per query. The
components render them as a "Quick actions" row above the answer, visible while
it streams.

| CTA type | Rendered as | Default behaviour |
|---|---|---|
| `link` | Anchor | Navigates to `cta.url` |
| `call` | Anchor | Opens `tel:` link |
| `email` | Anchor | Opens `mailto:` link |
| `event` | Button | Dispatches a CMS-named event on the shared event bus |

No setup is required for the defaults. The hooks below let you observe clicks,
override what a click does, or react to `event` CTAs.

## Observing clicks

**React**: pass `onCtaClick` to `Search.Root` (or `Search.Overview`). It
receives the full sanitized `Cta`:

```tsx
<InsytfulSearch.Root
  options={{ config: 'your-config', baseUrl: 'https://your-api.com' }}
  onCtaClick={(cta) => analytics.track('ai_search_cta_click', { type: cta.type, label: cta.label })}
>
```

**Web Component**: listen for the composed `insytful-cta-click` DOM event:

```js
document.querySelector('insytful-search')
  .addEventListener('insytful-cta-click', (e) => {
    console.log('CTA clicked:', e.detail); // the full Cta object
  });
```

Both fire on every CTA click and never cancel the action. They are
observability hooks, not interception points. To change what a click does,
register a handler override.

## Overriding execution

`registerCtaHandler(type, handler)` replaces the built-in action for one CTA
type and returns an unregister function that restores the previous behaviour:

```ts
// React / npm:
import { registerCtaHandler } from 'insytful-ai-search-components';

// Web Component / script tag:
const { registerCtaHandler } = window.InsytfulSearch;

const unregister = registerCtaHandler('link', (cta) => {
  myRouter.navigate(cta.url); // cta is narrowed to the "link" variant
});

// Later, restore the default (native navigation):
unregister();
```

The handler registry is shared across every component instance on the page,
and between the React and Web Component bundles when both are loaded. Register
once, not per instance.

## `event` CTAs and the event bus

`event` CTAs dispatch their CMS-configured event name on a shared `EventTarget`
at `window.insytfulAISearchEvents`. Subscribe using this guarded form, which
works whether your script runs before or after the package loads:

```html
<script>
  (window.insytfulAISearchEvents ??= new EventTarget()).addEventListener("openWebChat", (e) => {
    MyChatVendor.load().then(() => MyChatVendor.open(e.detail?.topic));
  });
</script>
```

Three related events, different transports:

| Event | Transport | When it fires | Use it for |
|---|---|---|---|
| `insytful-cta` | Bus (`window.insytfulAISearchEvents`) | Every CTA execution, click or programmatic. Detail is `{ name, cta }` | Analytics across all CTA types |
| `insytful-cta-click` | DOM event from `<insytful-search>` | User clicks a CTA in the Web Component. Detail is the `Cta` | Per-element tracking, host reactions such as closing the modal |
| CMS-named (e.g. `openWebChat`) | Bus (`window.insytfulAISearchEvents`) | An `event` CTA executes | Actually doing the thing |

Security notes:

- `e.detail` is CMS-authored data. Treat it as untrusted: never `innerHTML` it and never deep-merge it into configuration objects.
- Bus events can be forged by any script on the page. Make no security decisions based on them.
- The bus is same-realm only. Embedded iframes need `postMessage`.
- CTA `detail` payloads must never carry user-derived or personal data.

## Closing the modal from a CTA

The package never auto-closes the modal on a CTA click. Close it yourself in
your handler:

```tsx
// React, via onOpenChange state:
<InsytfulSearch.Root open={open} onOpenChange={setOpen}
  onCtaClick={(cta) => { if (cta.type === 'event') setOpen(false); }}>
```

```js
// Web Component:
const el = document.querySelector('insytful-search');
el.addEventListener('insytful-cta-click', (e) => {
  if (e.detail.type === 'event') el.close();
});
```

## `Search.Ctas` (React)

`Search.Messages` and `Search.Overview` render the quick-actions row for you.
For a custom layout, such as one built on the [hooks](./react/hooks.md), render
it yourself:

```tsx
<InsytfulSearch.Ctas ctas={answer.ctas} onCtaClick={track} />
```

| Prop | Type | Description |
|---|---|---|
| `ctas` | `Cta[]` | CTAs from the API. Nothing renders when empty. |
| `onCtaClick` | `(cta) => void` | Defaults to `Search.Root`'s, when inside one. |
| `className` | `string` | Added to the outer element, `insytful-search-cta-outer`. |

CTAs from the hooks are already sanitized. If you take them from anywhere else,
pass them through `sanitizeCtas` first.

## Styling CTAs

Hook classes: `insytful-search-cta-bar`, `insytful-search-cta-label`,
`insytful-search-cta-btn`. Each chip carries `data-intent="primary|secondary"`.
The `--insytful-cta-*` variables are listed under
[CSS variables](./css-variables.md#quick-actions-ctas).

