<template>
  <div class="section">
    <div class="w-full max-w-screen-lg p-4 py-8 mx-auto">
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

          <h3 class="mt-4">Share the love</h3>
          <social-share />

          <div id="stickyStop"></div>
        </div>

        <div id="sidebar" class="hidden pl-4 md:block md:w-4/12 lg:w-3/12">
          <div id="sidebarRef"></div>
          <div id="post-toc">
            <SidebarCard> <TOC :include-level="[2, 2]" /> </SidebarCard>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-screen-lg p-4 py-8 mx-auto"></div>
  </div>
</template>

<script>
import PostTags from "../global-components/Molecules/PostTags";
import SidebarCard from "./SidebarCard";

export default {
  components: { SidebarCard, PostTags },
  mounted() {
    console.log(this);
    const toc = document.getElementById("post-toc");
    const sidebar = document.getElementById("sidebar");
    const sidebarRef = document.getElementById("sidebarRef");
    const currentWidth = getComputedStyle(sidebarRef).width;
    const stop = toc.offsetTop - 60;
    const bottomStop = document.getElementById("stickyStop").offsetTop;

    window.onresize = (e) => {
      currentWidth = getComputedStyle(sidebarRef).width;
      toc.style.width = `${currentWidth}`;
    };

    window.onscroll = (e) => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= bottomStop - toc.offsetHeight) {
        toc.className = "";
        sidebar.classList =
          "sticky-bottom hidden pl-4 md:block md:w-4/12 lg:w-3/12";
      } else if (scrollPosition >= stop) {
        toc.className = "stick";
        toc.style.width = `${currentWidth}`;
        sidebar.classList = " hidden pl-4 md:block md:w-4/12 lg:w-3/12";
      } else {
        toc.className = "";
        sidebar.classList = " hidden pl-4 md:block md:w-4/12 lg:w-3/12";
      }
    };

    let mainNavLinks = document.querySelectorAll("#post-toc ul li a");
    let mainSections = document.querySelectorAll(".header-anchor");

    let lastId;
    let cur = [];

    window.addEventListener("scroll", (event) => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  },
};
</script>
<style scoped>
.stick {
  position: fixed;
  top: 0;
  margin: 60px 0;
}
.sticky-bottom {
  display: flex;
  align-content: flex-end;
  justify-items: flex-end;
  align-items: flex-end;
}
</style>
