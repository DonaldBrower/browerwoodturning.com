module.exports = {
  siteMetadata: {
    siteUrl: "https://www.browerwoodturning.com",
    title: "Brower Wood Turning",
    description:
      "Purchase stunning hand turned pens as gifts, or for yourself.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // defaultLayouts: {
        // posts: require.resolve("./src/components/post-layout.js"),
        // },
      },
    },
  ],
};
