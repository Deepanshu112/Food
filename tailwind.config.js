/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#E9E8E8',
        darkColor: '#000000',
        greenColor: '#1BA672',
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        AlegreyaSC:["Alegreya SC", "serif"],
        Alegreya:["Alegreya Sans", "sans-serif"],
        SourceSerif:["Source Serif 4", "serif"],
        Lato:["Lato", "sans-serif"],
        Roboto:["Roboto", "sans-serif"],
        RobotoCon :["Roboto Condensed", "serif"],



       },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}