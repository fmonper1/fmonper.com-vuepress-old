<template>
  <nav
    class="flex flex-wrap items-center justify-between p-4 pl-6 pr-6 bg-section"
  >
    <router-link to="/">
      <div class="flex items-center flex-shrink-0 mr-6">
        <span class="text-2xl tracking-tight font-titles">
          {{ $site.title }}
        </span>
      </div>
    </router-link>
    <div class="flex-grow text-sm"></div>

    <SearchBox />

    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 text-white rounded"
        :class="isOpen ? 'bg-alternative' : 'bg-accent'"
        @click="isOpen = !isOpen"
      >
        <svg
          class="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="isOpen ? 'h-auto' : 'hidden lg:block'"
      class="block w-full lg:flex lg:items-center lg:w-auto lg:block"
    >
      <div class="text-sm lg:flex-grow"></div>

      <div class="p-4 pt-1 rounded-lg bg-sectionAlt lg:bg-transparent lg:p-0">
        <router-link
          to="/projects"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
        >
          Projects
        </router-link>
        <router-link
          to="/blog"
          class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
        >
          Blog
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import SearchBox from "@SearchBox";

export default {
  name: "NavDropdown",
  components: { SearchBox },

  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    user: {},
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.isOpen = false;
    },
  },
};
</script>
