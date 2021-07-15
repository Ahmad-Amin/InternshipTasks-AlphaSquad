const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Inter': ['Inter', 'sans-serif']
      },
      colors:{
        cindigo: colors.indigo,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
