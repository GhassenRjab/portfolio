module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Strata by HTML5 UP",
    author: "Hunter Chang",
    description: "A Gatsby.js Starter based on Strata by HTML5 UP",
    siteUrl: "https://www.ghassenrjab.tn",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ghassen Rjab's portfolio website",
        short_name: "Ghassen Rjab",
        start_url: "/",
        background_color: "#555259",
        theme_color: "#565952",
        display: "standalone",
        icon: "src/assets/images/website-icon.png",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-142190723-1",
        head: true,
      },
    },
  ],
};
