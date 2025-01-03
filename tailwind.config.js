/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#133E87',
        'secondary': '#608BC1',
        'third': '#CBDCEB',
        'fourth': '#F3F3E0',
        'white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

