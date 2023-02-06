/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bluePortfolio: "#1d304b",
        blackPortfolio: "#1d304b",
        orangePortfolio: "#ff9301",
        greenPortfolio: "#00FCA8",
        iconColor: "#1cdaff",
        hoverColor: "#041834",
        test: "#03839c",
      },
      backgroundImage: {
        "portfolio-const":
          "linear-gradient(to right bottom, rgba(28, 218, 255, 0.6), hsla(190, 100%, 55%, 0.6)), url('/programming.jpg')",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      body: ['"Carter One"', "sans-serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  plugins: [],
};
