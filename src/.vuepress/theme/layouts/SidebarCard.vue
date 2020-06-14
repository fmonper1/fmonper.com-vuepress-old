<template>
  <div class="group p-2 rounded-sm bg-sectionAlt scale-110">
    <div
      class="flex items-center justify-center w-8 h-8 -mt-4 -ml-4 rounded-full bg-sectionAlt"
    >
      <fa-icon :icon="icon || 'bars'" class="group-hover:text-alternative" />
    </div>
    <slot />
  </div>
</template>
<script>
import FaIcon from "../global-components/Atoms/fa-icon";

export default {
  name: "SidebarCard",
  components: { FaIcon },
  props: ["icon"],
};
</script>
