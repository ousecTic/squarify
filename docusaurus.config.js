const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Squarify",
  tagline: "Squarify provides Free tutorial over GED math",
  url: "https://squarify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Squarify", // Usually your GitHub org/user name.
  projectName: "Squarify", // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    navbar: {
      title: "Squarify",

      links: [
        {
          to: "docs/basic-algebra/basic-algebra-1",
          activeBasePath: "tutorials",
          label: "Tutorials",
          position: "left",
        },
        {
          to:
            "https://docs.google.com/forms/d/e/1FAIpQLSevIBQPyKWi25Eym5AB1dneEgnOI9o_s9EqIQi9My9KxZ_Z1w/viewform",
          label: "Feedback",
          position: "right",
        },
      ],
    },

    plugins: ["@docusaurus/plugin-google-analytics"],
    themeConfig: {
      googleAnalytics: {
        trackingID: "G-FPX6D1EJ4D",
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
    },

    footer: {
      style: "dark",
      links: [],
      copyright: ` GED® is a registered trademark of the American Council on Education (ACE) and administered exclusively by GED Testing Service LLC under license. This content is not endorsed or approved by ACE or GED Testing Service. 
      `,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.

          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
