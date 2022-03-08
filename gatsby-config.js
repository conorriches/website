const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true
            },
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: 'notes from the hackerspace', // website title
              separator: '|', // default
              author: 'Conor',
              background: '#00d4ff', // path to 1200x630px file or hex code, defaults to black (#000000)
              fontColor: '#ffffff', // defaults to white (#ffffff)
              titleFontSize: 60, // default
              subtitleFontSize: 40, // default
              fontStyle: 'monospace', // default
              useFrontmatterSlug: false // default, if true it will use the slug defined in the post frontmatter
            },
          },
        ],
      },
    },

  ],
};
