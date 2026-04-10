---
date: 2026-04-10
topic: web-component-non-react
---

# Web Component for Non-React Sites

## Problem Frame

The insytful AI search library is currently React-only. Sites built without React — particularly CMS-rendered pages — cannot use it. This limits adoption to React projects, excluding the majority of the web. A framework-agnostic delivery option would make the library usable on any HTML page via a single script tag.

## Requirements

**Distribution**
- R1. Ship a standalone JS file (`insytful-search.js`) that bundles all its own dependencies (RAG client, focus trap, CSS) — no React, no peer deps, no npm install required by the consumer
- R2. The file must be loadable via a `<script>` tag in any HTML page — static sites, CMS pages, or pages that are server-rendered but run JS client-side
- R3. Also installable via npm for consumers who use a build step

**Custom Element API**
- R4. Register a `<insytful-search>` custom element that CMS authors use declaratively in HTML
- R5. Configure via HTML attributes: `api-uri`, `project-id`, `sections`, `dev-mode`. Bounded to props that can be expressed as string attributes (not function/node props like `renderMarkdown` or `logo`)
- R6. Support named slots for static content areas: `trigger`, `title`, `description`, `disclaimer`, and `logo`
- R7. Support suggestion chips via repeated child elements (e.g. `<insytful-suggestion>`)
- R8. Support mode switching (AI / classic search) via child elements that declare available modes and their configuration (e.g. `<insytful-mode name="classic" path="/search?term=">`)
- R9. Emit custom DOM events for key interactions (search submitted, message received, dialog opened/closed) so consumers can hook into behavior without a framework

**Rendering and Style**
- R10. Render the dialog UI inside Shadow DOM, matching the existing React library's isolation approach
- R11. Inject the same base CSS and support the same CSS custom properties for theming
- R12. Support an optional `theme` attribute or slot for injecting additional CSS into the Shadow DOM (matching the React library's theme CSS injection)

**Markdown and Content Rendering**
- R13. Bundle a lightweight markdown parser so AI responses render as formatted HTML by default, matching the visual output of the React version
- R14. Expose an optional JS property (`renderMarkdown` callback on the element) to let consumers override the default parser with a custom one

**Behavioral Parity**
- R15. Integrate with the Contensis RAG API using a standalone vanilla JS client — a new, independent implementation based on the same fetch/SSE protocol as `contensis-rag-react`, not a shared module with the React library
- R16. Stream AI responses with the same chunked rendering behavior as the React version
- R17. Implement focus trapping and keyboard navigation (Escape to close, focus return) matching the React library's accessibility behavior. Must handle focus trapping across the Shadow DOM boundary (trigger in light DOM, dialog in shadow DOM)
- R18. Measure and respect `data-insytful-modal-offset` elements for dynamic top offset, matching the React library's sticky header accommodation
- R19. Support `prefers-reduced-motion` for transitions and animations

**Coexistence with React Library**
- R20. The existing React compound component library remains unchanged — this is a new, parallel output from the same repo
- R21. Both outputs (React package + standalone Web Component) are built from the same repository

## Success Criteria

- A CMS author can add AI search to a non-React page using only a `<script>` tag and an `<insytful-search>` element with no build tooling
- All static content areas (title, description, disclaimer, trigger, logo, suggestions) are customizable via slots or child elements
- The visual appearance and interaction behavior is functionally equivalent between the React and Web Component versions (same UI, same streaming behavior, same accessibility) — differences caused by Shadow DOM CSS isolation are acceptable
- The standalone JS file bundles all its own dependencies and requires no external scripts to function (reCAPTCHA excluded — see scope boundaries)

## Scope Boundaries

- The React compound component library is not refactored or changed
- No Vue, Svelte, or Angular adapters — the Web Component is the universal non-React solution
- No server-side rendering of the component itself — it initializes client-side (same as the React library). "Server-rendered pages" in R2 means it works on pages whose HTML was server-rendered, not that the component renders on the server
- The vanilla RAG client is a new, independent module — not shared with or replacing `contensis-rag-react` in the React library
- reCAPTCHA support is deferred — the RAG API's `X-Recaptcha-Token` header requires Google's reCAPTCHA v3 script, which is a separate external dependency. If reCAPTCHA is required in production, it can be added as an optional integration (consumer loads the reCAPTCHA script, passes a site key attribute)
- React-specific customization patterns that have no HTML equivalent (`renderMarkdown` as a React node return, `ModeSwitch` render props) are replaced with Web Component-native equivalents (bundled markdown parser, child elements, JS property callbacks), not 1:1 replicated

## Key Decisions

- **Web Component over other approaches**: Custom Elements are a browser standard, work everywhere, and align with the existing Shadow DOM architecture. No framework lock-in for the non-React target.
- **Standalone file with bundled dependencies**: CMS authors should not need to manage dependencies. One file, zero setup. This includes a markdown parser for rendering AI responses.
- **Parallel output, not a replacement**: The React library stays as-is. Both outputs coexist in the repo with separate build targets.
- **Independent vanilla RAG client**: The Web Component gets its own RAG API client, reimplemented from the same HTTP/SSE protocol — not shared code with the React library. This keeps R20 (React unchanged) clean and avoids coupling the two outputs.
- **Child elements for complex configuration**: Mode switching and suggestions use child elements (`<insytful-mode>`, `<insytful-suggestion>`) rather than JSON attributes, because they are more readable and more natural for CMS authors writing HTML.
- **Bundled markdown by default, overridable via JS**: AI responses need formatting. Bundling a lightweight parser gives CMS authors a working default without extra setup. Developers who want custom rendering can set a JS callback property on the element.
- **Logo via named slot, rendered once**: The React version renders `logo` in 3 DOM locations conditionally. The Web Component simplifies this to a single `<slot name="logo">` in the most prominent position. Full multi-location logo parity is not worth the complexity for the Web Component target audience.

## Dependencies / Assumptions

- The Contensis RAG API contract (endpoint, SSE format, session headers) is stable and documented
- The fetch/SSE protocol in `contensis-rag-react` can be reimplemented independently (~130 lines of vanilla fetch + ReadableStream + SSE parsing)
- The existing CSS custom properties and base styles are sufficient for theming the Web Component (no React-specific styling exists)
- `focus-trap` v7+ supports Shadow DOM via the `tabbable` library's `getShadowRoot` option — this will need to be configured for the light DOM trigger / shadow DOM dialog boundary

## Outstanding Questions

### Deferred to Planning
- [Affects R1][Technical] What's the expected bundle size for the standalone file? Estimate: 60-80KB minified without markdown parser, 100-120KB with a lightweight one (e.g. `marked`). Should we set a budget?
- [Affects R3][Technical] Should the npm package export both the React components and the Web Component from the same package (separate entry points), or should they be separate npm packages?
- [Affects R13][Needs research] Which lightweight markdown parser to bundle? Candidates: `marked` (~40KB), `snarkdown` (~1KB but limited), `micromark`. Needs to handle the markdown patterns the RAG API actually returns.
- [Affects R17][Needs research] Verify `focus-trap` v7 Shadow DOM support works for the trigger-in-light-DOM / dialog-in-shadow-DOM pattern. May need `tabbable`'s `getShadowRoot` configuration.
- [Affects R15][Technical] The `contensis-rag-react` source has a reCAPTCHA hook call inside a callback (Rules of Hooks violation). The vanilla reimplementation should not replicate this pattern — reCAPTCHA integration should be a clean optional path if added later.

## Next Steps

-> `/ce:plan` for structured implementation planning
