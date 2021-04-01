import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: "1",
        rating: 5,
        genre: "Science Fiction",
        desc: "Cool movie bruv"
      },
      {
        title: "2",
        rating: 1,
        genre: "Science Fiction",
        desc: "Lame movie bruv"
      }
    ]
  },
  mutations: {
    removeMovie(state, movieToRemove){
      state.movies = state.movies.filter((movie) => movieToRemove !== movie)
    },
    addNewMovie(state, movieToAdd){
      state.movies.unshift(movieToAdd)
    }

  },
  actions: {},
  modules: {},
})
