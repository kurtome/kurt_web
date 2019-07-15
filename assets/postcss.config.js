// postcss.config.js
const purgecss = require('postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    '../lib/kurt_web/templates/**/*.html.eex',
    '../lib/kurt_web/templates/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('precss'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}