<template>
  <div id="global-layout" class="flex flex-col min-h-screen">
    <header
      class="bg-section p-4 text-paragraph flex items-center justify-between"
    >
      <router-link to="/">
        {{ $site.title }}
      </router-link>
      <div class="flex items-center">
        <nav>
          <router-link to="/projects/" class="mr-4">Projects</router-link>
          <router-link to="/blog/" class="">Blog</router-link>
        </nav>
        <SearchBox class="block ml-4" />
      </div>
    </header>
    <DefaultGlobalLayout class="flex-grow" />
    <footer class="bg-accent text-heading py-4 px-8">
      <a href="https://github.com/fmonper1/fmonper.com" class="text-heading">
        Github
      </a>
      · Powered by VuePress
    </footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import SearchBox from "@SearchBox";
export default {
  components: { DefaultGlobalLayout: GlobalLayout, SearchBox },
};
</script>

<style lang="scss">
@import "../styles/styles.scss";
</style>
