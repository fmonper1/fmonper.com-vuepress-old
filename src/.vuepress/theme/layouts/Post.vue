<template>
  <div class="section">
    <div class="w-full max-w-screen-md mx-auto p-8">
      <Content />
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
export default {
  mounted() {
    console.log(this);
  },
};
</script>
