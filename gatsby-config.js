module.exports = {
  siteMetadata: {
    title: `⚡️Framer motion in 7 minutes...I think`,
    description: `Slides for FEDucation lightning talk on Framer motion`,
    author: `Alexander Melo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
      },
    },
  ],
}
