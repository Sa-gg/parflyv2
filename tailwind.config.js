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
          lightest: '#FF66000D', 
          lighter: '#ff660052',
          light: '#FF9933', 
          DEFAULT: '#FF6600',
          dark: '#CC5200', 
        },
        text: {
          DEFAULT: '#7a7a7a',
        },
        bg: {
          DEFAULT: '#F2F2F2'
        },
        darkBlue: {
          DEFAULT: '#003366'
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwindcss-motion'),  
    require('tailwindcss-intersect') ],
}