<template>
  <div class="section">
    <div class="w-full max-w-screen-lg mx-auto p-4 py-8">
      <h3 class="text-center text-alternative">
        {{ $page.frontmatter.tag[0] }}
      </h3>
      <h1 class="text-center text-accent">{{ $page.frontmatter.title }}</h1>
      <div class="flex flex-row">
        <div class="w-full md:w-8/12 lg:w-9/12">
          <Content class="post-entry" />
          <h3>Tags</h3>
          <PostTags :data="$page.frontmatter.tag" />
          <div id="pagination" v-if="$pagination">
            <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
              Prev
            </router-link>
            <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
              Next
            </router-link>
          </div>
        </div>
        <div class="hidden md:block md:w-4/12 lg:w-3/12 pl-4">
          <div id="sidebarRef"></div>
          <div id="post-toc">
            <div class="bg-sectionAlt rounded-sm p-2">
              <div
                class=" bg-sectionAlt rounded-full -mt-4 -ml-4 w-8 h-8 flex items-center  justify-center "
              >
                <fa-icon icon="bars" />
              </div>
              <TOC :include-level="[2, 2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostTags from "../global-components/Molecules/PostTags";
import FaIcon from "../global-components/Atoms/fa-icon";

export default {
  components: { PostTags, FaIcon },
  mounted() {
    console.log(this);
    const toc = document.getElementById("post-toc");
    const sidebar = document.getElementById("sidebarRef");
    let currentWidth = getComputedStyle(sidebarRef).width;
    const stop = toc.offsetTop - 60;

    window.onresize = (e) => {
      currentWidth = getComputedStyle(sidebarRef).width;
      toc.style.width = `${currentWidth}`;
    };

    window.onscroll = function(e) {
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
      console.log(scrollTop, toc.offsetTop);
      // toc.offsetTop;

      if (scrollTop >= stop) {
        toc.className = "stick";
        toc.style.width = `${currentWidth}`;
      } else {
        toc.className = "";
      }
    };
  },
};
</script>
<style scoped>
.stick {
  position: fixed;
  top: 0;
  margin: 60px 0 0;
}
</style>
