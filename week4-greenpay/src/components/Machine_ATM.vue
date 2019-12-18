<template>
  <div class="right">
    <h1>Machine_ATM'</h1>
  </div>
</template>

<script>
export default {
  name: 'Machine_ATM.vue'
}
</script>

<style lang="scss" scoped>
$white: #f0f0f0;
$background-green: #a8d574;
$span-grey: #343434;
$black: #000000;
$svg-grey: #707070;
$mark-orange: #ff521a;
$word-grey: #f0f0f0;
$ps-golden: #ffd065;

.right {
  display: inline-block;
  width: 57%;
  height: 100%;
  background-color: $span-grey;
  float: right;
  padding: 5% 5%;
}

//****
// right
//******
h1 {
  color: $white;
}

label {
  color: $background-green;
  p {
    display: inline-block;
    color: $mark-orange;
  }
}
.ps-golden {
  color: $ps-golden;
}
</style>
