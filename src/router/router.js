import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '@/components/HomePage.vue'
import AddMovie from '@/components/AddMovie.vue'
import MovieList from '@/components/MovieList.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/addMovie",
      component: AddMovie
    },
    {
      path: "/movieList",
      component: MovieList
    }
  ]
})


export default router;
