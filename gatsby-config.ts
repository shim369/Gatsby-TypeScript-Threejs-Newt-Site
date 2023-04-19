import type { GatsbyConfig } from "gatsby";
const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GATSBY BASE`,
    siteUrl: `https://gatsbybase.vercel.app/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GATSBY BASE`,
        short_name: `GatsbyBase`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: 'gatsby-source-newt',
      options: {
        enableListener: true,
        spaceUid: process.env.NEWT_SPACE_UID,
        token: process.env.NEWT_CDN_API_TOKEN,
        appUid: 'blog',
        models: [
          {
            uid: 'article',
            type: 'post',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Material Icons",
        ],
        display: "swap",
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src')
      }
    },
    "gatsby-plugin-sass"
  ]
};

export default config;
