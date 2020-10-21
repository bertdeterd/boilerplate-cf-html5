<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ serverinfo }}
    <HelloWorld msg="Welcome to Your Vue.js App X"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
   data: () => ({
    connection: null,
    serverinfo: null
  }),

  components: {
    HelloWorld
  },

   created(){
     const fetchData = { method: 'GET', headers: { 'Content-Type': 'text/plain' } }
     fetch('sap/public/ping', fetchData).then( r => r.text() ).then( d => this.serverinfo = d ) 
     
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
