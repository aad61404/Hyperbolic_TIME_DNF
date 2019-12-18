<template>
  <div class="login-wraper">
    <div class="login-leftBar">
      <div class="title">
        <h1>TALK</h1>
        <h1>TALK</h1>
      </div>

      <div class="talklist">
        <h4>熱門聊天室</h4>
        <h4>配對悄悄話</h4>
      </div>
    </div>
    <div class="login-rightBox">
      <div class="inputWraper">
        <div class="inputBox">
          <h5>輸入暱稱</h5>

          <input class="inputInput" type="text" name id />
        </div>
        <button class="btn-start">開始尬聊</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="scss" scoped>
.login-wraper {
  display: flex;
  width: 100%;
  height: 100vh;
}

// 左半邊
.login-leftBar {
  display: flex;
  flex: 0 20%;
  background-color: #ffbc2e;
  justify-content: space-between;
  padding: 5% 5%;
  flex-direction: column;
  h1 {
    font-size: 80px;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    margin: 0;
  }

  .talklist {
    flex: 0 60%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-left: 15px solid #fff;
    flex-direction: column;
    h4 {
      font-size: 25px;
      margin-top: 20px;
      color: #fff;
      font-weight: bold;
    }
  }
}
// 右半邊
.login-rightBox {
  flex: 0 80%;
  background-color: #fff;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .inputWraper {
    display: flex;
    width: 500px;
    height: 300px;
    padding: 25px;
    background-color: #262d5a;
    justify-content: space-between;
    align-items: flex-end;

    .inputBox {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      h5 {
        font-weight: bold;
        color: #fff;
        margin: 0;
        font-size: 25px;
        margin-bottom: 10px;
      }
      .inputInput {
        width: 250px;
        height: 40px;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #ffbc2e;
        color: #fff;
        font-size: 28px;
      }
    }
    .btn-start {
      background-color: #ffbc2e;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 25px;
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>