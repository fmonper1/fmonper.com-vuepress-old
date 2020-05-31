import Vuex from "vuex";
import VuexPersist from "vuex-persist";

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(Vuex);
  const store = require("./store/index").default;
  Vue.mixin({ store: store });
  if (!isServer) {
    const vuexPersist = new VuexPersist({
      key: "csgoconsole",
      storage: window.localStorage,
    });
    vuexPersist.plugin(store);
    const VueMasonryPlugin = require("vue-masonry").VueMasonryPlugin;
    // const VueLazyload = require("vue-lazyload");
    Vue.use(VueMasonryPlugin);
  }
};
