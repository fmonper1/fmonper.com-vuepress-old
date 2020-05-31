// initial state
const state = () => ({
  commands: localStorage.getItem("commands")
    ? JSON.parse(window.localStorage.getItem("commands"))
    : [],

  binds: localStorage.getItem("binds")
    ? JSON.parse(window.localStorage.getItem("binds"))
    : [],
  // commands: [],
});

// getters
const getters = {
  commandCount(state) {
    return state.commands.length + state.binds.length;
  },
};

// actions
const actions = {
  pushCommit({ commit }, payload) {
    // shop.getProducts((products) => {
    commit("addCommands", payload);
    // });
  },

  clear({ commit }) {
    // shop.getProducts((products) => {
    commit("clearCommands");
    // });
  },
};

// mutations
const mutations = {
  setCommands(state, payload) {
    state.commands = payload;
    // window.localStorage.setItem("commands", JSON.stringify(state.commands));
  },

  addCommands(state, payload) {
    const { data } = payload;
    state.commands.push(data);

    // window.localStorage.setItem("commands", JSON.stringify(state.commands));
  },

  removeCommand(state, payload) {
    const { index } = payload;

    state.commands.splice(index, 1);
  },

  removeBind(state, payload) {
    const { index } = payload;

    state.binds.splice(index, 1);
  },

  addBinds(state, payload) {
    const { data } = payload;
    state.binds.push(data);

    // window.localStorage.setItem("commands", JSON.stringify(state.commands));
  },
  clearBinds(state) {
    state.binds = [];
    // window.localStorage.setItem("commands", JSON.stringify([]));
  },

  clearAll(state) {
    state.binds = [];
    state.commands = [];

    // window.localStorage.setItem("commands", JSON.stringify([]));
  },
  clearCommands(state) {
    state.commands = [];
    // window.localStorage.setItem("commands", JSON.stringify([]));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
