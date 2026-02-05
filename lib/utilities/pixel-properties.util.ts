/**
 * CSS Custom Properties for Pixel-Based Isolation
 * 
 * This file defines all the CSS custom properties used in tailwind.config.px.js
 * Add these to your Shadow DOM base styles for maximum isolation.
 * 
 * Usage in chat-modal-widget.tsx:
 * 
 * const base = document.createElement("style");
 * base.textContent = `
 *   :host {
 *     // ... existing styles ...
 *   }
 * ` + pixelBasedProperties; // Import and append this
 * 
 * Or include in main.css for global availability within Shadow DOM.
 */

export const pixelBasedProperties = `
  /* Font Size Scale (absolute pixels) */
  --font-xs: 12px;
  --font-sm: 14px;
  --font-base: 16px;
  --font-lg: 18px;
  --font-xl: 20px;
  --font-2xl: 24px;
  --font-3xl: 30px;
  --font-4xl: 36px;
  --font-5xl: 48px;
  --font-6xl: 60px;
  --font-7xl: 72px;
  --font-8xl: 96px;
  --font-9xl: 128px;

  /* Line Height Scale (absolute pixels) */
  --leading-xs: 16px;
  --leading-sm: 20px;
  --leading-base: 24px;
  --leading-lg: 28px;
  --leading-xl: 28px;
  --leading-2xl: 32px;
  --leading-3xl: 36px;
  --leading-4xl: 40px;
  --leading-5xl: 1;
  --leading-6xl: 1;
  --leading-7xl: 1;
  --leading-8xl: 1;
  --leading-9xl: 1;

  /* Spacing Scale (absolute pixels) */
  /* Based on 4px base unit */
  --space-0-5: 2px;   /* 0.5 * 4px */
  --space-1: 4px;     /* 1 * 4px */
  --space-1-5: 6px;   /* 1.5 * 4px */
  --space-2: 8px;     /* 2 * 4px */
  --space-2-5: 10px;  /* 2.5 * 4px */
  --space-3: 12px;    /* 3 * 4px */
  --space-3-5: 14px;  /* 3.5 * 4px */
  --space-4: 16px;    /* 4 * 4px */
  --space-5: 20px;    /* 5 * 4px */
  --space-6: 24px;    /* 6 * 4px */
  --space-7: 28px;    /* 7 * 4px */
  --space-8: 32px;    /* 8 * 4px */
  --space-9: 36px;    /* 9 * 4px */
  --space-10: 40px;   /* 10 * 4px */
  --space-11: 44px;   /* 11 * 4px */
  --space-12: 48px;   /* 12 * 4px */
  --space-14: 56px;   /* 14 * 4px */
  --space-16: 64px;   /* 16 * 4px */
  --space-20: 80px;   /* 20 * 4px */
  --space-24: 96px;   /* 24 * 4px */
  --space-28: 112px;  /* 28 * 4px */
  --space-32: 128px;  /* 32 * 4px */
  --space-36: 144px;  /* 36 * 4px */
  --space-40: 160px;  /* 40 * 4px */
  --space-44: 176px;  /* 44 * 4px */
  --space-48: 192px;  /* 48 * 4px */
  --space-52: 208px;  /* 52 * 4px */
  --space-56: 224px;  /* 56 * 4px */
  --space-60: 240px;  /* 60 * 4px */
  --space-64: 256px;  /* 64 * 4px */
  --space-72: 288px;  /* 72 * 4px */
  --space-80: 320px;  /* 80 * 4px */
  --space-96: 384px;  /* 96 * 4px */

  /* Border Radius Scale (absolute pixels) */
  --radius-sm: 2px;
  --radius: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
`;

// CSS string for direct insertion into main.css
export const pixelBasedPropertiesCSS = `
:host {
  /* Font Size Scale (absolute pixels) */
  --font-xs: 12px;
  --font-sm: 14px;
  --font-base: 16px;
  --font-lg: 18px;
  --font-xl: 20px;
  --font-2xl: 24px;
  --font-3xl: 30px;
  --font-4xl: 36px;
  --font-5xl: 48px;
  --font-6xl: 60px;
  --font-7xl: 72px;
  --font-8xl: 96px;
  --font-9xl: 128px;

  /* Line Height Scale (absolute pixels) */
  --leading-xs: 16px;
  --leading-sm: 20px;
  --leading-base: 24px;
  --leading-lg: 28px;
  --leading-xl: 28px;
  --leading-2xl: 32px;
  --leading-3xl: 36px;
  --leading-4xl: 40px;
  --leading-5xl: 1;
  --leading-6xl: 1;
  --leading-7xl: 1;
  --leading-8xl: 1;
  --leading-9xl: 1;

  /* Spacing Scale (absolute pixels) */
  --space-0-5: 2px;
  --space-1: 4px;
  --space-1-5: 6px;
  --space-2: 8px;
  --space-2-5: 10px;
  --space-3: 12px;
  --space-3-5: 14px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-9: 36px;
  --space-10: 40px;
  --space-11: 44px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-28: 112px;
  --space-32: 128px;
  --space-36: 144px;
  --space-40: 160px;
  --space-44: 176px;
  --space-48: 192px;
  --space-52: 208px;
  --space-56: 224px;
  --space-60: 240px;
  --space-64: 256px;
  --space-72: 288px;
  --space-80: 320px;
  --space-96: 384px;

  /* Border Radius Scale (absolute pixels) */
  --radius-sm: 2px;
  --radius: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
}
`;
