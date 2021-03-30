import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addmovie",
    name: "Addmovie",
    component: () =>
      import("../views/Addmovie.vue"),
  },
  {
    path: "/moviecard",
    name: "Moviecard",
    component: () =>
      import("../views/Moviecard.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
