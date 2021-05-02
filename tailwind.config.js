const colors = require("tailwindcss/colors");
module.exports = {
  mode : "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coolGray: colors.coolGray,
        emarland: colors.emerald,
        lightBlue: colors.lightBlue,
        trueGray: colors.trueGray,
        wramGray: colors.warmGray,
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
