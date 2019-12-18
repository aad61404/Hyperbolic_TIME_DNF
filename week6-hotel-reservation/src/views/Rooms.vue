<template>
  <div>
    <Navbar />
    <SearchBar />
    <RoomList />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchBar from "@/components/SearchBar.vue";
import RoomList from "@/components/RoomList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "rooms",
  components: {
    Navbar,
    SearchBar,
    RoomList,
    Footer
  }
};
</script>

<style lang="scss">
// 全域
.calendar {
  width: 245px;
  height: 36px;
  margin-right: 16px;
  background-color: #fff;
}
.datepicker__dummy-wrapper .datepicker__input {
  height: 36px;
  line-height: 2.5;
}
</style>