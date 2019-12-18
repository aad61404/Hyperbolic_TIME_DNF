<template>
  <div class="col-4 left-list">
    <router-link class="tpink in-active mb20" to="/tomato-clock/todolist">
      <md-icon class="md-size-2x in-active">list</md-icon>TODO-LIST
    </router-link>
    <router-link class="tpink in-active mb20" to="/tomato-clock/chart">
      <md-icon class="md-size-2x in-active">insert_chart</md-icon>ANALYTICS
    </router-link>
    <router-link class="tpink in-active mb20" to="/tomato-clock/music">
      <md-icon class="md-size-2x in-active">library_music</md-icon>RINGTONES
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
$pinkcolor: #ff4384;
$bluebackground: #003164;
$color-grey : rgba(255, 255, 255, 0.2);
.left-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// left ------------

.left-list .tpink {
  color: $pinkcolor;
  font-size: 36px;
}
.left-list .tpink:hover {
  color: $pinkcolor;
  transition-delay: 0.1s;
  .md-size-2x {
    color: $pinkcolor;
  }
}

.left-list .in-active {
  color: $color-grey;
}
.mb20 {
  margin-bottom: 20px;
}
a:not(.md-button):hover {
  text-decoration: none;
}
.color-grey {
  color: $color-grey;
}

</style>
