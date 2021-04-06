<template>
<nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/movieList">Movielist</router-link> |
    <router-link to="/addMovie">Add Movie</router-link>
</nav>
</template>

<script>
export default {
    name: "navBar"

}
</script>

<style scoped>

#nav {
    padding: 10px;
    
    background-color: #1b1b1b;
    text-align: center;
  }
  
  #nav a {
    font-weight: bold;
    background-color: #1b1b1b;
    text-align: center;
    color: #f2f2f2;
    text-decoration: none;
    padding: 10px;
    width: 100%;
  }

  #nav a.router-link-exact-active {
    color: #00ffff;
    background-color: #1b1b1b
  }

</style>