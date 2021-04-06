<template>
<div class="movie-card" @click="deleteMovie">
    <div class="title-rating-wrapper">
        <span class="title">{{movie.title}}</span>
        <span class="rating">{{movie.rating}}/5</span>
        <br>
        <span class="genre">{{movie.genre}}</span>
        
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

<style scoped>

*{background-color: rgba(255, 0, 0, 0);
    
    margin-top: 10px;
    
}
.movie-card {
  margin-bottom: 20px;
  padding-bottom: 25px;
  padding-top: 5px;
  background: linear-gradient(180deg, rgb(0,0,0) 0%, rgb(16,16,16) 106%);
  
}

.title {
  font-size: 25px;
  padding-left: 50px;
  color: #00ffff;
}

.genre{
    padding-left: 50px;
}

.rating {
  float: right;
  font-size: 30px;
  color: #00ffff;
}


p {
  color: whitesmoke;
}

</style>