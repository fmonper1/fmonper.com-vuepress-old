<template>
  <div>
    <nav id="breadcrumb" class="w-full rounded-sm pt-8 pb-2 px-0 custom-font">
      <router-link
        :class="`breadcrumb  ${
          index + 1 === bread.length
            ? 'text-accent font-normal'
            : 'text-white font-bold'
        }`"
        class="ital"
        v-for="(crumb, index) in bread"
        :key="crumb.path"
        :to="crumb.path"
      >
        {{ crumb.title }} {{ index + 1 != bread.length ? ">" : "" }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
    bread() {
      const parts = this.$page.path.split("/");
      if (!parts[parts.length - 1].length) {
        parts.pop();
      }
      let link = "";
      const crumbs = [];
      for (let i = 0; i < parts.length; i++) {
        link += parts[i];
        const page = this.$site.pages.find(
          (el) => el.path === link || el.path === link + "/"
        );
        link += "/";
        if (page != null) {
          crumbs.push({
            path: page.path,
            title: page.frontmatter.breadcrumb || page.title,
          });
        }
      }
      return crumbs;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
