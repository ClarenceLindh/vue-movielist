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

</style>
