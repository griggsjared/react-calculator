const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      yellow: colors.orange[500]
    },
    fontFamily: {
      sans: ['Source Code Pro', 'sans-serif']
    }
  },
  plugins: [],
}
