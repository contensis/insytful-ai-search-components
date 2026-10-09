# Sticky headers and banners

Mark any sticky or fixed host chrome with `data-insytful-offset`:

```html
<header data-insytful-offset>…</header>
<div class="cookie-banner" data-insytful-offset>…</div>
```

The library sums the rendered heights of those elements and keeps the sum
live with a `ResizeObserver`, so breakpoints and banners that appear or
dismiss need no extra code. Both flavours use it:

- The modal (`Search.Root` / `<insytful-search>`) is pushed down by that
  height so it opens below the header.
- `Search.Overview` keeps a follow-up question clear of the header when it
  scrolls the question to the top of the page, leaving a 16px gap below it.

`data-insytful-modal-offset` still works as a deprecated alias and will be
removed in a future major version.

