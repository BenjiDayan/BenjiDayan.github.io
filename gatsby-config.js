/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu`, `Staatliches`, `Audiowide`, `Pirata One`, `Roboto Mono`, `Mukta`, `Roboto Condensed`, `Trocchi`, `Bitter`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-native-web`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      }
    }
  ],
}
