export default {
  state: {
    component: "Landing", // Landing page by default
    error: {
      show: false,
      message: null,
      timeout: 4000,
    },
    tocSideNav: {
      show: false, // dev false
    },
    epub: {
      linkId: undefined,
      currentFileIndex: -1, // -1 will not display any of the epub pages, but a metadata component instead.
    },
  },
  getters: {
    getError: (state) => state.error,
    getComponent: (state) => state.component,
    getSideNav: (state) => state.tocSideNav,
    getCurrentFileIndex: (state) => state.epub.currentFileIndex,
    getLinkId: (state) => state.epub.linkId,
  },
  mutations: {
    // -- error display
    SHOW_ERROR(state, message) {
      state.error.show = true;
      state.error.message = message;
    },
    HIDE_ERROR(state) {
      state.error.show = false;
      state.error.message = null;
    },
    SET_TIMEOUT(state, timeout) {
      state.error.timeout = timeout;
    },

    // -- component display
    SET_COMPONENT(state, component) {
      state.component = component;
    },
    // * loads the Reader.vue component
    LOAD_READER(state) {
      // dynamically displays the Reader component
      state.component = "Reader";
    },

    // -- SIDE NAVIGATION
    CLOSE_TOC_SIDE_NAV(state) {
      if (state.tocSideNav.show === false) return;

      state.tocSideNav.show = false;
    },
    OPEN_TOC_SIDE_NAV(state) {
      if (state.tocSideNav.show === true) return;

      state.tocSideNav.show = true;
    },
    // -- EPUB NAVIGATION

    // * sets the current file index to be rendered
    SET_CURRENT_FILE_INDEX(state, fileIndex) {
      state.epub.currentFileIndex = fileIndex;
    },
    SET_LINK_ID(state, id) {
      state.epub.linkId = id;
    },
  },
  actions: {
    showError({ commit, state }, message) {
      commit("SHOW_ERROR", message);

      setTimeout(() => {
        commit("HIDE_ERROR");
      }, state.error.timeout);
    },
  },
};
