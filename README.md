
# ChatModal

ChatModal provides an accessible, AI-powered search modal that can be triggered from anywhere in your UI. It supports:

- Custom triggers
- Markdown rendering
- Preset suggestions
- Classic search mode
- Full theming via CSS variables
- Optional disclaimers
- Switchable modes between AI and classic search
- Error handling

---

## Installation

`npm install insytful-ai-components`
# or
`yarn add insytful-ai-components`

---

### Basic Usage

```jsx
import { ChatModal } from "@your-lib/chat-modal";
import ReactMarkdown from "react-markdown";


<ChatModal
  title="What are you looking for?"
  text="AI search can help you find services, report issues, or guide you through applications."
  suggestions={[
    "Apply for a school place",
    "Find school term dates",
    "Report a pothole",
  ]}
  renderMarkdown={(markdown) => <ReactMarkdown>{markdown}</ReactMarkdown>}
  renderTrigger={({ toggle, a11y }) => (
    <button
      {...a11y}
      type="button"
      onClick={toggle}
    >
      <span className="hidden md:inline-block">Search</span>
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <path d="M11.27 18.54..." />
      </svg>
    </button>
  )}
  classic={{
    path: "/search?q=",
    title: "You're using classic search",
    text: "Start typing to find pages...",
    suggestions: ["Report a pothole", "Apply for a Blue Badge", "School term dates"],
  }}
  offsets={{ top: "5.5rem", bottom: 0, left: 0, right: 0 }}
/>
```
---

### Props

| Prop            | Type                                     | Description                                                                                                    |
|-----------------|-----------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `title`         | `string`                                 | Heading for the AI search modal.                                                                               |
| `text`          | `string`                                 | Intro text shown under the heading.                                                                         |
| `disclaimer`    | `ReactNode`                              | Optional text or element shown at the bottom of the modal.                                                     |
| `renderSwitch`  | `(fn: () => void) => ReactNode`         | Optional function to render a switch between AI and classic modes.                                            |
| `classic`       | `object`                                 | Configuration for classic search mode: <br>• `path`: query path <br>• `title`: optional heading <br>• `text`: optional text <br>• `suggestions`: array of suggestions <br>• `renderSwitch`: optional render function for switch |
| `suggestions`   | `string[]`                               | AI suggestions shown when there are no messages.                                                              |
| `offsets`       | `{ top?, bottom?, left?, right? }`       | Control modal position and spacing.                                                                           |
| `logo`          | `ReactNode`                              | Optional logo shown in messages area.                                                                         |
| `renderMarkdown`| `(markdown: string) => ReactNode`       | Custom markdown renderer.                                                                                      |
| `renderTrigger` | `(controls) => ReactNode`               | Custom trigger element with access to open/close/toggle controls and accessibility props.                     |

---

### Features
- AI & Classic modes: Switch between AI-powered conversation and traditional search.
- Custom triggers: Pass your own button or UI element to open the modal.
- Markdown rendering: Render messages with custom markdown components.
- Presets & suggestions: Provide default suggestions for quick search.
- Accessibility: Fully keyboard navigable, focus-trapped, and screen-reader friendly.
- Customizable layout: Control offsets and theming via CSS variables.
- Error handling: Displays errors with optional retry/reload actions.
- Optional disclaimers: Show legal or informational disclaimers at the bottom.

---

### Styling

ChatModal uses CSS variables for easy theming:

```css
  .my-council-theme .ai-lib-modal {
    --ai-lib-text-default: #0a4d1d;
    --ai-lib-text-muted: #276749;
    --ai-lib-text-link-default: #38a169;
    --ai-lib-text-link-hover: #2f855a;

    --ai-lib-btn-prompt-bg-default: #e6ffed;
    --ai-lib-btn-prompt-bg-hover: #b2f5cb;
    --ai-lib-btn-prompt-text: #0a4d1d;

    --ai-lib-btn-icon-search-bg-default: #276749;
    --ai-lib-btn-icon-search-bg-hover: #2f855a;
    --ai-lib-btn-icon-search-bg-disabled: #c6f6d5;
    --ai-lib-btn-icon-search-icon: #ffffff;

    --ai-lib-semantic-search-field-stroke: #276749;
    --ai-lib-semantic-search-field-focus: #38a169;
  }
```