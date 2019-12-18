<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/greenpay">Greenpay</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import url('../public/stylesheets/style.min.css');

$white : #F0F0F0;
$background-green : #A8D574;
$span-grey :#343434;
$black : #000000;
$svg-grey : #707070;
$mark-orange :#FF521A;
$word-grey :#F0F0F0;
$ps : #FFD065;
*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
