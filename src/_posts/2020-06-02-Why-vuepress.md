---
title: Blogging With Vuepress
tag:
  - vue
  - vuepress
date: 2020-06-02
---

When it was time to redesign my personal website, I wanted to step it up a bit from my old and boring plain HTML website. I wanted to include a fully functional blog but didn't want to create a REST API and a back-office to create the content. I started looking into static site generators as a possible solution when I stumbled upon Vuepress.

<!-- more -->

## What is VuePress?

From the documentation: _"Vuepress is a minimalistic static site generator with a Vue-powered theming system and Plugin API, and a default theme optimized for writing technical documentation. It was created to support the documentation needs of Vue’s own sub projects."_

### What about blogging?

The default VuePress installation isn't meant to be used for blogging out of the box, but the VuePress team has created an [official blog plugin](https://vuepress-theme-blog.ulivz.com/) which generates pages for our blog index, tags and paginates our content.

## The default theme

When you create a VuePress project, you'll be using the default theme which comes configured with many cool plugins such as auto-generated sidebars, a search box, active headers links, etc...

You can expand on this functionality using the many official and community made plugins that are available for VuePress. [This repo](https://github.com/vuepressjs/awesome-vuepress) contains a curated collection of VuePress plugins, themes and resources.

The default theme probably works for most use cases, but the fact that is uses Stylus as the CSS pre-processor (which I don't like), and that it's catered towards documentation websites made me want to create my own theme from scratch.

### Extending the default theme

Extending a theme requires us to create some specific folders for VuePress to find our custom components. The folder structure I'm using looks something like this:

```
.
├── src
│   ├── .vuepress (Optional)
│   │   ├── theme
│   │   │   ├── global-components (Optional)
│   │   │   ├── components (Optional)
│   │   │   │   ├── BlogIndex.vue
│   │   │   │   ├── Post.vue
│   │   │   │   ├── Tags.vue
│   │   │   │   ├── Tag.vue
│   │   │   │   └── Layout.vue
│   │   │   ├── public (Optional)
│   │   │   ├── styles (Optional)
│   │   │   │   ├── index.styl
│   │   │   │   └── palette.styl
│   │   ├── config.js (Optional)
│   │   └── enhanceApp.js (Optional)
│   │
│   ├── README.md (your index page)
│   ├── _posts
│   │   ├── your_first_post.md
│   │   └── your_second_post.md
│
└── package.json
```

All of our theme configuration will reside inside `src/.vuepress`. To extend the default theme we will include the following in our `enhanceApp.js`

```js
module.exports = {
  extend: "@vuepress/theme-default",
};
```

We can do the same with any VuePress theme, if you want to learn more, check the [theme inheritance documentation](https://vuepress.vuejs.org/theme/inheritance.html).

## Writing a custom theme

Developing a custom theme is out of the scope of this post, but if you want to lean more about theme development for VuePress, you should check our the [official documentation](https://vuepress.vuejs.org/theme/writing-a-theme.html)

Making a theme from scratch for VuePress is pretty easy, so easy that all you need are [70 lines of code](https://github.com/ulivz/70-lines-of-vuepress-blog-theme).

## Setting up the blog plugin

The setup is pretty easy, install the plugin and add it to the config file. I recommend that you read over the [plugin documentation](https://vuepress-theme-blog.ulivz.com/) to get a better understanding of how the plugin works and what it can do for you.

```js
npm install -D @vuepress/plugin-blog
```

Below you can find an example configuration, it's pretty self explanatory, the layout value for the directories is the Vue component that shows our list of posts, and the scopeLayout is the component for the actual post.

```js
plugins: [
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
            scopeLayout: "Post",v
            itemPermalink: "/post/:slug.html",
            pagination: {
              lengthPerPage: 3,
              layout: "BlogIndex",
            },
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            // Layout of the `entry page`
            layout: "Tags",
            // Layout of the `scope page`
            scopeLayout: "Tag",
            pagination: {
              lengthPerPage: 3,
              layout: "Tags",
            },
          },
        ],
      },
    ],
```

The plugin will now look for markdown files inside our `src/_posts` folder and will display them in `www.yousupercooldomain.com/blog`.

You can check out the [repo](https://github.com/fmonper1/fmonper.com/) to see the project structure, as well as the [BlogIndex Component](https://github.com/fmonper1/fmonper.com/blob/master/src/.vuepress/theme/layouts/BlogIndex.vue) and the [Post Component](https://github.com/fmonper1/fmonper.com/blob/master/src/.vuepress/theme/layouts/Post.vue).

We need to add some Frontmatter to our pages written in Markdown so that the Blog plugin can filter and paginate our content. The basic frontmatter appears the first thing in a .md file and includes a title, some tags and a date:

```toml
---
title: Blogging With Vuepress
tag:
  - vue
  - vuepress
date: 2020-06-02
---
```

## Extending functionality with plugins

If we create our theme from scratch, we won't benefit from all the functionality that comes with the default theme. Luckily, we can still use this functionality by installing it as plugins in our project and including it in our `config.js`.

Lets install the smooth-scroll, search box and sitemap plugins:

```
npm i -D vuepress-plugin-smooth-scroll @vuepress/plugin-search vuepress-plugin-sitemap vuepress-plugin-social-share
```

Now to include them in our theme, we must add them to our `config.js`.

```js
plugins: [
  ["vuepress-plugin-smooth-scroll"],
  [
    "@vuepress/search",
    {
      searchMaxSuggestions: 10,
    },
  ],
  [
    "sitemap",
    {
      hostname: "https://fmonper.com",
    },
  ],
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
];
```

### Using the search box

Now that the plugin is installed and declared in our config, we can import the component in any of our .vue files.

```js
import SearchBox from "@SearchBox";

export default {
  name: "NavBar",
  components: { SearchBox },
};
```

### Using the social share

With the plugin in our `config.js` we can simply use the component anywhere and it will display a list of social icons.

```js
<social-share />
```

## Wrapping it up

We've seen how to install and setup a blog using VuePress, how to configure the blog plugin to display the markdown files in our `_posts` folder, how to create pages for our tags, and how to use functionality from the default theme in our custom theme.
