
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Titilium: ["Titillium Web", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
