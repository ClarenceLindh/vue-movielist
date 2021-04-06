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
      },
      {
        title: "Lorem",
        rating: 2,
        genre: "Drama",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dicta et quibusdam at animi aliquam, provident sequi officia dolorem facilis. Maxime reiciendis ut facilis rerum porro consequuntur expedita. Voluptate molestias pariatur earum eveniet quia optio vel recusandae deleniti possimus inventore? Nihil perferendis saepe sunt officia cum fugiat praesentium voluptas numquam veniam eligendi commodi, iste ab quidem possimus aperiam voluptatibus nulla quia ullam nemo consequatur dolore quibusdam. Odio nobis numquam ipsum debitis nostrum placeat laboriosam maxime ipsa, voluptatibus fuga, magnam adipisci asperiores eos dolores sequi quidem. Provident at accusantium fugiat, ea beatae placeat quas totam alias error impedit molestias architecto corrupti!"
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
