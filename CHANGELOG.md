# Changelog

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
