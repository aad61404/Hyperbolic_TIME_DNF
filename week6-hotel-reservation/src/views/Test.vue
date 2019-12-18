<template>
  <div>
    父元件:
    <input type="text" v-model="name">
    <br>
    <br>
    <!-- 引入子元件 -->
    <child :inputName="name"></child>
  </div>
</template>
<script>
  import child from "@/views/Test_son.vue";

  export default {
      name: 'test',
    components: {
      child
    },
    data () {
      return {
        name: ''
      }
    }
  }
</script>