/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'fira-code': ['Fira Code', 'monospace'],
      'pacifico': ['Pacifico', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
