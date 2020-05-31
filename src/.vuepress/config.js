module.exports = {
  title: "fmonper",
  description:
    "The bible of Counter Strike Global Offensive commands, settings and mods.",
  dest: "pages",
  base: "/",

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "script",
      {
        "data-ad-client": "ca-pub-5292448735527681",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
  ],

  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/blog/",
            layout: "BlogIndex",
            itemlayout: "Page",
            pagination: {
              lengthPerPage: 6,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tag",
            frontmatter: { title: "Tag" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 3,
            },
          },
        ],
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
        ga: "UA-100718537-5", // UA-00000000-0
      },
    ],
    [
      "disqus",
      {
        shortname: "csgoconsole",
        url: "https://csgoconsole.com",
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
  themeConfig: {
    logo: "/logo.png",
    domain: "https://csgoconsole.com",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
    ],
    displayAllHeaders: true, // Default: false
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.js"),
      require("css-prefers-color-scheme/postcss"),
      require("autoprefixer"),
    ],
  },
};
