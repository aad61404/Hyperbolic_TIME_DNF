<template>
  <div class="bg-grey">
    <div class="message">
      <h1>預定成功 !</h1>
      <br />
      <br />
      <br />
      <p>您的預訂已完成，詳細訂房資訊已發送簡訊至您的手機，謝謝您！</p>
      <br />
      <br />
      <br />
      <br />
      
      <div class="done"><router-link to="/" style="color: white;">OK !</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ok"
};
</script>

<style lang="scss">
h1 {
  font-size: 28px;
  text-align: center;
  color: #000;
  font-weight: 800;
  opacity: 1;
}
.bg-grey {
  width: 100%;
  height: 100vh;
  padding: 20% 25%;
  background-color: #000000;
  opacity: 0.7;
}

.message {
  background-color: #ffffff;
  height: 100%;
  padding: 10% 25%;
}
.done {
  width: 132px;
  height: 36px;
  background-color: #000;
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  line-height: 28px;
  margin-left: 26%;
}
</style>