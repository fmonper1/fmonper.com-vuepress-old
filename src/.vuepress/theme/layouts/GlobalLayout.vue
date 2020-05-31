<template>
  <div id="global-layout">
    <header class="bg-section p-4 text-paragraph">
      <router-link to="/">{{ $site.title }}</router-link>· <router-link to="/tag/">Tag</router-link>· <router-link to="/blog/">Blog</router-link>
    </header>
    <DefaultGlobalLayout />
    <footer style="background-color: #DDD"><a href="https://github.com/ulivz/70-lines-of-vuepress-blog-theme">Github</a> · Powered by VuePress</p>
</footer>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  
  export default {
    components: { DefaultGlobalLayout: GlobalLayout },
  }
</script>

<style lang="scss">
  @import "../styles/styles.scss";
</style>
