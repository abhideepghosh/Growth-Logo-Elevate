/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        keyframes: {
          'reveal-up': {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
        },
        animation: {
          'reveal-up': 'reveal-up 1s ease-out forwards',
        },
    },
  },
  plugins: [],
}
