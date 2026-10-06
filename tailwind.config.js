/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: 'var(--ink)',
        signal: 'var(--signal)',
        metal: 'var(--metal)',
        paper: 'var(--paper)',
      },
    },
  },
  plugins: [],
}