const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#115e99",
        modal: "rgba(0,0,0, 0.2)",
      },
    },
  },
  plugins: [],
};
