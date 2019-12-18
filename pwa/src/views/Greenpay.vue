<style>
@import url("../../public/stylesheets/style.min.css");
</style>
<template>
  <div class="g-container">
    <div class="left">
      <div class="left-top">
        <img src alt />
      </div>
      <div class="left-bottom">
        <div class="order">
          <h1>訂單資訊</h1>
          <p class="classification">商店名稱</p>
          <p class="detail">Amazing 3C online Shop</p>
          <p class="classification">訂單編號</p>
          <p class="detail">239234dwnd321</p>
          <p class="classification">本筆訂單將支付</p>
          <p class="detail"><span>1250</span>元</p>

          <p class="classification">支付方式</p>

          <div class="pay-way">
            <div class="pay-style"><router-link to="/greenpay/credit">信用卡</router-link> </div>
            <div class="pay-style"><router-link to="/greenpay/web_atm">網路ATM <span>(晶片讀卡機轉帳)</span></router-link></div>
            <div class="pay-style"><router-link to="/greenpay/machine_atm">ATM櫃員機 <span>(實體ATM及網銀)</span></router-link></div>
          </div>
        </div>
        <img class="green-pay" src="../../public/img/green-icons/Group 167.png" alt="">
      </div>
    </div> 
   <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: "Greenpay",
  components: {

  }

};
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
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

//****
// base
//******
.g-container {
  width: 1280px;
  height: 1274px;
  border: 1px solid #000;
  margin: 0 auto;
  position: relative;
  background-color: $span-grey;
}

.left {
  display: inline-block;
  width: 43%;
  height: 100%;
  margin: 0;

  &-top {
    display: inline-block;
    width: 100%;
    height: 339px;
    background-image: url("../../public/img/green-icons/Photo by Xianjuan HU on Unsplash.png");
    background-size: cover;
    background-color: aqua;
  }
  &-bottom {
    width: 100%;
    height: 935px;
    background-color: $background-green;
  }
}



//****
// left
//******

.green-pay {
  position: absolute;
  left: 46px;
  bottom: 24px;
  width: 156px;
  height: 38px;
}

.order {
  padding-left: 25%;
  padding-top: 10%;
  line-height: 45px;
  h1 {
    font-size: 40px;
    color: #000;
    margin-bottom: 15px
  }
  .classification {
    font-size: 22px;
    font-weight: bold;
  }
  .detail {
    font-size: 18px;
    span {
      font-size: 25px;
      font-weight: bold;
      padding-left: 50%;
    }
  }

  .pay-way {
    width: 370px;
    height: 300px;
    margin: 0;
    .pay-style  {
      width: 100%;
      height: 90px;
      margin-top: 20px;
      color: $svg-grey;
      background-color: $white;
      font-size: 28px; 
      padding-left: 35px;
      padding-top: 25px;
      span {
        font-size: 16px;
      }
    }
  }
}

</style>
