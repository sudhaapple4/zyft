/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '98': '32.6rem',
        '15':'4rem'
      },
      width:{
        '98': '99.99%',
        '15':'4rem'
      },
      colors: {
        'zorg': '#FF0000',
        'norg': '#ABABAB',
      },
    },
  },
  plugins: [],
}

