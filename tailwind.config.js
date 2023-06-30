/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        saol: ["SaolDisplay", "sans-serif"],
      },
      colors: {
        "default-yellow": "#D5A10E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
