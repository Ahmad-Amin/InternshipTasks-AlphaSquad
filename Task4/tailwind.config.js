module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'shoeImage': "url('/assets/Rectangle 5shoes.png')",
      }),
      fontFamily:{
        'WorkSans': ['Work Sans','sans-serif']
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
