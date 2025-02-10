/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkblue: "#003B5C",
        customFont: "SofiaPro-Regular",
        Font: "SofiaPro-Bold",
        newYellow: "#FFEC2D",
        headerblue: "#023D5D",
        pagecolor: "#EDF3F6",
        svgcolor: "#E6EEF2",
      }
    },
  },
  plugins: [],
}

