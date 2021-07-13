import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "../plugins/vuetify";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBlack: false,
  },
  mutations: {
    setBlack(state, isBlack) {
      Vuetify.framework.theme.dark = isBlack;
      state.isBlack = isBlack;
    },
  },
  actions: {
    loadTheme({ commit }) {
      if (localStorage.getItem("isBlack")) {
        commit(
          "setBlack",
          localStorage.getItem("isBlack").toLowerCase() === "true"
        );
      }
    },
    setTheme({ commit }, payload) {
      commit("setBlack", payload);
      localStorage.setItem("isBlack", payload);
    },
  },
});
