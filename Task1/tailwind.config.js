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
        cgray: colors.trueGray,
        cindigo: colors.indigo,
        ctgray: colors.trueGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
