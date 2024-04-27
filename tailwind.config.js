/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-brown': '#AD8B73',
        'custom-pink': '#CEAB93',
        'custom-orange': '#E3CAA5',
        'custom-white': '#FFFBE9',
      },
      fontFamily: {
        'custom-font': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

