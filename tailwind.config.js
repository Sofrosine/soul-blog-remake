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
        main: {
          DEFAULT: "#FAFAFA",
        },
        warmGray: "rgb(115 115 115)",

        barColor: "#333",
        yellow: "#f7df1e",
        orange: "#FFA611",
        orangeDark: "#F6820D",
        red: "#e43e17",
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
