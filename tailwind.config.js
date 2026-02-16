/** @type {import('tailwindcss').Config} */
export default {
    theme: {
    extend: {
      keyframes: {
        'slide-to-bounce-animate': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '60%': { transform: 'translateY(-10px)', opacity: '1' },
          '80%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(0)' },
        },
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
        'slide-to-bounce-animate': 'slide-to-bounce-animate 0.8s ease-out forwards',
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

