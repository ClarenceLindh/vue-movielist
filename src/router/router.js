import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/HomePage.vue"
import AddMovie from "../components/AddMovie.vue"
import MovieList from "../components/MovieList.vue"

const routes = [
  {
    path: "/",
    name: "homePage",
    component: Home,
  },
  {
    path: "/addMovie",
    name: "addMovie",
    component: AddMovie,
    
  },
  {
    path: "/movieList",
    name: "movieList",
    component: MovieList,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
