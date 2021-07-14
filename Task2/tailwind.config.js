const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'img1' : "url('/assets/img1.jpg')",
        'img2' : "url('/assets/img2.jpg')",
        'img3' : "url('/assets/img3.jpg')",
      }),
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
