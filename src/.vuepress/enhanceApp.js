export default ({ Vue, options, router, siteData, isServer }) => {
  if (!isServer) {
    const VueMasonryPlugin = require("vue-masonry").VueMasonryPlugin;
    // const VueLazyload = require("vue-lazyload");
    Vue.use(VueMasonryPlugin);
  }
};
