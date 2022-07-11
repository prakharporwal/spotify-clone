/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: { player: "1fr 2fr 1fr" },
      colors: {
        mygreen: "#1ed760",
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
      },
    },
  },
  plugins: [],
};
