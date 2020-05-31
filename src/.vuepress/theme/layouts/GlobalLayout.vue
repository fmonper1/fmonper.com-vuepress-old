<template>
  <div id="global-layout">
    <header class="bg-section p-4 text-paragraph flex justify-between">
      <router-link to="/">
        {{ $site.title }}
      </router-link>
      <nav>
        <router-link to="/blog/" class="mr-4">Blog</router-link>
        <router-link to="/tag/">Tag</router-link>
      </nav>
    </header>
    <DefaultGlobalLayout />
    <footer style="background-color: #ddd;">
      <a href="https://github.com/fmonper1/fmonper.com">
        Github
      </a>
      · Powered by VuePress
    </footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout },
};
</script>

<style lang="scss">
@import "../styles/styles.scss";
</style>
