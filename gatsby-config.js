module.exports = {
  siteMetadata: {
    title: "Blog of Mukesh Soni",
    author: "Mukesh Soni",
    description: "You might find something about Mukesh Soni here. Or not.",
    siteUrl: "https://unstack.in"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          // Replaces “dumb” punctuation marks with “smart” punctuation marks using the retext-smartypants plugin.
          "gatsby-remark-smartypants"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ]
};
