/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#FF9933', 
          DEFAULT: '#FF6600',
          dark: '#CC5200', 
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwindcss-motion'),  
    require('tailwindcss-intersect') ],
}