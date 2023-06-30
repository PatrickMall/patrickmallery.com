/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#edf2f4',
      'grey': '#91a1a4',
      'blue': '#22afdb',
      'green': '#00cc99',
      'black': '#041316'
    },
    fontFamily: {
      'header': ['Prompt', 'sans-serif'],
      'body': ['Lato','sans-serif']
    },
  },
  plugins: [],
}

