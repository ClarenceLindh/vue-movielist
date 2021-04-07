<template>
    <div id="wapp">
    <div class="add-movie">
        <form @submit.prevent="addMovie">
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
            <button @click="createMovie">Add To List</button>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: "addMovie",
    data() {
        return {
            title:"",
            rating: "1",
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

<style scoped>

*{
    background-color: black;
}
.add-movie {
  
  margin-bottom: 25px;
  background: linear-gradient(180deg, rgb(0,0,0) 0%, rgb(16,16,16) 106%);
}

div {
  margin-top: 10px;
  
  
}

form {
  padding: 20px;  
  
}

button {
  width: 242px;
  color: black;
  border: 4px solid black;
  background-color: white;
  padding: 5px;
}

</style>