/** @type {import('tailwindcss').Config} */
export default {
    theme: {
    extend: {
      keyframes: {
        'slide-to-bounce-animate': {
          '0%, 40%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
          '60%': { transform: 'translateY(-2px)' },
          '70%, 100%': { transform: 'translateY(0)' },
        },
        'dot-animate': {
          '0%':   { content: '"."' },
          '25%':  { content: '".."'},
          '50%':  { content: '"..."'},
          '75%':  { content: '"."' },
          '100%': { content: '".."' },
        },
        'skeleton-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: 'calc(200% + 100%) 0' },
        },
      },
      animation: {
        'dot-animate': 'dot-animate 1.5s steps(1,end) infinite',
        'slide-to-bounce-animate': 'slide-to-bounce-animate 2s ease-in-out infinite',
        'skeleton-shimmer': 'skeleton-shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  important: false,
}

