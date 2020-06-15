module.exports = {
  title: "fmonper",
  description: "Hi, im a full-stack developer from the Canary Islands",
  dest: "pages",
  base: "/",

  head: [
    [
      "link",
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
      },
    ],
    // [
    //   "script",
    //   {
    //     "data-ad-client": "ca-pub-5292448735527681",
    //     async: true,
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //   },
    // ],
  ],

  plugins: [
    ["vuepress-plugin-smooth-scroll"],
    ["vuepress-plugin-table-of-contents"],
    [
      "social-share",
      {
        networks: ["twitter", "facebook", "reddit", "telegram", "email"],
        twitterUser: "big_fofer",
        fallbackImage: "/social-share.png",
        autoQuote: true,
        noGlobalSocialShare: true,
      },
    ],
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".toc-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    [
      "@vuepress/blog",
      {
        globalPagination: {
          lengthPerPage: 6,
        },
        directories: [
          {
            title: "Blog",
            id: "post",
            dirname: "_posts",
            path: "/blog/",
            // Layout of the `entry page`
            layout: "BlogIndex",
            // Layout of the `scope page`
            scopeLayout: "",
            itemPermalink: "/post/:slug.html",
            pagination: {
              lengthPerPage: 3,
              layout: "BlogIndex",
            },
          },

          {
            title: "Projects",
            id: "projects",
            dirname: "_projects",
            path: "/projects/",
            // Layout of the `entry page`
            layout: "BlogIndex",
            // Layout of the `scope page`
            scopeLayout: "Page",
            itemPermalink: "/project/:slug.html",
            pagination: {
              lengthPerPage: 3,
              layout: "BlogIndex",
            },
          },
        ],
        frontmatters: [
          {
            title: "",
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            // Layout of the `entry page`
            layout: "Tags",
            // Layout of the `scope page`
            scopeLayout: "BlogIndex",
            pagination: {
              lengthPerPage: 3,
              layout: "Tags",
            },
          },
        ],
      },
    ],
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
    [
      [
        "vuepress-plugin-canonical",
        {
          baseURL: "https://fmonper.com", // base url for your canonical link, optional, default: ''
          stripExtension: true, // strip '.html' , optional, default: false
        },
      ],
      "seo",
      {
        image: ($page, $site) => {
          if ($page.frontmatter.image) {
            return (
              ($site.themeConfig.domain || "") + "/" + $page.frontmatter.image
            );
          } else {
            return ($site.themeConfig.domain || "") + "/icon.png";
          }
        },
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://fmonper.com",
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-100718537-8", // UA-00000000-0
      },
    ],
    [
      "disqus",
      {
        shortname: "fmonpercom",
        url: "https://fmonper.com",
      },
    ],
    [
      "vuepress-plugin-code-copy",
      {
        align: "top",
        color: "#fff",
      },
    ],
  ],
  postcss: {
    plugins: [require("tailwindcss")("./tailwind.js"), require("autoprefixer")],
  },
};
