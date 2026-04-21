# Web Component

`<insytful-search>` is a standalone custom element. No React, no build step, no npm — a single script tag adds AI search to any page.

## Setup

```html
<script src="https://unpkg.com/insytful-ai-search-components@2.1.7/dist/insytful-search.js"></script>

<insytful-search
  api-uri="https://your-api.com"
  project-id="your-project"
>
  <button slot="trigger">Search</button>
  <span slot="title">How can we help?</span>
  <span slot="description">Ask a question in your own words</span>
  <span slot="disclaimer">AI responses may not always be accurate.</span>

  <insytful-close></insytful-close>
  <insytful-suggestion>How do I get started?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
</insytful-search>
```

## Contensis CMS / Razor

For classic Contensis sites using the .NET framework, add the Web Component to your layout or view:

```cshtml
@{
    const string InsytfulAISearchTheme = @"
        .insytful-root {
          --insytful-font-family: 'Helvetica Neue', Arial, sans-serif;
          --insytful-btn-prompt-bg-default: #f2f2f2;
          --insytful-btn-prompt-bg-hover: #e5e5e5;
          --insytful-btn-icon-search-bg-default: #da3949;
          --insytful-btn-icon-search-bg-hover: #bf2f3d;
        }
    ";
}

<script src="https://unpkg.com/insytful-ai-search-components@2.1.7/dist/insytful-search.js"></script>

<style>
  insytful-search:not(:defined) { display: none; }
</style>

<insytful-search
  api-uri="CurrentContext.Site.AI.Endpoint"
  project-id="CurrentContext.Site.AI.ProjectId"
  suggestions-position="below"
  theme="@InsytfulAISearchTheme"
>
  <button slot="trigger">Search this site</button>
  <span slot="title">Ask our AI</span>
  <span slot="description">Get instant answers about our courses and services</span>
  <span slot="disclaimer">AI responses may not always be accurate. Please verify important information.</span>

  <insytful-close></insytful-close>

  <img slot="avatar" src="/logo.png" alt="" width="32" height="32" />

  <insytful-suggestion>How do I apply?</insytful-suggestion>
  <insytful-suggestion>What courses do you offer?</insytful-suggestion>
  <insytful-suggestion>Contact us</insytful-suggestion>

  <insytful-mode name="ai">AI Search</insytful-mode>
  <insytful-mode name="classic" path="/search/index.aspx?search_keywords=">Classic Search</insytful-mode>
</insytful-search>
```

To open the dialog programmatically from your own search form:

```javascript
const element = document.getElementById('ai-search');
const input = document.getElementById('search');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    element.open(input.value.trim());
  }
});
```

## Attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `api-uri` | Yes | Contensis RAG API endpoint |
| `project-id` | Yes | Project identifier for the RAG API |
| `sections` | No | Comma-separated section slugs to scope results |
| `dev-mode` | No | Enable mock responses for development (no backend needed) |
| `theme` | No | Custom CSS string injected into the Shadow DOM (use `.insytful-root` to set [CSS custom properties](./theming.md)) |
| `suggestions-position` | No | `"above"` (default) or `"below"` — position of suggestion chips relative to the input field |

## Slots

| Slot | Description |
|------|-------------|
| `trigger` | Button that opens/closes the dialog |
| `title` | Heading text for the empty state |
| `description` | Subheading text below the title |
| `disclaimer` | Footer text (e.g. AI accuracy warning) |
| `logo` | Image shown in the dialog empty state (not in messages) |
| `avatar` | Image shown next to AI responses and the typing indicator |

## Child Elements

```html
<!-- Suggestion chips (shown before the first query) -->
<insytful-suggestion>How do I apply?</insytful-suggestion>

<!-- Close button (top-right inside the dialog).
     Empty content uses the default X icon; or pass your own markup. -->
<insytful-close></insytful-close>
<insytful-close aria-label="Dismiss search">Cancel</insytful-close>

<!-- Avatar shown next to AI responses in the chat -->
<img slot="avatar" src="/logo.png" alt="" width="32" height="32" />

<!-- Mode switching (AI search + classic URL navigation) -->
<insytful-mode name="ai">AI Search</insytful-mode>
<insytful-mode name="classic" path="/search?q=">Classic Search</insytful-mode>
```

The **close button** lives inside the dialog (focus-trap-aware) and is styled via `--insytful-btn-close-*` variables.

The **avatar** appears next to each AI response and the typing indicator. On desktop it sits as a column beside the message; on mobile it floats left so the first line of text wraps beside it and subsequent content flows full width. Style the wrapper via `.insytful-search-message-logo` in your theme CSS. This is the Web Component equivalent of the React `logo` prop on `Root`.

## JavaScript API

```javascript
const element = document.querySelector('insytful-search');

// Open/close programmatically
element.open();          // open the empty dialog
element.open('query');   // open and immediately send a query
element.close();
element.toggle();

// Check state
console.log(element.isOpen);

// Override markdown rendering
element.renderMarkdown = (md) => myCustomParser(md);

// Listen for events
element.addEventListener('insytful-open', () => console.log('Opened'));
element.addEventListener('insytful-close', () => console.log('Closed'));
element.addEventListener('insytful-search', (e) => console.log('Query:', e.detail.query));
element.addEventListener('insytful-message', (e) => console.log('Response:', e.detail.content));
element.addEventListener('insytful-mode-change', (e) => console.log('Mode:', e.detail.mode));
element.addEventListener('insytful-error', (e) => console.log('Error:', e.detail.error));
```

## Dynamic Offsets

If your site has a sticky header, add `data-insytful-modal-offset` so the dialog doesn't overlap it:

```html
<header data-insytful-modal-offset>Your sticky header</header>
```

The modal measures their combined height via `ResizeObserver` and adjusts its `top` offset.
