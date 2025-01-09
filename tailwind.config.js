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
        'secondary': '#28294D',
        'third': '#4F4E6E',
        'fourth': '#000048',
        'button': '#5555ff',
        'white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

