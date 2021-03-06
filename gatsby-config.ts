import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.renovacert.com.br`
  },
  plugins: ["gatsby-plugin-postcss","gatsby-plugin-image", "gatsby-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "backgrounds",
      "path": "./src/backgrounds/"
    },
    __key: "backgrounds"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/simbolo.svg',
    }
  }]
};

export default config;
