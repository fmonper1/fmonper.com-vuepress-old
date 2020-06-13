<template>
  <div class="section">
    <div class="w-full max-w-screen-md mx-auto p-4 py-8">
      <h3 class="text-center text-alternative">
        {{ $page.frontmatter.tag[0] }}
      </h3>
      <h1 class="text-center text-accent">{{ $page.frontmatter.title }}</h1>
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
  </div>
</template>

<script>
import PostTags from "../global-components/Molecules/PostTags";

export default {
  components: { PostTags },
  mounted() {
    console.log(this);
  },
};
</script>
