import Vue from "vue";

import VueLoading from "vue-loading-overlay";

import "vue-loading-overlay/dist/vue-loading.css";

//vue-loading-overay
Vue.use(VueLoading, {
  container: null,
  canCancel: false,
  loader: "dots",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#cc1e1d",
  enforceFocus: false,
});
