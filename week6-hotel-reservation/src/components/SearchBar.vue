<template>
  <div class="SearchBar">
    <div class="search-container">
       <HotelDatePicker 
 
       />
      <!-- <Datepicker
        class="calendar"
        input-class="calendar"
        format="yyyy-MM-dd"
        :highlighted="state.highlighted"
        :value="state.date"
     
        clear-button = "true"
      />
      <Datepicker
        class="calendar"
        input-class="calendar"
        format="yyyy-MM-dd"
        :highlighted="state.highlighted"
        :value="state.date"
      /> -->
      <!-- <div class="calendar"></div> -->
      <!-- <div class="calendar"></div> -->
      <div class="addbox">
        <button class="active-btn" @click="cutAdult()">-</button>
        <div class="parms">{{ adult }} Adult</div>
        <button class="active-btn" v-on:click="addAdult()">+</button>
      </div>
      <div class="addbox">
        <button class="active-btn" @click="cutKid()">-</button>
        <div class="parms">{{ kid }} Kid</div>
        <button class="active-btn" @click="addKid()">+</button>
      </div>
      <div class="searchbtn">Search</div>
    </div>
   
  </div>
</template>

<style lang="scss" scoped>
.SearchBar {
  width: 100%;
  height: 72px;
  background-color: #d1c8c3;
}
.search-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 18px 120px;
  display: flex;
}
.calendar {
  width: 245px;
  height: 36px;
  margin-right: 16px;
  background-color: #fff;
}
.addbox {
  display: flex;
  margin-right: 15px;
  .parms {
    width: 105px;
    height: 100%;
    text-align: center;
    background-color: #fff;
    margin: auto 0;
    padding: 9px 0px;
  }
  .active-btn {
    width: 38px;
    height: 100%;
    background-color: #000;
    color: #fff;
    border: 0;
    margin: 0;
    padding: 0px 0px 8px 0px;
    font-size: 30px;
  }
}
.searchbtn {
  width: 132px;
  height: 100%;
  background-color: #000;
  color: #fff;
  border: 0;
  margin: 0;
  padding-top: 8px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
}

// datepicker
.vdp-datepicker * {
  box-sizing: border-box;
  width: 245px;
  height: 36px;
}

.calendar {
  width: 245px;
  height: 36px;
}
.datepicker__wrapper {
  height: 36px;
  margin-right: 15px;
}

// .calendar > div > input {
//     width: 245px;
//     height: 36px;
// }
</style>

<script>
// import Datepicker from "vuejs-datepicker";
import HotelDatePicker from 'vue-hotel-datepicker';
export default {
  name: "SearchBar",
  components: {

    HotelDatePicker
  },
  data() {
    return {
      adult: 0,
      kid: 0,
      checkIn:  this.$route.params.checkIn,
      checkOut: this.$route.params.checkOut,

    };
  },
  methods: {
    say: function(message) {
      alert(message);
    },
    addAdult() {
      const vm = this;
      vm.adult++;
    },
    cutAdult() {
      const vm = this;
      if (vm.adult <= 0) return;
      vm.adult--;
    },
    addKid: function() {
      const vm = this;
      vm.kid++;
    },
    cutKid: function() {
      const vm = this;
      if (vm.kid <= 0) return;
      vm.kid--;
    }
    // format: function() {
    //   return 'yyyy-MM-dd';
    // }
  }
};
</script>