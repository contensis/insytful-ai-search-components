# Insytful AI Search Components

An accessible, AI-powered search modal component library built with React, TypeScript, and Tailwind CSS. Designed to work seamlessly with Shadow DOM for style isolation.

## Features

- 🎨 **Fully Themed with Tailwind CSS** - Modern utility-first styling
- 🔒 **Shadow DOM Support** - Complete style isolation for embedding anywhere
- 🛡️ **CSS Isolation** - Immune to consumer app font-size overrides (1rem issues)
- ♿ **Accessible** - WCAG compliant, keyboard navigable, focus-trapped
- 🤖 **AI & Classic Modes** - Switch between AI conversation and traditional search
- 🎯 **TypeScript** - Full type safety and IntelliSense support
- 📝 **Markdown Support** - Rich text rendering for AI responses
- 🎭 **Custom Theming** - Easy theming via CSS variables
- 🚀 **Tree-shakeable** - Import only what you need

---

## CSS Isolation & rem Unit Protection

This library is **fully protected** against consumer app CSS overrides:

- ✅ **Shadow DOM** prevents style leakage in both directions
- ✅ **em-based units** relative to component's 16px base, not host page
- ✅ **Explicit font-size lock** prevents inheritance issues
- ✅ **CSS containment** for performance and isolation
- ✅ **Tested in hostile environments** with aggressive CSS resets

**Your component will render correctly even if the consumer app has:**
```css
html { font-size: 10px !important; }
* { font-size: 8px !important; }
```

---

## Installation

```bash
npm install insytful-ai-search-components
# or
yarn add insytful-ai-search-components
# or
pnpm add insytful-ai-search-components
```

### Peer Dependencies

This package requires React 17+ as a peer dependency:

> **Important:** Make sure both `react` and `react-dom` are installed in your project. The library uses `react-dom/client` for rendering, which is included in the `react-dom` package.

---

## Quick Start

### Using Web Component (Recommended for Shadow DOM)

The simplest way to use the component is via the custom Web Component:

### Using with React

```tsx
import { useEffect, useRef } from 'react';
import 'insytful-ai-search-components';
import type { WidgetProps } from 'insytful-ai-search-components';

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

export function MyComponent() {
  const ref = useRef<ChatModalElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.props = {
      title: "What are you looking for?",
      text: "AI search can help you find what you need.",
      suggestions: [
        "Report a pothole",
        "Apply for a blue badge",
        "School term dates"
      ],
      offsets: { top: '80px' }
    };
  }, []);

  return (
    <insytful-ai-chat-modal
      ref={(element: ChatModalElement) => (ref.current = element)}
    />
  );
}
```

### Disclaimer Options

The `disclaimer` prop accepts three formats:

**1. Plain Text String**
```tsx
ref.current.props = {
  disclaimer: 'AI-generated answers may include mistakes.'
};
```

**2. JSX/React Component**
```tsx
ref.current.props = {
  disclaimer: (
    <span>
      AI-generated answers may include mistakes. 
      <a href="/disclaimer" className="underline ml-1">Learn more</a>
    </span>
  )
};
```

---

## Component Props

### WidgetProps

| Prop            | Type                                     | Required | Description                                                                 |
|-----------------|------------------------------------------|----------|-----------------------------------------------------------------------------|
| `title`         | `string`                                 | No       | Main heading for the search modal                                          |
| `text`          | `string`                                 | No       | Descriptive text shown under the heading                                   |
| `disclaimer`    | `React.ReactNode \| string`              | No       | Disclaimer content (supports JSX, HTML string, or plain text)              |
| `suggestions`   | `string[]`                               | No       | Array of suggestion prompts shown when no messages exist                   |
| `offsets`       | `object`                                 | No       | Position offsets: `{ top?, bottom?, left?, right? }` (string or number)   |
| `logo`          | `React.ReactNode`                        | No       | Custom logo/avatar shown in message threads                                |
| `renderMarkdown`| `(markdown: string) => React.ReactNode` | No       | Custom markdown renderer for AI responses                                  |
| `renderSwitch`  | `(fn: () => void) => React.ReactNode`   | No       | Custom UI for switching between AI and classic modes                       |
| `options`       | `{ config: string, baseUrl?: string }`  | No       | RAG provider configuration for AI backend                                  |
| `classic`       | `ClassicSearchProps`                     | No       | Configuration for classic search mode (see below)                          |

### ClassicSearchProps

| Prop            | Type                                     | Description                                                                 |
|-----------------|------------------------------------------|-----------------------------------------------------------------------------|
| `title`         | `string`                                 | Heading for classic search mode                                            |
| `text`          | `string`                                 | Descriptive text for classic mode                                          |
| `suggestions`   | `string[]`                               | Suggestions specific to classic search                                     |
| `path`          | `string`                                 | URL path for classic search (e.g., "/search?q=")                          |
| `renderSwitch`  | `(fn: () => void) => React.ReactNode`   | Custom switch UI for classic mode                                          |

---

## Theming

The component uses CSS variables for easy theming. All styles are scoped to the Shadow DOM, preventing conflicts with your page styles.

### Theme Variables

OVERIDE LIKE SO...

```css
:host {
  /* TODO */
}
```

### Responsive Offsets

Control the modal position dynamically based on viewport:

```tsx
import { useEffect, useRef, useState } from 'react';

function useDetectDesktop(breakpoint = 768) {
  const [isDesktop, setDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= breakpoint;
  });

  useEffect(() => {
    const onResize = () => setDesktop(window.innerWidth >= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isDesktop;
}

export function ResponsiveSearchModal() {
  const ref = useRef<ChatModalElement | null>(null);
  const isDesktop = useDetectDesktop();

  useEffect(() => {
    if (!ref.current) return;

    ref.current.props = {
      title: "What are you looking for?",
      text: "AI search can help you find what you need.",
      offsets: {
        top: isDesktop ? '80px' : '40px',
        bottom: 0,
        left: 0,
        right: 0,
      }
    };
  }, [isDesktop]);

  return <insytful-ai-chat-modal ref={ref} />;
}
```

---

## Advanced Usage

### Custom Markdown Rendering

```tsx
import ReactMarkdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';

ref.current.props = {
  renderMarkdown: (markdown) => (
    <ReactMarkdown
      rehypePlugins={[
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
      ]}
    >
      {markdown}
    </ReactMarkdown>
  )
};
```

### Custom Logo

```tsx
ref.current.props = {
  logo: (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#0b3d2e" />
      <text x="16" y="22" fontSize="18" fill="white" textAnchor="middle">AI</text>
    </svg>
  )
};
```

### Mode Switching

```tsx
ref.current.props = {
  renderSwitch: (toggleMode) => (
    <button onClick={toggleMode} className="text-sm text-blue-600 hover:underline">
      Switch to {isClassicMode ? 'AI Search' : 'Classic Search'}
    </button>
  ),
  classic: {
    title: "Classic Search",
    text: "Search our site",
    path: "/search?q=",
    suggestions: ["Report a pothole", "Blue badge", "School dates"],
    renderSwitch: (toggleMode) => (
      <button onClick={toggleMode} className="text-sm text-blue-600 hover:underline">
        Try AI Search instead
      </button>
    )
  }
};
```

---

## Building from Source

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build

```bash
# Build the library
npm run build

# Output will be in /dist folder
```

### Testing with npm pack

To test the package locally before publishing:

```bash
# Build the package
npm run build

# Create a tarball
npm pack

# This creates insytful-ai-search-components-0.1.0.tgz

# Install in another project
cd /path/to/your/project
npm install /path/to/insytful-ai-search-components-0.1.0.tgz
```

---

## Exports

The package exports the following:

```typescript
// Main entry point
import 'insytful-ai-search-components'; // Web Component registration
import type { WidgetProps } from 'insytful-ai-search-components';

// Styles
import 'insytful-ai-search-components/theme.css';
```

---

## TypeScript

Full TypeScript support with type definitions included. No additional @types packages needed.

```typescript
import type { WidgetProps, ChatModalProps } from 'insytful-ai-search-components';
```

---

## Accessibility

The component follows WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation (Tab, Escape, Enter)
- ✅ Focus trap when modal is open
- ✅ ARIA attributes for screen readers
- ✅ Semantic HTML structure
- ✅ Focus visible states
- ✅ Color contrast ratios
- ✅ Responsive text sizing

---

## Contributing

Contributions are welcome - Please feel free to submit a Pull Request.

---

## Support

For issues and questions, please use the GitHub Issues page.