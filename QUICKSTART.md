# Quick Start Example

This is a minimal working example to get you started quickly.

## Installation

```bash
npm install insytful-ai-search-components-0.1.0.tgz
```

Or from the published package (once available):

```bash
npm install insytful-ai-search-components
```

## Minimal HTML Example

Create an `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Search - Quick Start</title>
  
  <style>
    body {
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    
    header {
      background: #0b3d2e;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    main {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    /* Custom theme for the search modal */
    .my-theme {
      --ai-lib-text-default: #0b3d2e;
      --ai-lib-btn-prompt-bg-default: #d8f0e3;
      --ai-lib-btn-icon-search-bg-default: #0b3d2e;
      --ai-lib-semantic-search-field-focus: #2ecc71;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Website</h1>
    
    <!-- The AI Search Modal -->
    <div class="my-theme">
      <insytful-ai-chat-modal id="search"></insytful-ai-chat-modal>
    </div>
  </header>

  <main>
    <h2>Welcome!</h2>
    <p>Click the search button above to try the AI-powered search.</p>
    
    <h3>Features:</h3>
    <ul>
      <li>AI-powered conversational search</li>
      <li>Suggestion prompts for quick queries</li>
      <li>Fully accessible and keyboard navigable</li>
      <li>Customizable theming via CSS variables</li>
    </ul>
  </main>

  <!-- Import and configure the component -->
  <script type="module">
    // Import the web component
    import 'insytful-ai-search-components';
    
    // Get the element
    const searchModal = document.getElementById('search');
    
    // Configure it
    searchModal.props = {
      // Main content
      title: "How can we help you?",
      text: "Ask me anything about our services.",
      
      // Suggestion prompts
      suggestions: [
        "How do I report a pothole?",
        "Where can I apply for a parking permit?",
        "What are your opening hours?"
      ],
      
      // Position (adjust based on your header height)
      offsets: {
        top: '72px',  // Height of the header
        bottom: 0,
        left: 0,
        right: 0
      },
      
      // Optional disclaimer (supports HTML)
      disclaimer: 'AI-generated answers may include mistakes. <a href="/disclaimer" style="text-decoration: underline;">Learn more</a>.'
    };
  </script>
</body>
</html>
```

## React Example

Create a component file `AISearchModal.tsx`:

```tsx
import { useEffect, useRef } from 'react';
import 'insytful-ai-search-components';
import type { WidgetProps } from 'insytful-ai-search-components';

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

export function AISearchModal() {
  const ref = useRef<ChatModalElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.props = {
      title: "How can we help you?",
      text: "Ask me anything about our services.",
      suggestions: [
        "How do I report a pothole?",
        "Where can I apply for a parking permit?",
        "What are your opening hours?"
      ],
      offsets: { top: '72px', bottom: 0, left: 0, right: 0 },
      // Disclaimer with JSX for more control
      disclaimer: (
        <span>
          AI-generated answers may include mistakes.{' '}
          <a href="/disclaimer" className="underline">Learn more</a>.
        </span>
      )
    };
  }, []);

  return (
    <insytful-ai-chat-modal
      ref={(element: ChatModalElement) => (ref.current = element)}
    />
  );
}
```

Use it in your app:

```tsx
import { AISearchModal } from './AISearchModal';

function App() {
  return (
    <div>
      <header className="my-theme">
        <h1>My Website</h1>
        <AISearchModal />
      </header>
      <main>
        <p>Your content here...</p>
      </main>
    </div>
  );
}

export default App;
```

Add the custom element type declaration in `react-app-env.d.ts` or `custom-elements.d.ts`:

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    'insytful-ai-chat-modal': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
```

## Testing the Packed Version

If you want to test using `npm pack` before installing:

```bash
# In your component library directory
npm run build
npm pack

# This creates: insytful-ai-search-components-0.1.0.tgz

# In your test project
npm install /path/to/insytful-ai-search-components-0.1.0.tgz
```

## Next Steps

- See [README.md](./README.md) for full documentation
- See [INTEGRATION.md](./INTEGRATION.md) for framework-specific guides
- Explore theming options with CSS variables
- Add custom markdown rendering
- Configure AI backend with RAG provider

## Common Issues

### TypeScript Errors

If you see TypeScript errors about unknown elements, add the type declarations shown above.

### Styles Not Loading

Make sure CSS variables are defined in a parent element that wraps the component.

### Component Not Rendering

Ensure you're setting the `props` after the component is mounted (use `useEffect` in React).

## Support

For more help, see the [full documentation](./README.md) or check out the [integration examples](./INTEGRATION.md).
