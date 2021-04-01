<template>
    <div class="add-movie">
        <form @submit.prevent="createMovie">
            <div class="title-wrapper">
                <h3>Title</h3>
                <input id="title" type="text" v-model="title" />
            </div>
            <div class="rating-wrapper">
                <h3>Rating {{rating}}</h3>
                <input id="rating" type="range" min="1" max="5" v-model="rating" />
            </div>
            <div class="genre-wrapper">
                <h3>Genre</h3>
                <select name="genre" id="genre" v-model="genre">
                    <option v-for="(genre, i) in genres" :key="i" :value="genre">
                        {{genre}}
                    </option>
                </select>
            </div>
            <div class="description-wrapper">
                <h3>Description</h3>
                <textarea name="description" 
                id="description" 
                cols="30" 
                rows="10"
                v-model="description"
                >
                </textarea>
            </div>
            <button class="add-button" @click=createMovie>Add To List</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "addMovie",
    data() {
        return {
            title:"",
            rating: "0",
            genre: "",
            description: "",
            genres: [
                "Action",
                "Drama",
                "Comedy",
                "Documentary",
                "Fantasy",
                "Science Fiction"
            ],
        }
        

    },
    methods: {
        createMovie(){
            let newMovie = {
                title: this.title,
                rating: this.rating,
                genre: this.genre,
                description: this.description
            }
            this.$store.commit("addNewMovie", newMovie)
        }
    }
}
</script>

<style>

</style>