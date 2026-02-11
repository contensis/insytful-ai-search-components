# Insytful AI Search Components

An accessible, AI-powered search modal component library built with React, TypeScript, and Tailwind CSS. Features Shadow DOM isolation for seamless integration into any web application.

## Features

- 🎯 **Shadow DOM Isolation** - Styles won't conflict with your app
- ♿ **Accessible** - Full keyboard navigation and focus trap support
- 🤖 **AI-Powered** - Integrates with Contensis RAG for intelligent search
- 🎨 **Customisable** - Override styles and content easily
- ⚛️ **React 17+ Compatible** - Works with both React 17 and 18
- 🌐 **Web Component** - Use as a standard HTML element
- 🔄 **Classic Search Mode** - Switch between AI and traditional search

## Installation

```bash
npm install insytful-ai-search-components
```

## Quick Start

### Setting Props with `setModalProps()`

The recommended way to use this library:

```tsx
import { useEffect, useMemo } from 'react';
import 'insytful-ai-search-components';
import { setModalProps, onToggleModal } from 'insytful-ai-search-components';

function SearchModal() {
  const props = useMemo(() => ({
    title: 'How can we help you?',
    text: 'Ask me anything...',
    suggestions: ['How do I get started?', 'What features are available?'],
    options: {
      config: 'your-insytful-rag-config',
      baseUrl: 'https://your-api-endpoint.com'
    }
  }), []);

  useEffect(() => {
    setModalProps(props);
  }, [props]);

  return (
    <>
      <insytful-ai-chat-modal />
      <button onClick={() => onToggleModal()}>Open Search</button>
    </>
  );
}
```

### Controlling the Modal

```tsx
import { onToggleModal, isModalOpen } from 'insytful-ai-search-components';

// Toggle modal open/closed
<button onClick={() => onToggleModal()}>Toggle Search</button>

// Check if modal is open
if (isModalOpen()) {
  console.log('Modal is currently open');
}
```

## Advanced Usage

### Custom Styling

Pass custom CSS via the theme prop:

```tsx
import customTheme from './custom.css?inline';
import { setModalProps } from 'insytful-ai-search-components';

useEffect(() => {
  setModalProps({
    title: 'Search',
    text: 'Ask a question...',
    theme: customTheme, // Your custom CSS
    options: { config: 'your-config' }
  });
}, []);
```

### Classic Search Mode

Enable a traditional search mode alongside AI search:

```tsx
setModalProps({
  title: 'AI Search',
  text: 'Ask me anything...',
  options: { config: 'your-config' },
  renderSwitch: (toggleFn) => (
    <button onClick={toggleFn}>Switch to Classic Search</button>
  ),
  classic: {
    title: "Classic Search",
    text: 'Search our site...',
    path: '/search?q=',
    suggestions: ['Downloads', 'Contact', 'About'],
    renderSwitch: (toggleFn) => (
      <button onClick={toggleFn}>Switch to AI Search</button>
    )
  }
});
```

### Custom Markdown Rendering

```tsx
import ReactMarkdown from 'react-markdown';

setModalProps({
  title: 'Search',
  options: { config: 'your-config' },
  renderMarkdown: (markdown) => (
    <ReactMarkdown>{markdown}</ReactMarkdown>
  )
});
```

### Offset Positioning

Adjust modal position to account for fixed headers/footers:

```tsx
setModalProps({
  title: 'Search',
  options: { config: 'your-config' },
  offsets: {
    top: 80,    // Account for fixed header
    bottom: 0,
    left: 0,
    right: 0
  }
});
```

## Props Reference

| Prop              | Type                                      | Required | Description                                               |
| ----------------- | ----------------------------------------- | -------- | --------------------------------------------------------- |
| `title`           | `string`                                  | Yes      | Modal title text                                          |
| `text`            | `string`                                  | Yes      | Placeholder or description text                           |
| `options`         | `{ config: string, baseUrl?: string }`    | Yes      | RAG API configuration                                     |
| `suggestions`     | `string[]`                                | No       | Suggested questions to display                            |
| `theme`           | `string`                                  | No       | Custom CSS as inline string                               |
| `disclaimer`      | `ReactNode`                               | No       | Optional disclaimer content                               |
| `logo`            | `ReactNode`                               | No       | Custom logo component                                     |
| `isDevMode`       | `boolean`                                 | No       | Enable mock responses for testing                         |
| `renderMarkdown`  | `(markdown: string) => ReactNode`         | No       | Custom markdown renderer                                  |
| `renderSwitch`    | `(toggleFn: () => void) => ReactNode`     | No       | Render function for switching to classic mode             |
| `offsets`         | `{ top?, bottom?, left?, right?: number}` | No       | Modal positioning offsets                                 |
| `classic`         | `object`                                  | No       | Classic search mode configuration (see below)             |

### Classic Mode Configuration

| Prop            | Type                                  | Required | Description                              |
| --------------- | ------------------------------------- | -------- | ---------------------------------------- |
| `title`         | `string`                              | No       | Title for classic search mode            |
| `text`          | `string`                              | No       | Placeholder text for classic mode        |
| `path`          | `string`                              | Yes      | URL path for search (e.g., `/search?q=`) |
| `suggestions`   | `string[]`                            | No       | Suggestions for classic mode             |
| `renderSwitch`  | `(toggleFn: () => void) => ReactNode` | No       | Render function to switch back to AI     |
| `onNavigate`    | `(path: string) => void`              | No       | Custom navigation handler                |

## API Functions

### `setModalProps(props: WidgetProps)`

Sets props on the currently active modal instance.

```tsx
import { setModalProps } from 'insytful-ai-search-components';

setModalProps({
  title: 'Search',
  options: { config: 'your-config' }
});
```

### `onToggleModal()`

Toggles the modal open/closed state.

```tsx
import { onToggleModal } from 'insytful-ai-search-components';

<button onClick={() => onToggleModal()}>Open Search</button>
```

### `isModalOpen(): boolean`

Returns the current open/closed state of the modal.

```tsx
import { isModalOpen } from 'insytful-ai-search-components';

if (isModalOpen()) {
  console.log('Modal is open');
}
```

### `getModalInstance(): ChatModalWidget | null`

Returns the current modal instance for advanced use cases.

```tsx
import { getModalInstance } from 'insytful-ai-search-components';

const modal = getModalInstance();
if (modal) {
  modal.onToggle(true); // Manually open
}
```

## Troubleshooting

### Props not updating after navigation

Use `setModalProps()`:

```tsx

// ✅ Use setModalProps
setModalProps(newProps);
```

### Modal not showing after page navigation

Ensure props are set in a `useEffect` that runs after navigation:

```tsx
useEffect(() => {
  setModalProps(props);
}, [props]);
```

### Styles not applying

Make sure you're passing the theme as an inline string:

```tsx
import customTheme from './custom.css?inline'; // Note the ?inline
Always use `setModalProps()` to set props:

```tsx
import { setModalProps } from 'insytful-ai-search-components';

useEffect(() => {
  setModalProps(props);
}, [props]
## TypeScript

Full TypeScript support included:

```tsx
import type { WidgetProps } from 'insytful-ai-search-components';

const props: WidgetProps = {
  title: 'Search',
  text: 'Ask anything...',
  options: { config: 'your-config' }
};
```

