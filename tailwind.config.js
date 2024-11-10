/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkPurple : '#4528B6',
        perfume : '#d9d2fa',
        navyBlue: '#29147B',
        darkBlue: '#29186D',
      },
      fontFamily : {
        dhyana: ['Dhyana', 'sans-serif'],
        cinzel: ['Cinzel', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow : {
        custom : 'var(--box-shadow)',
      },
      screens: {
        'max-xl' : { 'max': '1300px' },
        'max-lg' : { 'max': '1100px' },
        'max-md' : { 'max': '860px' },
        'max-sm' : { 'max': '550px' },
      }
    },
  },
  plugins: [],
}

