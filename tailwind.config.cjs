/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        bluePortfolio: "#1d304b",
        blackPortfolio: "#1d304b",
        orangePortfolio: "#ff9301",
        greenPortfolio: "#00FCA8",
        iconColor: "#1cdaff",
        hoverColor: "#041834",
        test: "#03839c"
        
      },
     
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      body: ['"Carter One"','sans-serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
  },
  plugins: [],
}
