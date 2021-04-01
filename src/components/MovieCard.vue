<template>
<div class="movie-card" @click="deleteMovie">
    <div class="title-rating-wrapper">
        <span class="title">{{movie.title}}</span>
        <span>{{movie.genre}}</span>
        <span class="rating">{{movie.rating}}</span>
    </div>
    <br>
    <div class="description-wrapper">
        <p>{{movie.description}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "movieCard",
    props: ["movie"],
    methods: {
        deleteMovie(){
            this.$store.commit("removeMovie", this.movie)
        },
    }
}
</script>

<style>

</style>