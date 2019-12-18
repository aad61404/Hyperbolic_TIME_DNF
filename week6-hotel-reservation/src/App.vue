<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
/* 引入Barlow 字體*/
@import url('https://fonts.googleapis.com/css?family=Barlow&display=swap');
/* css reset */
@import url('../public/stylesheets/stlye.css');

#app {
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'app',

}
</script>