const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000000",
        blue: "rgb(96 165 250)",
        blueGray: "rgb(82 82 82)",
        transparent: "transparent",
        current: "currentColor",
        white: "#fafafa",
        yellow: "rgb(247 223 30)",
        orange: "rgb(255 166 17)",
        orangeDark: "rgb(246 130 13)",
        red: "rgb(228 62 23)",
        main: {
          DEFAULT: "#FAFAFA",
        },
        warmGray: "rgb(115 115 115)",
        barColor: "#333",
      },
      background: {
        red: colors.red,
        black: "#000000",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "ui-sans-serif"],
      poppins: ["Poppins", "ui-sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
