<template>
  <div class="stats">
    <h1>This is count : {{ count }}</h1>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <h1>A different component</h1>
    <h5>{{ title }}</h5>
    <p>There are currently {{ countLinks }}</p>
    <button class="btn-Remove" v-on:click="removeAllLinks">Remove all links</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Stats",
  computed: {
    ...mapState(["count", "title", "links"]),
    ...mapGetters(["countLinks"]),
    // other stuff
  },
  methods: {
    ...mapMutations(["INCREMENT","DECREMENT"]),
    ...mapActions(['removeAll']),
    removeAllLinks(){
        this.removeAll().then(()=> {
            this.msg = 'They have been removed'
        });
    },
    increment: function() {
      this.INCREMENT();
    },
    decrement() {
      this.DECREMENT();
    }
  }
};
</script>

<style scoped>
.btn-Remove {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
</style>
