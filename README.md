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
import { onToggleModal, onModalStateChange } from 'insytful-ai-search-components';

// Toggle modal open/closed
<button onClick={() => onToggleModal()}>Toggle Search</button>

// Check if modal is open
const [isModalOpen, setModalOpen] = useState<boolean>();
useEffect(() => {
  const unsubscribe = onModalStateChange(isOpen => {
    setModalOpen(isOpen);
  });

  return unsubscribe;
}, []);
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

### `onModalStateChange(): boolean`

Returns the current open/closed state of the modal.

```tsx
import { onModalStateChange } from 'insytful-ai-search-components';

  const [isModalOpen, setModalOpen] = useState<boolean>();
  useEffect(() => {
    const unsubscribe = onModalStateChange(isOpen => {
      setModalOpen(isOpen);
    });

    return unsubscribe;
  }, []);
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