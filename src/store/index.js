import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

// Modules
import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";
import pos from "./pos";


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  //=====================================================================================//
  //======================================Getters======================================//
  //=====================================================================================//
  getters: {},
  //=====================================================================================//
  //======================================Mutations======================================//
  //=====================================================================================//
  mutations: {
    SAVE_SITE_NAME(state, sitename) {
      state.site = sitename;
    },
  },

  //=====================================================================================//
  //======================================Actioin========================================//
  //=====================================================================================//
  actions: {
    
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
    pos,
    
  },
  strict: process.env.DEV,
  // plugins: [vuexLocal.plugin],
});
