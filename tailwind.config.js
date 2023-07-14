/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'palatino-linotype': ['Palatino Linotype', 'sans-serif'],
      'fira-code': ['Fira Code', 'monospace'],
      'pacifico': ['Pacifico', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'smoky-black': "#100C08"
      }
    },
  },
  plugins: [],
}

