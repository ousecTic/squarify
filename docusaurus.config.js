const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Ged School",
  tagline: "GED School Provides Free tutorial over Math",
  url: "https://ged-school.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "GED school", // Usually your GitHub org/user name.
  projectName: "ged_school", // Usually your repo name.
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
      title: "Ged School",

      links: [
        {
          to: "docs/basic-algebra/basic-algebra-1",
          activeBasePath: "tutorials",
          label: "Tutorials",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "right" },
      ],
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
