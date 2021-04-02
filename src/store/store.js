import { createStore } from "vuex";


export default createStore({
  state: {
    movies: [
      {
        title: "Lord Of The Rings",
        rating: 5,
        genre: "Fantasy",
        description: "They are taking the hobbits to Isengard"
      },
      {
        title: "Star Wars",
        rating: 4,
        genre: "Science Fiction",
        description: "Darth Vader is your father"
      }
    ]
  },
  mutations: {
    removeMovie(state, movieToRemove){
      state.movies = state.movies.filter((movie) => movieToRemove !== movie)
      alert(movieToRemove.title + " removed from the list!")
    },
    addNewMovie(state, movieToAdd){
      state.movies.unshift(movieToAdd)
      alert(movieToAdd.title + " added to the list!")
    }
  },
  actions: {},
  modules: {},
});
