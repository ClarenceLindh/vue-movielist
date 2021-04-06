<template>
<h1 id="title">{{ sitetitle }}</h1>
  <Navbar/>
  <router-view />
  
</template>

<script>
import Navbar from './components/Navbar.vue'


export default({
  name: "App",
  components: {
    Navbar,
    
  },
  data(){
      return{
        sitetitle: 'Movielist',
        
        
      }
  },
  methods:{
    
  }
})
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

*{
    box-sizing: border-box;
    text-decoration: none;
    background-color: #101010;
    color:ghostwhite;
    margin: 0;
    
  }

h1 {
  
  color: #00ffff;
  font-size: 50px;
  width: 100%;
  
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;    
    
  }
</style>
