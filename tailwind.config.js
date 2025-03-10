/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-superdark-green' : '##0C271D',
        'custom-dark-green' : '#144232',
        'custom-green' : '#216E54',
        'custom-yellow' : '#8A7E32',
        'custom-login-green' : '#BAD2CA',
        'custom-light-green' : '#E9F1EE',
        'custom-real-dark-green' : '#0C271D',
      }
    },
  },
  plugins: [],
}

