/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00002E',
        'secondary': '#000048',
        'third': '#E5E5EA',
        'button': '#5555ff',
        'white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

