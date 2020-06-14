<template>
  <div class="section">
    <div class="w-full max-w-screen-lg mx-auto p-8 flex flex-wrap">
      <div class="w-full md:w-4/5 md:pr-2">
        <h1 class="text-4xl">{{ $page.frontmatter.title }}</h1>
        <ul id="default-layout">
          <li v-for="page in $pagination.pages" class="card flex flex-row">
            <div
              class="hidden sm:block bg-accent w-20 h-20 mr-4 flex-shrink-0 rounded-sm"
            ></div>
            <div>
              <h5 class="text-alternative">{{ page.frontmatter.tag[0] }}</h5>
              <h2>
                <router-link class="page-link" :to="page.path">
                  {{ page.title }}
                </router-link>
              </h2>
              <div v-html="page.excerpt"></div>
              <div class="flex flex-wrap">
                <pill-item v-for="tag in page.frontmatter.tag">
                  {{ tag }}
                </pill-item>
              </div>
            </div>
          </li>
        </ul>

        <div id="pagination" v-if="$pagination" class="flex">
          <div class="w-1/2 pr-2">
            <router-link
              v-if="$pagination.hasPrev"
              :to="$pagination.prevLink"
              class="btn block"
            >
              Prev
            </router-link>
          </div>

          <div class="w-1/2 pl-2">
            <router-link
              v-if="$pagination.hasNext"
              :to="$pagination.nextLink"
              class="btn block"
            >
              Next
            </router-link>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/5 md:pl-2">
        <SidebarCard icon="tags">
          <ul>
            <li v-for="tag in $tag.list">
              <router-link class="page-link" :to="tag.path">
                {{ tag.name }}
              </router-link>
            </li>
          </ul>
        </SidebarCard>
      </div>
    </div>
  </div>
</template>
<script>
import PillItem from "../global-components/Atoms/pill-item";
import SidebarCard from "./SidebarCard";
export default {
  components: { SidebarCard, PillItem },
};
</script>
