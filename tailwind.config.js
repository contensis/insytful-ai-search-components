/** @type {import('tailwindcss').Config} */
export default {
    theme: {
    extend: {
      keyframes: {
        'dot-animate': {
          '0%':   { content: '"."' },
          '25%':  { content: '".."'},
          '50%':  { content: '"..."'},
          '75%':  { content: '"."' },
          '100%': { content: '".."' },
        },
      },
      animation: {
        'dot-animate': 'dot-animate 1.5s steps(1,end) infinite',
      },
    },
  },
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./playground/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  important: false,
}

