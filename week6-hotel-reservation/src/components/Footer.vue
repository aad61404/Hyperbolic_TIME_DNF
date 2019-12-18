<template>
  <div class="footer" id="Footer">
    <div class="flex flex-top">
      <div class="logo">
        <img alt="LOFT_Home" src="../../public/images/home/logo.svg" />
      </div>
      <div class="address">
        <p>台北市中山區長春路777號3樓</p>
        <p>Mail: lofthome@mail.com</p>
        <p>Tel: +886 2 2777-7772</p>
      </div>
    </div>
    <div class="flex flex-bottom">
        <div class="icon-list">
            <img class="icon-svg" src="../../public/images/home/facebook.svg" alt="">
            <img class="icon-svg" src="../../public/images/home/instagram.svg" alt="">
            <img class="icon-svg" src="../../public/images/home/tripadvisor.svg" alt="">
            <!-- <div class="icon-svg"></div>
            <div class="icon-svg"></div>
            <div class="icon-svg"></div> -->
        </div>
        <div class="copy-right">
            <p>Copyirght©2019 Loft Home</p>
        </div>

    </div>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;
  height: 237px;
  padding: 60px 70px 50px 70px;
  background-color: #f8f1ea;
}
.flex-top {
    display: flex;
  .logo {
    width: 100px;
    height: 70px;
  }
}

.flex-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    .copy-right {
        display: inline-block;
        margin: auto 0;
        
    }
    .icon-svg {
        padding-right: 10px;
    }
}

.address {
    margin-left: 180px;
    line-height: 23px;
}
</style>


<script>
export default {
  name: "Footer"
};
</script>