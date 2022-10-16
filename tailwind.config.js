/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          text: {
            "ds-blue": "hsl(238, 29%, 16%)",
            "soft-red": "hsl(14, 88%, 65%)",
          },
          gradient: {
            "soft-violet": "hsl(273, 75%, 66%)",
            "soft-blue": "hsl(240, 73%, 65%)",
          },
        },
        neutral: {
          text: {
            100: "hsl(240, 6%, 50%)",
            200: "hsl(237, 12%, 33%)",
          },
          dividers: {
            100: "hsl(240, 5%, 91%)",
          },
        },
      },
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  plugins: [],
};
