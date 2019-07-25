// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    '../lib/kurt_web/templates/**/*.html.eex',
    '../lib/kurt_web/templates/**/*.html'
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  // // Include any special characters you're using in this regular expression
  // extractors: [
  //   {
  //     extractor: class PurgeFromJs {
  //       static extract(content) {
  //         // return array of css selectors
  //         return content.match(/[A-Za-z0-9-_:/]+/g) || []
  //       }
  //     },
  //     extensions: ["html", "html.eex"]
  //   }
  // ]

})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('precss'),
    require('tailwindcss'),
    require('postcss-nesting'),
    require('postcss-color-mod-function'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}