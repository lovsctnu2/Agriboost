/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-green' : '#216E54',
        'custom-logingreen' : '#BAD2CA',
        'custom-darkgreen' : '#0C271D',
      }
    },
  },
  plugins: [],
}

