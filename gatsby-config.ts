import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Renova - Certificação Digital`,
    siteUrl: `https://www.renovacert.com.br`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'backgrounds',
        path: './src/backgrounds/',
      },
      __key: 'backgrounds',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/simbolo.svg',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-WHKT8YNRWN', // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};

export default config;
