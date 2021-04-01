<template>
  <div id="app">

    <h1 id="header">{{ sitetitle }}</h1>
      <Navbar/>
      <router-view />

  </div>
</template>



<script>

import Navbar from './components/Navbar.vue'


export default({
  components: {
    Navbar,
  },

  methods:{
  }
})

</script>


<style>

</style>
