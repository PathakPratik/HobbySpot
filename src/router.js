import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Description from "./views/Description.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "HobbySpot",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/movies/:id",
      name: "desc",
      component: Description
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
