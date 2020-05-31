import Vue from "vue";
import Vuex from "vuex";
import commands from "./commands.module";
// import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// const vuexPersist = new VuexPersist({
//   key: "csgoconsole",
//   storage: window.localStorage,
// });

export default new Vuex.Store({
  modules: {
    commands,
  },
  // plugins: [vuexPersist.plugin],
  strict: debug,
});
