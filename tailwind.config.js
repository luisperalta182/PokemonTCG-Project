/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'primaryColor': '#f7b500',
        'secondaryColor': '#0075BE',
        'thirdColor': '#FFCC00',
        'bgColor': '#fff',
        'bannerColor': '#000835',
      },
      spacing: {
        '40': '40px' 
      },
      fontSize: {
        '1xl': '25px',
        '2xl': '40px',
      }
    },
  },
  plugins: [],
}
