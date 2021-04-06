<template>
<div id="wrapper">
    <AddMovie/>
    <MovieList/>
</div>


</template>

<script>
import AddMovie from './AddMovie'
import MovieList from './MovieList'

export default {
  name: "homePage",
  components: { AddMovie,
  MovieList
  },
}
</script>

<style scoped>



#wrapper {
  padding-top: 25px;
  padding-bottom: 100px;
  color: black;
}
</style>