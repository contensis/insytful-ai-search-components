# Changelog

## 4.3.0 — 2026-09-30

### Added

- **`Search.Overview` accepts `reserve`** (`boolean | number`, default `true`). While the Overview is collapsed it takes up the teaser's full height from the first frame, so the page below doesn't jump while the answer loads and streams. `true` uses the default 220px teaser. A number (px) sets the teaser height as well, which also changes the clip height and the overflow threshold. `false` sizes the Overview to its content, as before. The height is set on the root as `--insytful-overview-collapsed-height`. An errored Overview doesn't reserve space.
- **Answer-shaped loading skeleton for the Overview.** While `reserve` is on, the first answer's skeleton is an intro, a divider and bulleted items, and it fills the reserved box and clips the overflow. It has no visible "Generating response…" text; loading is still announced through the Overview's status region. `SearchSkeletonBody` takes an optional `items` count for this layout. Without it, you get the three-bar skeleton as before. New hook classes: `insytful-search-skeleton-fill`, `-skeleton-intro`, `-skeleton-divider`, `-skeleton-list`, `-skeleton-item`.
- New state attributes on the Overview root: `data-loading` (first answer requested, nothing streamed yet) and `data-streaming` (first answer streaming in).

### Changed

- **The Overview's default teaser is 220px** (was 400px), and **it reserves that height by default**. With a short answer, the collapsed Overview now leaves white space under it. Pass `reserve={false}` to size it to its content; the teaser still clips at 220px.
- **The modal's `<Search.Disclaimer>` is hidden while the latest answer has failed**, because there's no answer for it to describe. In React it comes back when the error callout goes. In the Web Component, failed answers stay in the thread, so it's hidden while the last message is an error and comes back with the next question.
- **Feedback votes use `aria-disabled` rather than `disabled` while a vote is being sent**, so the pressed button keeps focus. The `-feedback-vote` dimmed style now keys off `[aria-disabled="true"]`.
- When a 400/404 hides the vote buttons, the status now says "Feedback isn't available for this answer".

### Fixed

- **Web Component modal: the loading skeleton filled the message width again on narrow screens** (below 768px). It had shrunk to the width of its "Generating response…" text. On narrow screens, message content now fills the row beside the inline logo in both React and the Web Component, and can't push wider than the modal.
- **Focus isn't lost when a 400/404 removes the vote buttons.** It moves to the report link, or to the feedback row if there isn't one.
- An `onVote` callback that throws no longer causes an unhandled rejection. The error is logged and the vote still stands.
- A collapsed Overview with `feedback` but no `disclaimer` no longer renders an empty bordered footer.

## 4.2.0 — 2026-09-24

### Added

- **Answer feedback for `Search.Overview` and `Search.Messages`.** A new `feedback` prop adds a row under each finished answer. The row has an optional report link and Helpful / Unhelpful buttons, and votes go to the AI Search vote API (`PUT` / `DELETE` `/sessions/:config/:sid/:mid/vote`). Clicking the other button changes the vote and clicking the pressed one retracts it. The UI updates straight away and rolls back if the request fails. A 400/404 (not eligible, or past the 7-day window) hides the buttons for that answer. Answers the API didn't treat as substantive (no `mid` in the `done` frame) show only the report link. Options: `report` (`{ text, href, newTab? }`), `onVote(vote, { mid })` for host analytics, `helpful` / `unhelpful` button contents, and `thanks` for the screen-reader announcement. In the conversational Overview and the modal, each answer and follow-up gets its own row and votes on its own `mid`. Votes are kept when the Overview collapses and re-expands. `SearchOverviewFeedback` and `SearchOverviewVote` are exported from the package root. React only; the Web Component doesn't have it yet.
- **`Search.Messages` accepts `disclaimer`**, shown under each finished answer below the feedback row. Use it instead of `<Search.Disclaimer>`, not alongside it.
- New hook classes: `insytful-search-overview-footer`, `insytful-search-message-footer`, `insytful-search-message-disclaimer`, and the feedback row's `insytful-search-overview-feedback`, `-feedback-report`, `-feedback-votes`, `-feedback-vote[data-vote]`, `-feedback-status`. New token: `--insytful-message-footer-border`.
- **Opt-in debug logging.** `localStorage.setItem("insytful:debug", "1")` (kept across reloads) or `window.INSYTFUL_DEBUG = true` (this page only) logs answer ids and vote requests with `console.debug`, prefixed `[Insytful:…]`. Enable the console's Verbose level to see them.
- `RAGMessage` has optional `mid` and `sid`, set on assistant messages from the `done` frame and the `X-Session-Id` header. `useRAGResponse` returns `answerIds` (`{ sid, mid } | null`).

### Changed

- **`Search.Overview`'s `disclaimer` has moved into a footer under the answer**, below the feedback row and above a divider. It used to be at the very end of the Overview. It now waits until the answer has finished, is clipped with the answer while collapsed, and isn't shown when the answer errors. In `"conversational"` mode it also appears under each follow-up.

### Fixed

- **A superseded keyword `Search.Overview` request no longer touches the newer answer.** `useRAGResponse` now aborts the previous request when `ask()` is called again or the component unmounts, as `useRAGConversation` already did. A slow earlier stream could previously append its text to the new answer, and now also set its `mid`, so a vote would have gone to the wrong answer.

## 4.0.0 — 2026-09-10

### Migrating from 3.x

Props, attributes, slots, methods, events and `--insytful-*` tokens are unchanged. The breaking changes are all in how the components are styled.

**React**

1. **Wrap in `<Theme>`.** Styled components need a `<Theme>` ancestor. Put it around `Search.Root` (or your whole app). `Search.Overview` needs one too. Keep the `style.css` import.
2. **`theme` prop moved.** `Search.Root`'s `theme` string prop is now `css` on `<Theme>`: `<Theme css={myCss}>`.
3. **`.insytful-root` → `.insytful-theme`** in token-override selectors.
4. **Hook classes replaced by state attributes:** `insytful-search-message-logo-aside` / `-inline` → `[data-placement="aside|inline"]`; `insytful-search-cta-btn-primary` / `-secondary` → `[data-intent="primary|secondary"]`.

**Web Component**

The element now ships the same stylesheet as the React `<Theme>`, so its default look changes to match (see "Changed (Web Component)" below). If your `theme` CSS targets the old markup:

1. **`.insytful-root` → `.insytful-theme`** for token overrides. `.insytful-root` still works as a deprecated alias until 5.0.
2. **Removed classes:** `insytful-search-input-card` (the textarea itself now carries the border and radius tokens); `insytful-search-dialog-open` / `-closed` (use `[data-state="open|closed"]`); `insytful-search-mode-tab-active` (use `.insytful-search-mode-tab[data-active]`).
3. **State is on `data-*` attributes**, same as React: `data-mode` / `data-has-messages` on the `<form>`, `data-placement` on avatars, `data-position` on suggestions, `data-intent` on CTA chips, `data-scroll-hint` on the messages scroller.
4. **Drop any `!important`** you added to beat the old sheet. The shipped rules weigh a single hook class, and `theme` CSS is applied after them, so a rule written against the hook class (`.insytful-search-x { … }`) wins.

### Changed (React — breaking)

- **New styling approach: unstyled primitives plus an opt-in `<Theme>`.** In line with the pattern used by most modern UI libraries, every component now renders as an unstyled primitive; wrapping them in the new `<Theme>` component opts them in to the shipped look. Without `<Theme>` they render only their `insytful-search-*` hook classes and `data-*` state attributes for you to style.
- **Tailwind removed from the library.** The stylesheet is now plain, hand-written CSS: one file per component next to its `.tsx` in `lib/search/`, with cross-cutting tokens, reset, prose and keyframes in `lib/styles/`. The published `style.css` no longer contains any unprefixed utility classes (`.flex`, `.container`, `.sr-only`, …), so it can't collide with a host page's classes.
- **All shipped rules are scoped under `.insytful-theme` and built at low specificity.** Every ancestor compound is wrapped in `:where()`, so each rule weighs only its final hook class (e.g. `:where(.insytful-theme .insytful-search-message-input[data-embedded]) .insytful-search-message-input-textarea`). A consumer override against the hook class ties and wins on source order, so no `!important` is needed; a host universal reset (`* { margin: 0; padding: 0 }`) or bare element rule can't strip the components' layout. (An earlier 4.0 build used `@layer` instead, which lost to every unlayered host rule including such resets.)
- **`.insytful-root` → `.insytful-theme`** for token overrides in React.
- **`Search.Root`'s `theme` prop moved to `<Theme css>`.**
- **Removed hook classes** in favour of state attributes: `insytful-search-message-logo-aside` / `-inline` → `data-placement="aside|inline"` on `insytful-search-message-logo`; `insytful-search-cta-btn-primary` / `-secondary` → `data-intent="primary|secondary"` on `insytful-search-cta-btn`. The Web Component keeps the old CTA classes.
- **Default type scale tuned for the modal's empty state.** `Search.Title` is now 24px/32px → 42px/1.2 at 768px (was 56px/64px) with an 8px/16px bottom margin; `Search.Description` is 16px/1.2 → 18px (was 14px/24px → 20px/32px). Answer text in the modal is 16px → 18px at 768px (was 20px); prose headings scale from it. The input textarea has an explicit 16px font size, the dialog gets 24px bottom padding, the error callout is capped at `--insytful-modal-max-width` and centred, and prose `h5`/`h6` are now styled. All of it sits in the `insytful` layer, so any unlayered consumer rule still wins.
- Tailwind Preflight is no longer injected into the Shadow DOM. A minimal reset scoped to the library's own elements ships in both the modal and the light-DOM `Search.Overview`, so the two now render identically.

### Changed (Web Component)

- **The Web Component now ships the same stylesheet as `<Theme>`.** Its own Tailwind-built sheet is gone; the shadow root receives `lib/styles/index.css`, so the modal looks identical in both flavours and picks up every default-look change above (type scale, input, spacing). That sheet is built at low specificity and the `theme` attribute CSS is appended after it, so a `theme` rule against a hook class overrides the default without `!important` — the `theme` attribute is the Web Component's `<Theme css>`.
- **Markup aligned with the React components.** The dialog no longer wraps the input in an `insytful-search-input-card` (the textarea carries the border, as in React), the empty-state, input and disclaimer wrappers are gone, and the messages, scroll hint and answer wrapper carry the same hook classes as React (`insytful-search-messages-container`, `-messages-hint`, `-message-content-inner`, `-message-input-glow`). Removed classes: `insytful-search-input-card`, `insytful-search-dialog-open` / `-closed` (use `data-state="open|closed"`). State is now exposed the React way: `data-state` on the dialog, `data-mode` / `data-has-messages` on the `<form>`, `data-placement` on avatars, `data-position` on suggestions and CTA icons, `data-intent` on CTA chips, `data-scroll-hint` on the scroller. Slotted `title` / `description` / `disclaimer` content inherits its font from the styled wrapper instead of carrying fixed sizes.
- Classic mode now swaps the leading icon to a magnifier and drops the AI glow, matching `Search.Input`.
- Storybook: `Web Component/Modal` stories rebuilt against the shared sheet, with `DefaultState` (open on load) and `ErrorState` (stubbed 500, opens with a query); the React `Modal` and `Overview` error stories open with a query the same way.
- **Mode switch tabs** are styled by the new `lib/search/search-modes.css` (hook classes `insytful-search-mode-switch`, `-tabs`, `-tab`; active tab has `data-active` and `aria-pressed`), with `--insytful-mode-switch-bg`, `--insytful-mode-switch-radius`, `--insytful-mode-tab-text`, `--insytful-mode-tab-active-bg`, `--insytful-mode-tab-active-text` tokens. The old `insytful-search-mode-tab-active` class is gone.
- **Token overrides now target `.insytful-theme`**, matching the React components. `.insytful-root` remains on the same element as a deprecated alias and will be removed in 5.0. Update `theme` attribute CSS from `.insytful-root { … }` to `.insytful-theme { … }`.

### Fixed

- **`Search.Overview` never clips before there is an answer.** With `collapsible={true}` the body was pinned to the teaser height while the skeleton was showing; it now renders at natural height until the first tokens arrive.
- **`Search.Overview` keeps its overflow measurement live.** It was measured once per response change, so a webfont swap, CTA chips arriving or a viewport resize after the last token could leave a long answer rendered full height with no Show more. It now re-measures on expand/collapse and observes the content with a `ResizeObserver`.
- **The input's leading icon is vertically centred** with the same transform the send button uses, instead of fixed pixel offsets that drifted when the textarea height differed from the design value. It also ignores pointer events so clicks land in the textarea.
- **Host universal resets no longer strip the components' spacing.** `Search.Overview` renders in the light DOM, where a site's `* { margin: 0; padding: 0 }` used to beat the layered sheet and collapse the follow-up input, Show more button and CTA chips. The sheet is now built at low specificity instead of in a cascade layer (see "Changed (React)").
- **Importing `style.css` no longer restyles the host document.** The token block used to be selected on `:root` as well as `.insytful-root`, which set `font-family`, `font-size` and `line-height` on the consumer's `<html>` element.
- Story-only Tailwind utilities are no longer emitted into the published stylesheet.

### Added

- `Search.Overview` accepts `disclaimer` for small print under the answer. `SearchOverviewProp` and `SearchOverviewType` are exported from the package root.
- **`data-insytful-offset`** marks sticky host chrome (header, banners) for both flavours. `Search.Root` and `<insytful-search>` already summed such elements' heights to push the modal down; `Search.Overview` now uses the same measurement, kept live with a `ResizeObserver`, to keep a follow-up question clear of the header when scrolling it to the top of the page. A 16px gap is left below that height. The old `data-insytful-modal-offset` name remains a deprecated alias until 5.0.
- `Search.Overview` accepts `expanded` / `onExpandedChange` for controlled expansion. Leave them off to keep the built-in Show more behaviour; pass them when the host owns the state (e.g. tracking expansion per tab).
- `Search.Overview` accepts `collapsible` (`"auto"` | `true` | `false`, default `"auto"`). `"auto"` clips a collapsed answer behind Show more only when it overflows the teaser height; `true` always does, so a results tab has a way into the AI view even for a short answer; `false` never clips.
- `Search.Input` works outside `Search.Root`: with no Root ancestor it submits via `onSubmit` only, and a new `disabled` prop replaces the context's loading state. `Search.Overview` uses it for follow-up questions.
- **`Search.Overview`** — a standalone AI answer for the light DOM, e.g. above search results, with no `Search.Root` or modal required. Streams its answer and quick-action CTAs, collapses long answers behind a "Show more" toggle, and renders an inline error callout if the request fails. Props: `term`, `options`, `renderMarkdown`, `heading`, `hLevel`, `icon`, `searching`, `error` (callout copy overrides), `onCtaClick`, `isDevMode`, `className`, `style`. Styled by `<Theme>` and `style.css`; exposes `data-overflowing`, `data-expanded` and `data-error`.
- `<Theme>` with a `css` prop; `useThemeContext()` for advanced consumers.
- `Search.Portal isolation="shadow" | "none"`. `"shadow"` (default) keeps the current Shadow DOM boundary; `"none"` renders into a plain light-DOM element so your stylesheet reaches the dialog.
- State attributes, emitted by both the React components and the Web Component: `data-state` on the dialog; `data-mode`, `data-embedded`, `data-has-messages` on `Search.Input`; `data-intent` on CTA chips; `data-placement` on message logos; `data-position` on suggestions and CTA icons; `data-scroll-hint` on the messages scroller; `data-overflowing` / `data-expanded` on `Search.Overview`.
- `--insytful-z-index`, `--insytful-overview-bg`, `--insytful-overview-border` and `--insytful-mode-*` tokens.
- Accessibility: the error callout now has `role="alert"`; the CTA bar is a `role="group"` labelled by its heading via `aria-labelledby`. `Search.Overview` announces its loading message and a one-shot "ready" through a visually-hidden `role="status"` region, its "Show more" button is a persistent toggle ("Show less" when open) with `aria-expanded` and `aria-controls`, and keyboard focus landing inside the collapsed answer expands it so no content is reachable but hidden.

## 3.2.0 — 2026-08-13

### Changed

- **`query-collection` requests are now `POST` with a JSON body**, following the AI Search API's move off `GET`. Every parameter (`question`, `config`, `history`, `stream`, `sections`) moved from the query string into the body, sent with `Content-Type: application/json`. This removes the URL length ceiling that previously capped how long a question could be.

  **This release requires an AI Search API that accepts `POST` on `/query-collection`.** No consumer code changes: the components, hooks, props, and `RAGClient.ask()` signature are all unchanged — only the request this library makes on your behalf. Script-tag consumers pinned to `…@3/dist/insytful-search.js` pick this up automatically.

  Applies to all three request paths: `useRAGConversation`, `useRAGResponse`, and the Web Component's `RAGClient`.

- Session and reCAPTCHA behaviour is unchanged — `X-Session-Id` is still read from and written back to `localStorage`, and `X-Recaptcha-Token` is still sent when a site key is configured. Both are enforced on `POST` server-side.

### Notes

- Streaming was unaffected. This library has never used `EventSource` (which cannot issue `POST`); `readSSEFrames` already parsed SSE off `fetch` + `ReadableStream`, including cross-chunk frame buffering, per-frame `event:` scoping, and `:` keepalive comments.
- Cross-origin deployments should expect a CORS preflight (`OPTIONS`) on each request, which the API allows.

## 3.1.0 — 2026-08-03

### Removed

- **The `widget` portal variant.** `Search.Root`'s `variant` prop and the `--insytful-widget-*` CSS variables are gone; the search UI is always the full-bleed modal, which locks body scroll while open. Consumers passing `variant="modal"` can drop the prop; consumers passing `variant="widget"` have no replacement.

## 3.0.1 — 2026-07-16

### Fixed

- **Web Component: CTAs never rendered.** `RAGClient` passed the whole `{"ctas":[...]}` frame payload to the sanitizer instead of the array, dropping every CTA. Wire-shape parsing now lives in one shared `ctasFromFrameData()` used by both flavours.
- Storybook WC story no longer calls `open()` before the custom element upgrades.

## 3.0.0 (2026-07-15)

### Breaking

- `RAGClient.ask()` (reachable on the Web Component via `element.ragClient`) now yields `RAGStreamEvent` objects instead of answer-text strings:

  ```js
  // Before (2.x)
  for await (const chunk of client.ask(q)) answer += chunk;

  // After (3.x)
  for await (const ev of client.ask(q)) {
    if (ev.kind === "token") answer += ev.content;
  }
  ```

  Consumers that never touch `ragClient` are unaffected. Script-tag consumers should pin a major-versioned unpkg URL (`…/insytful-ai-search-components@3/dist/insytful-search.js`).

### Added

- **Quick action CTAs**: CMS-configured, server-selected calls-to-action (`link` / `call` / `email` / `event`) rendered as an accessible, themable "Quick actions" row above streaming answers, in both the React components and the Web Component. `link`/`call`/`email` render as real anchors with normalized hrefs; `event` dispatches a CMS-named event on the shared bus.
- New exports (React entry): `sanitizeCtas`, `registerCtaHandler`, `executeCta`, `getInsytfulAISearchEvents`, `InsytfulSearch.Ctas`; types `Cta`, `CtaIntent`, `CtaCall`, `CtaEmail`, `CtaLink`, `CtaEvent`, `CtaHandlerMap`, `SearchCtasProps`, `RAGMessage.ctas?`.
- New exports (Web Component entry / `window.InsytfulSearch`): `registerCtaHandler`, `executeCta`; type `RAGStreamEvent`.
- New prop: `onCtaClick` on `Search.Root`.
- New events: `insytful-cta-click` (composed DOM event from `<insytful-search>`, fired on user clicks), `insytful-cta` (generic observability event on the bus, fired on every execution), plus CMS-named events for `event`-type CTAs on the bus. `insytful-message` detail now includes `ctas`.
- New global: `window.insytfulAISearchEvents` (shared `EventTarget` bus, created lazily with the guarded `??=` pattern).
- New CSS tokens: `--insytful-cta-*` (bar gap, radius, label text, primary/secondary bg/text/border) and hook classes `insytful-search-cta-bar` / `-label` / `-btn` / `-btn-primary` / `-btn-secondary`, in both CSS bundles.
- Shared spec-compliant SSE decoder (`readSSEFrames`) adopted by all three stream consumers; fixes dropped named-event frames, CRLF/lone-CR handling, split multibyte chunks, and the final unterminated frame.
- Dev-mode mocks and Storybook stories now exercise the full CTA bar (all four types, including a stream-error-after-CTAs story).

### Dependencies

- Added `eventsource-parser` (^3.1.0, ~1 kB gzip) for SSE parsing.
