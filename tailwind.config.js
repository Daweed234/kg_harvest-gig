/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
  
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},

        'dm': {'max': '376px'},
      },
      colors: {
        'custom-blue': '#3498db',
        'custom-green': '#2ecc71',
        'custom-red': '#e74c3c',
      },
      boxShadow:{
        'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

