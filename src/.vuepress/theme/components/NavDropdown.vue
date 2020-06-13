<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-section p-4 pl-6 pr-6"
  >
    <router-link to="/">
      <div class="flex items-center flex-shrink-0  mr-6">
        <span class="text-2xl tracking-tight font-titles">
          {{ $site.title }}
        </span>
      </div>
    </router-link>
    <div class="text-sm flex-grow"></div>

    <SearchBox />

    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-white "
        @click="isOpen = !isOpen"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="w-full block  lg:flex lg:items-center lg:w-auto lg-block"
    >
      <div class="text-sm lg:flex-grow"></div>

      <div>
        <router-link
          to="/projects"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
        >
          Projects
        </router-link>
        <router-link
          to="/blog"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
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
