require('dotenv').config({
  path: '.env',
});
const config = require('./data/SiteConfig')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    subtitle: config.siteSubtitle
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'wp.jsyachtclub.com',
        protocol: 'http',
        hostingWPCOM: false,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENTID,
          wpcom_user: process.env.WORDPRESS_USERNAME,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus"
        ],
        searchAndReplaceContentUrls: {
          sourceUrl: "http://wp.jsyachtclub.com",
          replacementUrl: "http://jsyachtclub.com",
        },
      }
    }
  ]
}