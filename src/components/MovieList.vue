<template>
<div class="movie-list">
    <h2>Movie List</h2>
    
</div>
  
</template>

<script>
import MovieCard from "./MovieCard"

export default {
    name: 'movieListComponent',

    components: {
        MovieCard,
    },


    computed: {
        movies(){
            return this.$store.state.movies
        },
    },
}

</script>

<style>

</style>