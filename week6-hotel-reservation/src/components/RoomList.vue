

<template>
  <div class="wraper">
    <div class="roomlist-container">
      <div class="room-box" v-for="item in items" v-bind:key="item.id">
        <div class="room-box-item1">
          <img v-bind:src="item.imageUrl" alt />
        </div>
        <div class="room-box-item2">
          <h1>{{ item.name }}</h1>
          <div class="room-detail">
            <li>｜人數：1</li>
            <li>｜坪數：18平方公尺</li>
            <li>｜床型：單人床</li>
            <li>｜餐點：附早餐</li>
          </div>
          <div class="room-icon">
            <img src="../../public/images/svg/fork.svg" alt />
            <img src="../../public/images/svg/fridge.svg" alt />
            <img src="../../public/images/svg/pet.svg" alt />
            <img src="../../public/images/svg/wifi.svg" alt />
            <img src="../../public/images/svg/phone.svg" alt />
            <img src="../../public/images/svg/pet.svg" alt />
            <img src="../../public/images/svg/no-smoking.svg" alt />
          </div>
        </div>
        <div class="room-box-item3">
          <h3 class="normal-day">
            平日每晚
            <span>${{ item.normalDayPrice }}</span>
          </h3>
          <h3 class="holiday">
            假日每晚
            <span>${{ item.holidayPrice }}</span>
          </h3>
          <div class="btn-wraper">
            <button class="more" data-toggle="modal" data-target="#myModal">MORE +</button>
            <button class="book">BOOK NOW +</button>
          </div>
        </div>
      </div>
      <!-- <p v-for="item in items" v-bind:key="item.id">{{ item.imageUrl}}</p> -->
    </div>

    <!-- modal -->
    <!-- Button to Open the Modal -->

    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Single Room</h4>

          <img class="modal-img" v-bind:src="this.items[0].imageUrl" alt />
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!--room-img-list -->
        <div class="modal-small-img"></div>

        <!-- modal-detail -->
        <div class="modal-detail">
          <div class="modal-detail-box">
            <div class="modal-device">
              <h1>房間設備</h1>
            </div>
            <div class="modal-other">
              <h1>其他</h1>
            </div>
          </div>
          <div class="modal-introduction">
            <h2>簡介</h2>
            <p>Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p>

            <div class="modal-intro">
              <li>｜人數：1</li>
              <li>｜坪數：18平方公尺</li>
              <li>｜checkIn 時間：最早15:00、最晚21:00</li>
              <li>｜床型：單人床</li>
              <li>｜餐點：附早餐</li>
              <li>｜checkOut 時間：10:00</li>
            </div>
          </div>
        </div>
        
       <!-- SearchBar -->
        <SearchBar />
      </div>
    </div>
    <!-- modal -->
  </div>
  <!-- wraper -->
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "RoomList",
  components: {
    SearchBar
  },
  data() {
    return {
      success: true,
      items: [
        {
          id:
            "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
          imageUrl:
            "https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          normalDayPrice: 1380,
          holidayPrice: 1500,
          name: "Single Room"
        },
        {
          id:
            "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
          imageUrl:
            "https://images.unsplash.com/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
          normalDayPrice: 1899,
          holidayPrice: 2000,
          name: "Deluxe Single Room"
        },
        {
          id:
            "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
          imageUrl:
            "https://images.unsplash.com/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          normalDayPrice: 2460,
          holidayPrice: 2500,
          name: "Double Room"
        },
        {
          id:
            "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
          imageUrl:
            "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          normalDayPrice: 2888,
          holidayPrice: 3000,
          name: "Deluxe Double Room"
        },
        {
          id:
            "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
          imageUrl:
            "https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          normalDayPrice: 3350,
          holidayPrice: 3500,
          name: "Twin Room"
        },
        {
          id:
            "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
          imageUrl:
            "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
          normalDayPrice: 3899,
          holidayPrice: 4000,
          name: "Deluxe Twin Room"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: 500;
}
li {
  display: inline-block;
  width: 170px;
  height: 30px;
  margin: 0;
  list-style: none;
}
.wraper {
  width: 100%;
  height: 100%;
  // border: 1px red solid;
  padding: 60px 115px 60px 75px;
}
.roomlist-container {
  width: 100%;
  height: 100%;
  // border: 1px solid green;
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
  flex: 0 0 35%;
  max-width: 35%;
  img {
    width: 100%;
    height: 100%;
  }
}
.room-box-item2 {
  flex: 0 0 35%;
  max-width: 35%;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  .room-detail {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .room-icon {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 80px;
      height: 80px;
      padding: 10px 0px 0px 10px;
    }
  }
}
.room-box-item3 {
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
    padding-top: 35px;
    padding-bottom: 5px;
  }
  h3 {
    font-weight: bold;
    span {
      font-size: 30px;
      font-weight: 600;
    }
  }
}

//*****
// modal modal-img
//*****
.modal {
  width: 100%;
  background-color: rgba(75, 75, 75, 0.5);
  padding-top: 60px;
}
.modal-content {
  margin: auto;
  width: 1130px;
}
.modal-header {
  border: 0;
  height: 600px;
}
.modal-img {
  width: 450px;
  height: 600px;
}
.close {
  margin: 0;
}

//*****
// modal modal-small-img
//*****

.modal-detail {
  padding: 28px 44px;
}
.modal-small-img {
  background-color: #f8f1ea;
  width: 100%;
  height: 185px;
}

.modal-detail-box {
  width: 1000px;
  height: 200px;

  .modal-device {
    display: inline-block;
    width: 465px;
  }
  .modal-other {
    display: inline-block;
    width: 465px;
  }
  h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }
}

.modal-introduction {
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    padding-top: 15px;
    padding-bottom: 30px;
    width: 1000px;
    font-size: 1.3rem;
    line-height: 30px;
  }
}
.modal-intro {
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 200px;
    white-space: nowrap;
  }
}
</style>