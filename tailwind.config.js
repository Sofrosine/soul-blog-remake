const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'ui-sans-serif'],
      poppins: ['Poppins', 'ui-sans-serif'],
    },
    colors: {
      black: colors.black,
      blue: colors.lightBlue,
      blueGray: colors.blueGray,
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      main: {
        DEFAULT: '#FAFAFA',
      },
      warmGray: colors.warmGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
