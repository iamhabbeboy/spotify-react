const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: "#181818",
        gray: colors.gray,
        green: colors.green,
      },
      fontSize: {
        tiny: ".70rem",
        sm: ".90rem",
        md: "1.2rem",
        lg: "1.9rem",
        xl: "2.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
