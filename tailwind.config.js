/**
 * Alternative Tailwind Configuration: Pixel-Based Custom Properties
 * 
 * This configuration uses CSS custom properties with absolute pixel values
 * instead of em-based units for MAXIMUM isolation from host page styles.
 * 
 * Benefits:
 * - 100% immune to host page font-size changes
 * - No dependency on rem or em units
 * - Predictable sizing in any environment
 * - Easy to maintain and debug
 * 
 * Trade-offs:
 * - Less flexible for responsive typography
 * - Requires more CSS custom property definitions
 * - Slightly larger CSS output
 * 
 * To use this configuration:
 * 1. Rename current tailwind.config.js to tailwind.config.em.js (backup)
 * 2. Rename this file to tailwind.config.js
 * 3. Update main.css to include the CSS custom properties (see below)
 * 4. Rebuild your library: npm run build
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./playground/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ai-lib': {
          'text': {
            'default': '#333333',
            'muted': '#6c6c6c',
            'link': {
              'default': '#1d70b8',
              'hover': '#184b76',
            }
          },
          'btn': {
            'prompt': {
              'bg': {
                'default': '#e2eefa',
                'hover': '#c8daec',
              },
              'text': '#333333',
            },
            'icon-search': {
              'bg': {
                'default': '#2e3339',
                'hover': '#3c444d',
                'disabled': '#e7e7e7',
              },
              'icon': '#ffffff',
            },
            'header-search': {
              'bg': {
                'default': '#ffffff',
              }
            }
          },
          'input': {
            'bg': '#ffffff',
            'stroke': '#333333',
            'focus': '#35d2c5',
          },
          'modal': {
            'bg': '#ffffff',
            'footer': '#f5f5f5',
          },
          'message': {
            'user': {
              'bg': '#e2eefa',
              'text': '#333333',
            },
            'assistant': {
              'bg': '#f5f5f5',
              'text': '#333333',
            }
          },
          'error': {
            'bg': 'rgba(212, 53, 28, 0.16)',
            'border': '#d4351c',
            'text': '#333',
          }
        }
      },
      
      /**
       * Font Sizes: Pixel-based with CSS custom properties
       * These use absolute pixel values that are immune to host page font-size
       */
      fontSize: {
        'xs': ['var(--font-xs, 12px)', { lineHeight: 'var(--leading-xs, 16px)' }],
        'sm': ['var(--font-sm, 14px)', { lineHeight: 'var(--leading-sm, 20px)' }],
        'base': ['var(--font-base, 16px)', { lineHeight: 'var(--leading-base, 24px)' }],
        'lg': ['var(--font-lg, 18px)', { lineHeight: 'var(--leading-lg, 28px)' }],
        'xl': ['var(--font-xl, 20px)', { lineHeight: 'var(--leading-xl, 28px)' }],
        '2xl': ['var(--font-2xl, 24px)', { lineHeight: 'var(--leading-2xl, 32px)' }],
        '3xl': ['var(--font-3xl, 30px)', { lineHeight: 'var(--leading-3xl, 36px)' }],
        '4xl': ['var(--font-4xl, 36px)', { lineHeight: 'var(--leading-4xl, 40px)' }],
        '5xl': ['var(--font-5xl, 48px)', { lineHeight: 'var(--leading-5xl, 1)' }],
        '6xl': ['var(--font-6xl, 60px)', { lineHeight: 'var(--leading-6xl, 1)' }],
        '7xl': ['var(--font-7xl, 72px)', { lineHeight: 'var(--leading-7xl, 1)' }],
        '8xl': ['var(--font-8xl, 96px)', { lineHeight: 'var(--leading-8xl, 1)' }],
        '9xl': ['var(--font-9xl, 128px)', { lineHeight: 'var(--leading-9xl, 1)' }],
      },
      
      /**
       * Spacing: Pixel-based with CSS custom properties
       * Follows Tailwind's default scale but uses absolute pixels
       */
      spacing: {
        '0': '0px',
        'px': '1px',
        '0.5': 'var(--space-0-5, 2px)',
        '1': 'var(--space-1, 4px)',
        '1.5': 'var(--space-1-5, 6px)',
        '2': 'var(--space-2, 8px)',
        '2.5': 'var(--space-2-5, 10px)',
        '3': 'var(--space-3, 12px)',
        '3.5': 'var(--space-3-5, 14px)',
        '4': 'var(--space-4, 16px)',
        '5': 'var(--space-5, 20px)',
        '6': 'var(--space-6, 24px)',
        '7': 'var(--space-7, 28px)',
        '8': 'var(--space-8, 32px)',
        '9': 'var(--space-9, 36px)',
        '10': 'var(--space-10, 40px)',
        '11': 'var(--space-11, 44px)',
        '12': 'var(--space-12, 48px)',
        '14': 'var(--space-14, 56px)',
        '16': 'var(--space-16, 64px)',
        '20': 'var(--space-20, 80px)',
        '24': 'var(--space-24, 96px)',
        '28': 'var(--space-28, 112px)',
        '32': 'var(--space-32, 128px)',
        '36': 'var(--space-36, 144px)',
        '40': 'var(--space-40, 160px)',
        '44': 'var(--space-44, 176px)',
        '48': 'var(--space-48, 192px)',
        '52': 'var(--space-52, 208px)',
        '56': 'var(--space-56, 224px)',
        '60': 'var(--space-60, 240px)',
        '64': 'var(--space-64, 256px)',
        '72': 'var(--space-72, 288px)',
        '80': 'var(--space-80, 320px)',
        '96': 'var(--space-96, 384px)',
      },
      
      /**
       * Width: Pixel-based with CSS custom properties
       * Numeric values use absolute pixels, percentages preserved
       */
      width: {
        'auto': 'auto',
        'px': '1px',
        '0': '0px',
        '0.5': 'var(--space-0-5, 2px)',
        '1': 'var(--space-1, 4px)',
        '1.5': 'var(--space-1-5, 6px)',
        '2': 'var(--space-2, 8px)',
        '2.5': 'var(--space-2-5, 10px)',
        '3': 'var(--space-3, 12px)',
        '3.5': 'var(--space-3-5, 14px)',
        '4': 'var(--space-4, 16px)',
        '5': 'var(--space-5, 20px)',
        '6': 'var(--space-6, 24px)',
        '7': 'var(--space-7, 28px)',
        '8': 'var(--space-8, 32px)',
        '9': 'var(--space-9, 36px)',
        '10': 'var(--space-10, 40px)',
        '11': 'var(--space-11, 44px)',
        '12': 'var(--space-12, 48px)',
        '14': 'var(--space-14, 56px)',
        '16': 'var(--space-16, 64px)',
        '20': 'var(--space-20, 80px)',
        '24': 'var(--space-24, 96px)',
        '28': 'var(--space-28, 112px)',
        '32': 'var(--space-32, 128px)',
        '36': 'var(--space-36, 144px)',
        '40': 'var(--space-40, 160px)',
        '44': 'var(--space-44, 176px)',
        '48': 'var(--space-48, 192px)',
        '52': 'var(--space-52, 208px)',
        '56': 'var(--space-56, 224px)',
        '60': 'var(--space-60, 240px)',
        '64': 'var(--space-64, 256px)',
        '72': 'var(--space-72, 288px)',
        '80': 'var(--space-80, 320px)',
        '96': 'var(--space-96, 384px)',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        'full': '100%',
        'screen': '100vw',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      },
      
      /**
       * Height: Pixel-based with CSS custom properties
       */
      height: {
        'auto': 'auto',
        'px': '1px',
        '0': '0px',
        '0.5': 'var(--space-0-5, 2px)',
        '1': 'var(--space-1, 4px)',
        '1.5': 'var(--space-1-5, 6px)',
        '2': 'var(--space-2, 8px)',
        '2.5': 'var(--space-2-5, 10px)',
        '3': 'var(--space-3, 12px)',
        '3.5': 'var(--space-3-5, 14px)',
        '4': 'var(--space-4, 16px)',
        '5': 'var(--space-5, 20px)',
        '6': 'var(--space-6, 24px)',
        '7': 'var(--space-7, 28px)',
        '8': 'var(--space-8, 32px)',
        '9': 'var(--space-9, 36px)',
        '10': 'var(--space-10, 40px)',
        '11': 'var(--space-11, 44px)',
        '12': 'var(--space-12, 48px)',
        '14': 'var(--space-14, 56px)',
        '16': 'var(--space-16, 64px)',
        '20': 'var(--space-20, 80px)',
        '24': 'var(--space-24, 96px)',
        '28': 'var(--space-28, 112px)',
        '32': 'var(--space-32, 128px)',
        '36': 'var(--space-36, 144px)',
        '40': 'var(--space-40, 160px)',
        '44': 'var(--space-44, 176px)',
        '48': 'var(--space-48, 192px)',
        '52': 'var(--space-52, 208px)',
        '56': 'var(--space-56, 224px)',
        '60': 'var(--space-60, 240px)',
        '64': 'var(--space-64, 256px)',
        '72': 'var(--space-72, 288px)',
        '80': 'var(--space-80, 320px)',
        '96': 'var(--space-96, 384px)',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        'full': '100%',
        'screen': '100vh',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      },
      
      /**
       * Border Radius: Pixel-based
       */
      borderRadius: {
        'none': '0px',
        'sm': 'var(--radius-sm, 2px)',
        'DEFAULT': 'var(--radius, 4px)',
        'md': 'var(--radius-md, 6px)',
        'lg': 'var(--radius-lg, 8px)',
        'xl': 'var(--radius-xl, 12px)',
        '2xl': 'var(--radius-2xl, 16px)',
        '3xl': 'var(--radius-3xl, 24px)',
        'full': '9999px',
      },
    },
  },
  plugins: [],
  important: false,
}
