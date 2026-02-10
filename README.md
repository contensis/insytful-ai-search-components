# Insytful AI Search Components

An accessible, AI-powered search modal component library built with React, TypeScript, and Tailwind CSS. Features Shadow DOM isolation for seamless integration into any web application.

## Features

- 🎯 **Shadow DOM Isolation** - Styles won't conflict with your app
- ♿ **Accessible** - Full keyboard navigation and focus trap support
- 🤖 **AI-Powered** - Integrates with Contensis RAG for intelligent search
- 🎨 **Customisable** - Override styles and content easily
- ⚛️ **React 17+ Compatible** - Works with both React 17 and 18
- 🌐 **Web Component** - Use as a standard HTML element

## Installation

```bash
npm install insytful-ai-search-components
```

## Quick Start

### As a Web Component

The simplest way to use this library is as a Web Component:

```javascript
  import 'insytful-ai-search-components';
  import 'insytful-ai-search-components/theme.css';

  const ref = useRef<ChatModalElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.props = {
      title: 'Ask me anything',
      text: 'Type your question here...',
      suggestions: ['How do I get started?', 'What features are available?'],
      options: {
        config: 'your-insytful-rag-config'
      }
    };
  }, []);

  return (
    <insytful-ai-chat-modal
      ref={(element: ChatModalElement) =>
        (ref.current = element as ChatModalElement)
      }
    />
  );
```

### Controlling the Modal

```javascript
import { onToggleModal } from 'insytful-ai-search-components';

<button onClick={() => onToggleModal()}>Toggle Modal</button>;
```

### Custom Styling
Pass custom CSS via the theme prop:

```javascript
import customTheme from './custom.css?inline' // .insytful-search-message-content h1 { font-size: 2rem; ... }
// OR
import customTheme from './custom' // export default`.insytful-search-message-content h1 { font-size: 2rem; ... }` 

useEffect(() => {
  if (!ref.current) return;
  ref.current.props = { 
    title: 'Search',
    text: 'Ask a question...',
    theme: customTheme, // Inline CSS string e.g.,
    options: {
      config: 'your-config'
    }
  };
}, [customTheme]);

<insytful-ai-chat-modal
  ref={(element: ChatModalElement) =>
    (ref.current = element as ChatModalElement)
  }
/>
```

### Props

| Prop          | Type        | Description                                               |
| ------------- | ----------- | --------------------------------------------------------- |
| `title`       | `string`    | Modal title text                                          |
| `text`        | `string`    | Placeholder or description text                           |
| `disclaimer`  | `ReactNode` | Optional disclaimer content                               |
| `suggestions` | `string[]`  | Suggested questions to display                            |
| `logo`        | `ReactNode` | Custom logo component                                     |
| `options`     | `object`    | RAG configuration: `{ config: string, baseUrl?: string }` |
| `isDevMode`   | `boolean`   | Enable mock responses for testing                         |

