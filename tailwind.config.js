const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./layouts/**/*.{js,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", fontFamily.sans],
        sve: ["Sedgwick Ave", fontFamily.sans],
      },
      colors: {},
    },
  },
  plugins: [],
};
