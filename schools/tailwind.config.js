/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      vl: {
        50: "#eff2fe",
        100: "#e3e7fc",
        200: "#ccd3f9",
        300: "#acb5f5",
        400: "#8b8fee",
        500: "#736fe5",
        600: "#6355d8",
        700: "#5344be",
        800: "#443a99",
        900: "#3a357a",
        950: "#241f47",
      },
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#000000",
      white: "#f8fafc",
    },
    fontFamily: {
      Helvetica: ["Montserrat-Bold", "Helvetica"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

