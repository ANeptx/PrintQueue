import Vue from "vue";
import VueRouter from "vue-router";
import backendRouters from "./backend.router";

Vue.use(VueRouter);

function routerFacade() {
  return backendRouters;
}

const router = new VueRouter({
  mode: "history",
  base:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_ROUTER_PATH_PRODUCTION
      : process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [...routerFacade()],
});

export default router;
