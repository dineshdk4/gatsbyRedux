/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jy76hkrbshn7`,
        accessToken:`lSwgNE8VIFZqVb3tYJUoL9jb45xjf0oFSRscnzUzcxw`,
        // host: `preview.contentful.com`,
      },
    },
    `gatsby-plugin-image`,
  ],
}
