<template>
  <div>
    <Navbar />
    <SearchBar />
    <div class="wraper">
      <div class="room-box">
        <div class="room-box-item1">
          <h1>Almost</h1>
          <p>
            您將預訂的房型為
            <span>Single Room</span>
          </p>
          <p>請填寫以下資料，即可完成訂房。</p>

          <div class="form">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputEmail4">
                  <span style="color:red;font-weight:bold;">*</span>真實姓名
                </label>
                <input type="email" class="form-control" placeholder=" ex. 王小明" />
              </div>
              <div class="form-group col-md-2"></div>
              <div class="form-group col-md-4">
                <label for="inputEmail4">Check In</label>
                <p style="padding-top: 10px">2019/10/17</p>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputPassword4">
                  <span style="color:red;font-weight:bold;">*</span>手機號碼
                </label>
                <input type="password" class="form-control" placeholder=" ex. 09xx-xxx-xxx" />
              </div>
              <div class="form-group col-md-2"></div>
              <div class="form-group col-md-4">
                <label for="inputEmail4">Check Out</label>
                <p style="padding-top: 10px">2019/10/19</p>
              </div>
            </div>
          </div>
        </div>

        <div class="room-box-item2">
          <div class="btn-wraper">
            <h3 class="normal-day">
              平日
              <span>$1,380</span>
            </h3>
            <button class="more" data-toggle="modal" data-target="#myModal">BACK -</button>
            <button class="book">
              <router-link to="ok" style="color: white;">OK !</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchBar from "@/components/SearchBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "book",
  components: {
    Navbar,
    SearchBar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
}

.room-box {
  width: 100%;
  height: 300px;
  display: flex;
  margin-bottom: 28px;
}

/****
room-box-item1 room-box-item2  room-box-item3
****/

.room-box-item1 {
  flex: 0 0 70%;
  max-width: 70%;
  padding: 4% 0% 0 120px;
  img {
    width: 100%;
    height: 100%;
  }
  .form {
    padding-top: 4%;
  }
}
.room-box-item2 {
  flex: 0 0 30%;
  max-width: 30%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .btn-wraper {
    padding-top: 150px;
    .more {
      width: 132px;
      height: 36px;
      border: 2px solid #000;
      background-color: #ffffff;
      font-weight: 400;
    }
    .book {
      width: 132px;
      height: 36px;
      background-color: #000;
      border: 2px solid #000;
      color: #ffffff;
      font-weight: 400;
    }
  }

  h3:first-child {
    padding-top: 25px;
    padding-bottom: 15px;
    text-align: end;
  }
  h3 {
    font-weight: bold;
    span {
      font-size: 30px;
      font-weight: 600;
    }
  }
}
</style>
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