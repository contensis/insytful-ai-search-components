# CSS variables

Set them on `.insytful-theme`, in your stylesheet, `<Theme css>` or the Web
Component's `theme` attribute. See [Theming](./theming.md).

```css
.insytful-theme {
  --insytful-brand-primary: #5128c3;
  --insytful-modal-radius: 0;
}
```

The default values are in `style.css`.

## Base

| Variable | Controls |
|---|---|
| `--insytful-base-font-size` | Base text size. Defaults to `1rem`, so the browser's text-size setting carries through. On sites that set `html { font-size: 62.5% }`, pin it to a pixel value such as `16px`. |
| `--insytful-font-family` | Font for every component |
| `--insytful-brand-primary` | Brand colour (also the default blockquote border) |
| `--insytful-text-default` | Body text |
| `--insytful-text-muted` | Secondary text |
| `--insytful-text-link-default` | Links |
| `--insytful-text-link-hover` | Links on hover |

## Modal

| Variable | Controls |
|---|---|
| `--insytful-modal-bg` | Dialog background |
| `--insytful-modal-max-width` | Width of the content column |
| `--insytful-modal-radius` | Dialog corners |
| `--insytful-z-index` | Stacking order of the dialog |
| `--insytful-btn-close-bg` | Close button background |
| `--insytful-btn-close-bg-hover` | Close button background on hover |
| `--insytful-btn-close-icon` | Close icon colour |
| `--insytful-btn-close-size` | Close button size |

## Input

| Variable | Controls |
|---|---|
| `--insytful-input-card-bg` | Input background |
| `--insytful-input-card-radius` | Input corners |
| `--insytful-input-card-border` | Input border colour |
| `--insytful-input-card-border-width` | Input border width |
| `--insytful-semantic-search-field-stroke` | Default input border colour |
| `--insytful-semantic-search-field-ai-gradient-start` | AI glow gradient, start |
| `--insytful-semantic-search-field-ai-gradient-end` | AI glow gradient, end |
| `--insytful-btn-icon-search-bg-default` | Send button background |
| `--insytful-btn-icon-search-bg-hover` | Send button background on hover |
| `--insytful-btn-icon-search-icon` | Send icon colour |
| `--insytful-btn-icon-search-radius` | Send button corners |

## Suggestions

| Variable | Controls |
|---|---|
| `--insytful-btn-prompt-bg-default` | Suggestion background |
| `--insytful-btn-prompt-bg-hover` | Suggestion background on hover |
| `--insytful-btn-prompt-text` | Suggestion text |
| `--insytful-btn-prompt-radius` | Suggestion corners |
| `--insytful-btn-prompt-focus` | Suggestion focus ring colour |

## Messages

| Variable | Controls |
|---|---|
| `--insytful-message-user-bg` | The user's question bubble |
| `--insytful-message-radius` | Question bubble corners |
| `--insytful-message-footer-border` | Divider above the feedback row and disclaimer |
| `--insytful-scroll-hint-bg` | "More below" arrow button background |
| `--insytful-scroll-hint-border` | "More below" arrow button border |
| `--insytful-typing-indicator-text` | Loading message text |
| `--insytful-disclaimer-text` | Disclaimer text |

## Answer text

Markdown in answers, in both the modal and `Search.Overview`.

| Variable | Controls |
|---|---|
| `--insytful-prose-code-bg` | Inline code background |
| `--insytful-prose-code-border` | Inline code border |
| `--insytful-prose-pre-bg` | Code block background |
| `--insytful-prose-pre-text` | Code block text |
| `--insytful-prose-quote-bg` | Blockquote background |
| `--insytful-prose-quote-border` | Blockquote border |

## Overview

| Variable | Controls |
|---|---|
| `--insytful-overview-bg` | Overview background |
| `--insytful-overview-border` | Overview border |
| `--insytful-btn-show-more-bg-default` | Show more background |
| `--insytful-btn-show-more-bg-hover` | Show more background on hover |
| `--insytful-btn-show-more-text` | Show more text |
| `--insytful-btn-show-more-border` | Show more border |
| `--insytful-btn-show-more-radius` | Show more corners |

## Feedback

| Variable | Controls |
|---|---|
| `--insytful-feedback-vote-bg-hover` | Vote button background on hover |

## Quick actions (CTAs)

| Variable | Controls |
|---|---|
| `--insytful-cta-bar-gap` | Space between chips |
| `--insytful-cta-radius` | Chip corners |
| `--insytful-cta-label-text` | "Quick actions" label |
| `--insytful-cta-primary-bg-default` | Primary chip background |
| `--insytful-cta-primary-bg-hover` | Primary chip background on hover |
| `--insytful-cta-primary-text` | Primary chip text |
| `--insytful-cta-primary-border` | Primary chip border |
| `--insytful-cta-secondary-bg-default` | Secondary chip background |
| `--insytful-cta-secondary-bg-hover` | Secondary chip background on hover |
| `--insytful-cta-secondary-text` | Secondary chip text |
| `--insytful-cta-secondary-border` | Secondary chip border |

## Keyword results

| Variable | Controls |
|---|---|
| `--insytful-result-card-bg` | Card background |
| `--insytful-result-card-border` | Card border |
| `--insytful-result-card-title` | Card title |
| `--insytful-result-card-title-hover` | Card title on hover |
| `--insytful-result-card-date` | Card date |
| `--insytful-result-card-radius` | Card corners |
| `--insytful-result-card-image-width` | Card image width |
| `--insytful-pagination-link` | Page links |
| `--insytful-pagination-link-hover` | Page links on hover |
| `--insytful-pagination-item-bg-hover` | Page box background on hover |
| `--insytful-pagination-current-bg` | Current page background |
| `--insytful-pagination-current-text` | Current page text |
| `--insytful-pagination-gap` | Space between page boxes |
| `--insytful-pagination-radius` | Page box corners |
| `--insytful-pagination-item-size` | Minimum width and height of a page box |

## Error callout

| Variable | Controls |
|---|---|
| `--insytful-callout-error-border` | Coloured bar on the left |
| `--insytful-callout-error-bg` | Background |
| `--insytful-callout-error-text` | Text |
| `--insytful-callout-error-radius` | Right-hand corners |
| `--insytful-callout-error-cta-bg` | Action button background |
| `--insytful-callout-error-cta-text` | Action button text |
| `--insytful-callout-error-cta-border-radius` | Action button corners |

## Loading skeleton

| Variable | Controls |
|---|---|
| `--insytful-skeleton-bg` | Placeholder bars |
| `--insytful-skeleton-shimmer` | Shimmer gradient |

## Focus and motion

| Variable | Controls |
|---|---|
| `--insytful-semantic-focus-ring` | Focus ring colour on every component |
| `--insytful-semantic-focus-ring-width` | Focus ring width |
| `--insytful-semantic-focus-ring-offset` | Gap between the element and its focus ring |
| `--insytful-search-transition-duration` | Open/close and hover transitions |
| `--insytful-search-transition-easing` | Easing for those transitions |

`--insytful-semantic-search-field-focus` still works as a deprecated alias for
`--insytful-semantic-focus-ring`.

## Mode tabs (Web Component only)

React leaves the mode switch markup to you; see [Modes](./react/modes.md).

| Variable | Controls |
|---|---|
| `--insytful-mode-switch-bg` | Tab bar background |
| `--insytful-mode-switch-radius` | Tab bar corners |
| `--insytful-mode-tab-text` | Tab text |
| `--insytful-mode-tab-active-bg` | Active tab background |
| `--insytful-mode-tab-active-text` | Active tab text |
| `--insytful-mode-tab-radius` | Tab corners |
