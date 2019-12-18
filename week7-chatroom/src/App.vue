<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/chatlist">ChatList</router-link> |
      <router-link to="/chatroom">ChatRoom</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
    padding: 0;
    margin: 0;
    list-style: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 25px;
    font-family: Noto Sans TC,sans-serif;
}
body {
  margin: 0;
}
</style>
