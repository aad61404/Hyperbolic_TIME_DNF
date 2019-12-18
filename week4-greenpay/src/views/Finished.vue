<template>
  <div class="wraper">
    <div class="pic"></div>
    <div class="result">
      <img class="green-pay" src="../../public/green-icons/Group 167.png" alt="">
      <div class="success">
        <p class="pay">付款成功</p>
        <h1>您已支付1,250元</h1>
        <div class="order">
          <div class="classification">商店名稱</div>
          <div class="detail">Amazing 3C online Shop</div>
          <div class="classification">訂單編號</div>
          <div class="detail">239234dwnd321</div>
          <div class="classification">支付方式</div>
          <div class="detail">信用卡付款</div>
        </div>
        <div class="footer">畫面將自動轉回<br> Amazing 3C Online Shop</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #f0f0f0;
$background-green: #a8d574;
$span-grey: #343434;
$black: #000000;
$svg-grey: #707070;
$mark-orange: #ff521a;
$word-grey: #f0f0f0;
$ps-golden: #ffd065;
.wraper {
  width: 1280px;
  height: 700px;
  margin: 0 auto;
}
.pic {
    display: block;
    width: 100%;
    height: 339px;
    background-image: url("../../public/green-icons/Photo by Xianjuan HU on Unsplash.png");
    background-size: 100% 150%;
    background-color: aqua;
}
.result {
    width: 100%;
    height: 100%;
    background-color: $background-green;
}
.green-pay {
  position: relative;
  width: 270px;
  height: 67px;
  left: 115px;
  top: 50px;
  z-index: 1;
}
.success {
    height: 590px;
    padding: 50px 480px;
    text-align: center;
    .pay {
        font-size: 40px;
    }
    h1 {
        font-size: 30px;
        font-weight: bold;

    }
    .classification {
        font-size: 18px;
        font-weight: bold;
    }
    .detail {
        font-size: 24px;
    }
    .order {
        line-height: 40px;
    }
}

.footer {
    font-size: 24px;
    font-weight: bold;
    position: relative;
    top: 100px;
}
</style>
