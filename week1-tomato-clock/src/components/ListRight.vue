<template>
  <div class="col-2">
    <router-link to="/tomato-clock"> <div id="x">x</div> </router-link>
  </div>
</template>

<style lang="scss" scoped>
#x {
    display: block;
    width: 70px;
    height: 50px;
    position: absolute;
    font-size: 4rem;
    color: #ffffff;
    -webkit-transition: .3s;
    transition: .3s;
    text-align: center;
    line-height: 37px;
}
#x:hover {
  transform: rotate(180deg);
 
}
</style>
