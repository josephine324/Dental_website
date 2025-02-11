/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkblue: "#003B5C",
        newYellow: "#FFEC2D",
        headerblue: "#023D5D",
        pagecolor: "#EDF3F6",
        svgcolor: "#E6EEF2",
        meetYellow: "#FFF596",
        greybg: "#F6F4F3",
        anothercolor: "#003757",
        footercolor: "#002748",
        officecolor: "7F9AAA",
      },
      fontFamily: {
        sofiaRegular: ["SofiaPro-Regular", "sans-serif", "Arial","Helvetica"],
        sofiaBold: ["SofiaPro-Bold", "sans-serif","sans-serif", "Arial","Helvetica"],
      },
    },
  },
  plugins: [],
}

