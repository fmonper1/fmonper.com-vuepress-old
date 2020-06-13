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

When you create a VuePress project, you'll be using the default theme which comes configured with many cool plugins such as auto-generated sidebars, a searchbox, active headers links, etc...

You can expand on this functionality using the many official and community made plugins that are available for VuePress. [This repo](https://github.com/vuepressjs/awesome-vuepress) contains a curated collection of VuePress plugins, themes and resources.

The default theme probably works for most use cases, but the fact that is uses Stylus as the CSS preprocessor (which I don't like), and that it's catered towards documentation websites made me want to create my own theme from scratch.

## Writing a custom theme

Making a theme from scratch for VuePress is pretty easy, so easy that all you need are [70 lines of code](https://github.com/ulivz/70-lines-of-vuepress-blog-theme).

If you want to lean more about theme development for VuePress, you should check our the ["writing a theme" page of the documentation](https://vuepress.vuejs.org/theme/writing-a-theme.html)

## Setting up the blog plugin

The setup is pretty easy, install the plugin and add it to the config file. I recommend that you read over the [plugin documentation](https://vuepress-theme-blog.ulivz.com/) to get a better understanding of how the plugin works and what it can do for you.

```js
npm install -D @vuepress/plugin-blog
```

Below you can find my configuration, it's pretty self explanatory, the layout value for the directories is the Vue component that shows our list of posts, and the scopeLayout is the component for the actual post.

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

## Extending functionality with plugins

If we create our theme from scratch, we won't benefit from all the functionality that comes with the default theme. Luckily, we can still use this functionality by installing it as plugins in our project and including it in our `config.js`.
