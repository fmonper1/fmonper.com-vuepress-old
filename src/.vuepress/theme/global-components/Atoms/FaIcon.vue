<template>
  <font-awesome-icon
    :icon="icons"
    :size="size"
    :class="`${size}`"
  ></font-awesome-icon>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faRetweet,
  faHeart,
  faEnvelope,
  faChartBar,
  faUserAstronaut,
  faUserEdit,
  faKeyboard,
  faTerminal,
  faTrashAlt,
  faInfoCircle,
  faCode,
  faSave,
  faCopy,
  faLink,
  faToolbox,
  faRulerCombined,
  faCrosshairs,
  faCalendar,
  faCommentDots,
  faDownload,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
export default {
  name: "fa-icon",
  props: ["icon", "size"],
  computed: {
    icons() {
      switch (this.icon) {
        case "faSave":
          return faSave;
        case "faHeart":
          return faHeart;
        case "faRetweet":
          return faRetweet;
        case "faEnvelope":
          return faEnvelope;
        case "faTwitter":
          return faTwitter;
        case "faFacebook":
          return faFacebook;
        case "faChartBar":
          return faChartBar;
        case "faUserAstronaut":
          return faUserAstronaut;
        case "faUserEdit":
          return faUserEdit;
        case "faKeyboard":
          return faKeyboard;
        case "faTerminal":
          return faTerminal;
        case "faTrashAlt":
          return faTrashAlt;
        case "faInfoCircle":
          return faInfoCircle;
        case "faCode":
          return faCode;
        case "faCopy":
          return faCopy;
        case "faLink":
          return faLink;
        case "faToolbox":
          return faToolbox;
        case "faRulerCombined":
          return faRulerCombined;
        case "faCrosshairs":
          return faCrosshairs;
        case "faCommentDots":
          return faCommentDots;
        case "faCalendar":
          return faCalendar;
        case "faDownload":
          return faDownload;
        case "faPencilAlt":
          return faPencilAlt;
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
