import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      token: "",
    };
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
