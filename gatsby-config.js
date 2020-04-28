require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://bankio.co.uk/openbanking/playground/',
    title: 'bankIO PSD2/OpenBanking API Playground',
    description:
      'Test the PSD2/OpenBanking APIs offered by ASPSPs'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `playground-content`,
        path: `${__dirname}/content`,
      },
    },
    // {
    //   // resolve: '@stackbit/gatsby-plugin-menus',
    //   resolve: 'gatsby-plugin-menus',
    //   options: {
    //     // static definition of menu items (optional)
    //     menus: {
    //       main: // identifier of menu container
    //         [
    //         ]
    //     },
    //     // Gatsby node types from which we extract menus (optional, see "Advanced usage")
    //     sourceNodeType: 'Mdx', 
    //     // the relative node path where we can find the 'menus' container (optional)
    //     sourceDataPath: 'frontmatter',
    //     // the relative node path where we can find the page's URL (required)
    //     sourceUrlPath: 'fields.slug',
    //     // custom menu loading function (optional)
    //     // menuLoader: customLoaderFunction,
    //     // the property to use for injecting to the page context (optional, see "Advanced usage")
    //     // pageContextProperty: 'menus',
    //   },
    // },
  ]
};
