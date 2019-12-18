<template>
  <div>
    子元件:
    <span>{{inputName}}</span>
  </div>
</template>
<script>
export default {
  // 接受父元件的值
  name: "testson",
  props: {
    inputName: String,
    // required: true
  }
};
</script>