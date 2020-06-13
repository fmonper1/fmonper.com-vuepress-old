<template>
  <div id="global-layout" class="flex flex-col min-h-screen">
    <NavDropdown />
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
import NavDropdown from "../components/NavDropdown";
import SearchBox from "@SearchBox";
export default {
  components: { DefaultGlobalLayout: GlobalLayout, SearchBox, NavDropdown },
};
</script>

<style lang="scss">
@import "../styles/styles.scss";
</style>
