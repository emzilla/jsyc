const config = require('./data/SiteConfig')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
  },
  pathPrefix: "/jsyc",
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ]
}