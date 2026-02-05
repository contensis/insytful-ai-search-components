# Integration Guide

This guide provides step-by-step instructions for integrating the Insytful AI Search Components into various frameworks and environments.

## Table of Contents

- [Testing Locally with npm pack](#testing-locally-with-npm-pack)
- [HTML/Vanilla JS](#htmlvanilla-js)
- [React](#react)
- [Next.js](#nextjs)
- [Vue.js](#vuejs)
- [Angular](#angular)
- [WordPress](#wordpress)

---

## Testing Locally with npm pack

Before publishing to npm, test the package locally:

### 1. Build and Pack the Library

```bash
cd /path/to/insytful-ai-search-components

# Build the library
npm run build

# Create a tarball
npm pack

# This creates: insytful-ai-search-components-0.1.0.tgz
```

### 2. Install in Your Test Project

```bash
cd /path/to/your/test-project

# Install the local package
npm install /path/to/insytful-ai-search-components/insytful-ai-search-components-0.1.0.tgz

# Or use relative path
npm install ../insytful-ai-search-components/insytful-ai-search-components-0.1.0.tgz
```

### 3. Test the Integration

Follow the framework-specific guides below.

### 4. Update After Changes

When you make changes to the library:

```bash
# In the library directory
cd /path/to/insytful-ai-search-components
npm run build
npm pack

# In your test project
cd /path/to/your/test-project
npm uninstall insytful-ai-search-components
npm install /path/to/insytful-ai-search-components/insytful-ai-search-components-0.1.0.tgz
```

---

## HTML/Vanilla JS

### Basic Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Search Demo</title>
  
  <!-- Import the CSS (optional, for styling outside Shadow DOM) -->
  <link rel="stylesheet" href="./node_modules/insytful-ai-search-components/dist/insytful-ai-search-components.css">
  
  <style>
    /* Custom theme */
    .my-custom-theme {
      --ai-lib-text-default: #0b3d2e;
      --ai-lib-btn-prompt-bg-default: #d8f0e3;
      --ai-lib-btn-icon-search-bg-default: #0b3d2e;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Website</h1>
    
    <!-- The search modal component with custom theme -->
    <div class="my-custom-theme">
      <insytful-ai-chat-modal id="search-modal"></insytful-ai-chat-modal>
    </div>
  </header>

  <main>
    <p>Your content here...</p>
  </main>

  <!-- Import as ES module -->
  <script type="module">
    import 'insytful-ai-search-components';
    
    // Configure the modal
    const modal = document.getElementById('search-modal');
    
    modal.props = {
      title: "How can we help you?",
      text: "Search our site using AI or browse by category.",
      suggestions: [
        "Report a pothole",
        "Apply for a parking permit",
        "Find bin collection dates"
      ],
      offsets: {
        top: '80px',
        bottom: 0,
        left: 0,
        right: 0
      },
      disclaimer: 'AI-generated answers may include mistakes. <a href="/disclaimer">Learn more</a>.'
    };
  </script>
</body>
</html>
```

### With CDN (Future)

Once published to npm, you can use a CDN:

```html
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/insytful-ai-search-components@0.1.0/dist/insytful-ai-search-components.es.js';
</script>
```

---

## React

### Setup with Create React App

```bash
npm install insytful-ai-search-components react react-dom
```

### Component Usage

**src/components/AISearchModal.tsx**

```tsx
import { useEffect, useRef, useState } from 'react';
import 'insytful-ai-search-components';
import type { WidgetProps } from 'insytful-ai-search-components';

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

export function AISearchModal() {
  const ref = useRef<ChatModalElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      offsets: {
        top: isDesktop ? '88px' : '71px',
        bottom: 0,
        left: 0,
        right: 0,
      },
      disclaimer: 'AI-generated answers may include mistakes. Please verify important information.'
    };
  }, [isDesktop]);

  return (
    <insytful-ai-chat-modal
      ref={(element: ChatModalElement) => (ref.current = element)}
      style={{ fontFamily: 'inherit' }}
    />
  );
}
```

**src/App.tsx**

```tsx
import { AISearchModal } from './components/AISearchModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="my-custom-theme">
        <h1>My React App</h1>
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

**src/App.css**

```css
.my-custom-theme {
  --ai-lib-text-default: #0b3d2e;
  --ai-lib-btn-prompt-bg-default: #d8f0e3;
  --ai-lib-btn-icon-search-bg-default: #0b3d2e;
}
```

### TypeScript Declaration

Add to **src/react-app-env.d.ts** or create **src/types/custom-elements.d.ts**:

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

---

## Next.js

### Setup

```bash
npm install insytful-ai-search-components react react-dom
```

### Client Component

**components/AISearchModal.tsx**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import type { WidgetProps } from 'insytful-ai-search-components';

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

export function AISearchModal() {
  const ref = useRef<ChatModalElement | null>(null);

  useEffect(() => {
    // Import only on client side
    import('insytful-ai-search-components');
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.props = {
      title: "What are you looking for?",
      text: "AI search can help you find what you need.",
      suggestions: ["Report a pothole", "Blue badge", "School dates"],
      offsets: { top: '88px', bottom: 0, left: 0, right: 0 }
    };
  }, []);

  return (
    <insytful-ai-chat-modal
      ref={(element: ChatModalElement) => (ref.current = element)}
    />
  );
}
```

**app/layout.tsx**

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'With AI Search',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**app/page.tsx**

```tsx
import { AISearchModal } from '@/components/AISearchModal';

export default function Home() {
  return (
    <div>
      <header className="my-custom-theme">
        <h1>My Next.js App</h1>
        <AISearchModal />
      </header>
      <main>
        <p>Your content here...</p>
      </main>
    </div>
  );
}
```

### TypeScript

Add to **next-env.d.ts** or create **types/custom-elements.d.ts**:

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

---

## Vue.js

### Setup

```bash
npm install insytful-ai-search-components
```

### Component

**components/AISearchModal.vue**

```vue
<template>
  <insytful-ai-chat-modal ref="modalRef"></insytful-ai-chat-modal>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import 'insytful-ai-search-components';
import type { WidgetProps } from 'insytful-ai-search-components';

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

const modalRef = ref<ChatModalElement | null>(null);

onMounted(() => {
  if (modalRef.value) {
    modalRef.value.props = {
      title: "What are you looking for?",
      text: "AI search can help you find what you need.",
      suggestions: [
        "Report a pothole",
        "Apply for a blue badge",
        "School term dates"
      ],
      offsets: { top: '80px', bottom: 0, left: 0, right: 0 }
    };
  }
});
</script>
```

### Usage in App

**App.vue**

```vue
<template>
  <div id="app">
    <header class="my-custom-theme">
      <h1>My Vue App</h1>
      <AISearchModal />
    </header>
    <main>
      <p>Your content here...</p>
    </main>
  </div>
</template>

<script setup lang="ts">
import AISearchModal from './components/AISearchModal.vue';
</script>

<style>
.my-custom-theme {
  --ai-lib-text-default: #0b3d2e;
  --ai-lib-btn-prompt-bg-default: #d8f0e3;
  --ai-lib-btn-icon-search-bg-default: #0b3d2e;
}
</style>
```

### TypeScript

Add to **env.d.ts** or **vite-env.d.ts**:

```typescript
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'insytful-ai-chat-modal': DefineComponent<{}, {}, any>;
  }
}

export {};
```

---

## Angular

### Setup

```bash
npm install insytful-ai-search-components
```

### Module Configuration

**app.module.ts**

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AISearchModalComponent } from './ai-search-modal/ai-search-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AISearchModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Important!
})
export class AppModule { }
```

### Component

**ai-search-modal.component.ts**

```typescript
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'insytful-ai-search-components';
import type { WidgetProps } from 'insytful-ai-search-components';

type ChatModalElement = HTMLElement & {
  props: Partial<WidgetProps>;
};

@Component({
  selector: 'app-ai-search-modal',
  template: '<insytful-ai-chat-modal #modal></insytful-ai-chat-modal>',
  styles: []
})
export class AISearchModalComponent implements OnInit {
  @ViewChild('modal', { static: true }) modalRef!: ElementRef<ChatModalElement>;

  ngOnInit(): void {
    const modal = this.modalRef.nativeElement;
    
    modal.props = {
      title: "What are you looking for?",
      text: "AI search can help you find what you need.",
      suggestions: [
        "Report a pothole",
        "Apply for a blue badge",
        "School term dates"
      ],
      offsets: { top: '80px', bottom: 0, left: 0, right: 0 }
    };
  }
}
```

**app.component.html**

```html
<header class="my-custom-theme">
  <h1>My Angular App</h1>
  <app-ai-search-modal></app-ai-search-modal>
</header>

<main>
  <p>Your content here...</p>
</main>
```

**styles.css**

```css
.my-custom-theme {
  --ai-lib-text-default: #0b3d2e;
  --ai-lib-btn-prompt-bg-default: #d8f0e3;
  --ai-lib-btn-icon-search-bg-default: #0b3d2e;
}
```

---

## WordPress

### Using in a Theme

**functions.php**

```php
<?php
function enqueue_ai_search_modal() {
    wp_enqueue_script(
        'insytful-ai-search',
        get_template_directory_uri() . '/node_modules/insytful-ai-search-components/dist/insytful-ai-search-components.es.js',
        array(),
        '0.1.0',
        true
    );
    
    wp_enqueue_style(
        'insytful-ai-search-styles',
        get_template_directory_uri() . '/node_modules/insytful-ai-search-components/dist/insytful-ai-search-components.css',
        array(),
        '0.1.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_ai_search_modal');
?>
```

**header.php**

```php
<header class="site-header my-custom-theme">
    <h1><?php bloginfo('name'); ?></h1>
    <insytful-ai-chat-modal id="wp-search-modal"></insytful-ai-chat-modal>
</header>

<script type="module">
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('wp-search-modal');
        
        modal.props = {
            title: "Search <?php bloginfo('name'); ?>",
            text: "Find what you're looking for with AI-powered search",
            suggestions: [
                "Latest news",
                "Contact information",
                "Services"
            ],
            offsets: { top: '80px', bottom: 0, left: 0, right: 0 }
        };
    });
</script>
```

**style.css**

```css
.my-custom-theme {
    --ai-lib-text-default: #0b3d2e;
    --ai-lib-btn-prompt-bg-default: #d8f0e3;
    --ai-lib-btn-icon-search-bg-default: #0b3d2e;
}
```

---

## Troubleshooting

### Web Component Not Recognized

If you see "Unknown element" warnings:

- **React/Next.js**: Add TypeScript declarations for custom elements
- **Angular**: Ensure `CUSTOM_ELEMENTS_SCHEMA` is added to your module
- **Vue**: Add global component type definitions

### Styles Not Applying

- Ensure the CSS file is imported or linked
- Check that CSS variables are defined in a parent scope
- Verify Shadow DOM is properly isolating styles

### Props Not Updating

- Ensure you're setting `props` after the element is mounted
- Use `useEffect` (React) or lifecycle hooks to set props
- Check that the element ref is not null before setting props

### Build Issues

- Ensure all peer dependencies are installed
- Check Node version (requires 16+)
- Clear node_modules and reinstall if needed

---

## Support

For more examples and support, see the [main README](./README.md).
