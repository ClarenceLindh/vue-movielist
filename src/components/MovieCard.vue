<template>
    <div class="movie-card">


    </div>
</template>

<script>
export default {
    props:["movie"],
    methods: {
        deleteMovie(){
            this.$store.commit("removeMovie", this.movie)
        }
    },
}
</script>

<style>

</style>