<template>
  <div id="app">
    <Header/>
    <router-view/>
    <!-- <router-link to="/home"></router-link>
    <router-link to="/Map"></router-link> -->
    <!-- <router-view></router-view> -->
    <!-- <Footer/> -->
  </div>
</template>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPyTL4j1YwgmnMwuYKTZYs8VUoz3xazsQ&callback=initMap"
        type="text/javascript"></script>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components:{
    Header,
    Footer,

  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Prompt');
@import url('https://use.fontawesome.com/releases/v5.0.12/css/all.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css');

#app {
  font-family: 'Prompt', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

