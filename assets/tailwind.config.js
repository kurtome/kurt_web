// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      'title': ['Averia Serif Libre', 'serif'],
      'ui': ['Roboto Slab', 'serif'],
      'body': ['Roboto Slab', 'sans-serif'],
      'code': ['Roboto Mono', 'sans-serif']
    },
    extend: {
      colors: {
        'body': colors.orange['100'],
        'body-contrast': colors.blue['100']
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [],
}