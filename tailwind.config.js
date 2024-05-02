/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'custom-blue': '#3498db',
        'custom-green': '#2ecc71',
        'custom-red': '#e74c3c',
        // You can define as many colors as you need
      },
    },
  },
  plugins: [],
}

