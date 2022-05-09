import { createStore } from "vuex";

// initial state
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode,
};

//getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f5f5f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#2E2E4D";
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
};

//actions

const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
