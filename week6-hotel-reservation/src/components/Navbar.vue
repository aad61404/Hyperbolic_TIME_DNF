<template>
  <nav class="navbar navbar-light bg-light" id="Navbar">
    <router-link class="navbar-brand" to="/">
      <img alt="LOFT_Home" src="../../public/images/home/logo.svg" />
    </router-link>

    <div class="menu-container">
      <button class="menu-item">ABOUT US</button>
      <router-link class="menu-item" to="rooms">ROOMS</router-link>
      <button class="menu-item">CONTACT</button>
      <router-link class="menu-item menu-item-book" to="book">BOOK NOW</router-link>

      <button class="menu-item">EN</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
$light-grey: #d1c8c3;
.menu {
  &-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  &-item {
    color: #000;
    font-family: "Barlow", sans-serif;
    font-size: 22px;
    margin-right: 60px;
    letter-spacing: 0.66px;
    font-weight: bold;
    background: none;
    border: 0px;
    padding: 0;
  }
  &-item-book {
    width: 160px;
    height: 50px;
    border: 2px solid $light-grey;
    text-align: center;
    line-height: 43px;
  }
}
</style>