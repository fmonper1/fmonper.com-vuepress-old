<template>
  <font-awesome-icon
    :icon="icons"
    size="xs"
    class="text-base"
  ></font-awesome-icon>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTags } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faVuejs,
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default {
  name: "fa-icon",
  props: ["icon"],
  computed: {
    icons() {
      switch (this.icon) {
        case "bars":
          return faBars;
        case "react":
          return faReact;
        case "node":
          return faNodeJs;
        case "vuejs":
          return faVuejs;
        case "node":
          return faNodeJs;
        case "github":
          return faGithub;
        case "codepen":
          return faCodepen;
        case "linkedin":
          return faLinkedin;
        case "tags":
          return faTags;
        default:
          return "";
      }
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
