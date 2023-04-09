/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    colors: {
      navy: '#000814',
      'mediumnavy': '#00296B',
      'lightnavy': '#003566',
    },
    
    extend: {

      
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'serif']

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

