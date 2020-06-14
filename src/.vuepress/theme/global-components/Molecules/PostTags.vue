<template>
  <div class="flex flex-wrap">
    <pill-item v-for="tag in data">
      <router-link :to="`/tag/${tag}`" class="text-white">
        {{ tag }}
      </router-link>
    </pill-item>
  </div>
</template>
<script>
import PillItem from "../Atoms/pill-item";

export default {
  name: "PostTags",
  props: ["data"],
  components: { PillItem },
};
</script>
