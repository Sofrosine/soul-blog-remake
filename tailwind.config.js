const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./data/**/*.{js,ts,jsx,tsx,json,mdx}",
  ],
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
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
