<template>
  <div class="right">
    <h1>信用卡付款</h1>
    <div class="row-icon">
      <div class="p161"></div>
      <div class="p162"></div>
      <div class="p163"></div>
      <div class="p164"></div>
    </div>
    <div class="form">
      <div class="form-group">
        <label class="form-label" for="owner">
          <p>*</p>持卡人
        </label>
        <input type="text" class="form-owner" placeholder="請輸入持卡人姓名" v-model="name" />
      </div>
      <div class="form-group">
        <label class="form-label">
          <p>*</p>信用卡號
        </label>
        <input type="text" class="form-card" placeholder="****" v-model="cardnumber[0]" />
        <span>-</span>
        <input type="text" class="form-card" placeholder="****" v-model="cardnumber[1]" />
        <span>-</span>
        <input type="text" class="form-card" placeholder="****" v-model="cardnumber[2]" />
        <span>-</span>
        <input type="text" class="form-card" placeholder="****" v-model="cardnumber[3]" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">
            <p>*</p>有效月年
          </label>
          <div class="form-input-row">
            <input type="text" class="form-month" placeholder="MM" v-model="date[0] " />
            <span>-</span>
            <input type="text" class="form-year" placeholder="YY" v-model="date[1]" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">
            <p>*</p>信用卡背面末三碼
          </label>
          <input type="text" class="form-three" placeholder="***" v-model="three" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="phone">
          <p>*</p>手機號碼
        </label>
        <input type="text" class="form-phone" v-model="phone" />
      </div>
      <p class="ps-golden">
        如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。
        <br />若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。
      </p>
      <div class="green-btn" @click="check"><router-link to="/finished">確認付款 </router-link></div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Credit.vue",
  data() {
    return {
      name: "",
      cardnumber: ["", "", "", ""],
      date: ["", ""],
      three: "",
      phone: "",
      checkList: {
        name: false,
        cardNum: false,
        date: false,
        code: false,
        phone: false
      }
    };
  },
  methods: {
    check(){
     
    },
  },
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

//****
// right
//******

.right {
  display: block;
  width: 57%;
  height: 100%;
  background-color: $span-grey;
  float: right;
  padding: 12% 8% 8% 8%;

  h1 {
    font-size: 40px;
    color: $white;
    margin: 60px 0px;
  }

  label {
    display: block;
    color: $background-green;

    p {
      display: inline-block;
      color: $mark-orange;
    }
  }

  .ps-golden {
    color: $ps-golden;
    line-height: 25px;
  }
  .green-btn {
    position: relative;
    width: 257px;
    height: 45px;
    font-size: 18px;
    font-weight: bold;
    background-color: $background-green;
    text-align: center;
    line-height: 45px;
    border-radius: 10px;
    left: 145px;
    top: 64px;
  }
}

.form {
  &-group {
    color: $background-green;
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0px;
    span {
      font-size: 30px;
      padding: 0px 8px;
    }
  }
  // input 統一 外觀
  input {
    background: none;
    border: none;
    border-bottom: 2px solid rgb(117, 149, 81);
    font-size: 23px;
  }
  // 信用卡號
  &-card {
    width: 100px;
    text-align: center;
  }

  // form-row 把月年、信用卡末三碼，包在同一行
  // 月 年
  .form-row {
    display: flex;

    // form-row 內層的 form-group 跟外層其他的 form-group 樣式不同
    .form-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 50%;

      .form-label {
        display: inline-block;
      }
    }
    // 信用卡末三碼
    .form-three {
      width: 135px;
    }
  }
  &-month,
  &-year {
    width: 75px;
    text-align: center;
  }

  // 手機號碼
  &-phone {
    width: 100%;
  }
}

@for $i from 1 through 4 {
  //從 1 到 5 共執行 5 次。
  .p16#{$i} {
    display: inline-block;
    width: 110px;
    height: 76px;
    background-image: url("../../public/img/green-icons/Group 16#{$i}.svg");
  }
  .p16#{$i}:hover {
    background-image: url("../../public/img/green-icons/Group 19#{$i}.svg");
  }
}
</style>
