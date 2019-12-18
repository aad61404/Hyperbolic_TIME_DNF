<template>
  <div id="tab3">
    <div class="row">
      <ListLeft />
      <transition appear appear-active-class="fadeInDown-active">
        <div class="col-6 todolist h-100">
          <div class="toogle-btn">FOCUS TIME</div>
          <div class="focus-content">
            <div class="top-text">
              <p>TODAY</p>
              <p>WEEK</p>
            </div>
            <div class="mid-text">
              20
              <span>/TOMATO</span>
            </div>
            <div class="mid-text1">
              108
              <span>/TOMATO</span>
            </div>
          </div>
          <div class="toogle-btn">
            CHART
            <span>2019.7.1 - 2019.7.7</span>
          </div>
        </div>
      </transition>
      <ListRight />
    </div>
  </div>
</template>


<script>
import ListLeft from "@/components/ListLeft.vue";
import ListRight from "@/components/ListRight.vue";
export default {
  data() {
    return {
      // chartData: {
      //   labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'], // 位於 x 軸的各筆數據 key
      //   datasets: [
      //     {
      //       label: 'Tomatos', // x 軸的標籤項目
      //       data: ['16', '12', '16', '8', '12', '4', '20', '24'], // 位於 y 軸對應的各筆數據 value
      //       backgroundColor: [
      //         'white', 'white', 'white', 'white', 'white', 'white', '#FF4384'
      //       ]
      //     }
      //   ]
      // }
    };
  },
  components: {
    ListLeft,
    ListRight
  }
};
</script>

<style lang="scss" scoped>
$pinkcolor: #ff4384;
$bluebackground: #003164;
$color-grey: rgba(255, 255, 255, 0.2);
#tab3 {
  display: block;
  width: 100%;
  height: 100%;
  background-color: $bluebackground;
  position: relative;
  top: -800px;
  color: #ffffff;
}

//*** mid
.toogle-btn {
  background-color: #5a8dbe;
  color: #fff;
  font-size: 25px;
  border-radius: 0px;
  margin: 0px;
  text-align: left;
  height: 50px;
  padding-left: 20px;
  line-height: 50px;
}

.focus-content {
  width: 100%;
  height: 20%;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding-top: 10px;
  .top-text p:nth-child(1) {
    position: absolute;
  }
  .top-text p:nth-child(2) {
    position: absolute;
    left: 260px;
  }
  .mid-text {
    color: $pinkcolor;
    font-size: 70px;
    position: absolute;
    top: 130px;
    span {
      color: $color-grey;
      font-size: 15px;
    }
  }
  .mid-text1 {
    color: $pinkcolor;
    font-size: 70px;
    position: absolute;
    top: 130px;
    left: 260px;
    span {
      color: $color-grey;
      font-size: 15px;
    }
  }
}
</style>
