import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import first from "@/components/first";
import second from "@/components/second";

Vue.use(VueRouter);

const routes = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/first",
      component: first
    },
    {
      path: "/second",
      component: second
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router: routes,
  render: h => h(App)
}).$mount("#app");
