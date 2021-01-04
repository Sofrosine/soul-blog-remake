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
      blue: colors.lightBlue,
      blueGray: colors.blueGray,
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
