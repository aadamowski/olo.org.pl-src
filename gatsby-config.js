module.exports = {
  plugins: [
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
    },
  ],
  // For plain https://aadamowski.github.io/olo.org.pl/ :
  // pathPrefix: `/olo.org.pl`,
  siteMetadata: {
    title: `Aleksander Adamowski`,
    description: `Aleksander Adamowski. Professional electronic brain surgeon.`,
    author: `Aleksander Adamowski`,
    siteUrl: `https://olo.org.pl`,
    social: [
      {
        name: `github`,
        url: `https://github.com/aadamowski`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/olo`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/aadamowski/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/aleksanderadamowski/`,
      },
    ],
  },
}
