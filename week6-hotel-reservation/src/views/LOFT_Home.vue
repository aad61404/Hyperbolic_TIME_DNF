<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <div class="Room-type">
      <h1>Room type</h1>

      <div class="picture-grid">
        <div class="picture" v-for="item in items" v-bind:key="item.id">
          <img class="roomsPic" v-bind:src="item.imageUrl" style="width: 100%; height: 100%;"  />
          <div class="overlay" @click ="hey(item.id)">
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Carousel,
    Footer
  },
  data() {
    return {
      image_store: [
        "photo-1551776235-dde6d482980b.png",
        "photo-1528908929486-dfaa209c6986 (1).png",
        "photo-1501127122-f385ca6ddd9d.png",
        "photo-1519974719765-e6559eac2575.png",
        "photo-1501876725168-00c445821c9e.png",
        "photo-1552902019-a6dddd56544a.png"
      ],
      items: {}
    };
  },

  methods: {
    getOrders() {
      const tokenStr =
        "RSkomCXwuODKYYAzr0jcOsg2gIUjMxq9uA7UePLj9I42aBxqLvRXkO7JgIdc";
      this.axios
        .get(
          "https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
          {
            headers: { Authorization: `Bearer ${tokenStr}` }
          }
        )
        .then(response => {
          console.log(response);
        });
    },
    hey(yo) {
      // const vm = this;
      console.log(yo);
    }
  },
  created() {
    this.getOrders();

  }
};
</script>

<style lang="scss">
/* 引入Barlow 字體*/
@import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");
* {
  font-family: "Barlow", sans-serif;
}

.Room-type {
  margin: 0px 75px 75px 75px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 45px 0px 35px 0px;
  }
  .picture-grid {
    display: grid;
    width: 1125px;
    height: 605px;
    grid-template-columns: 370px 370px 370px;
    grid-template-rows: 300px 300px;
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    @for $i from 1 through 6 {
      .picture#{$i} {
        // background-color: red;
      }
    }
    .roomsPic {
      width: 100%;
      height: 100%;
    
    }
  }
}

.picture .overlay {
  position: relative;
  top: -100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #3c43462e;
    cursor: pointer;
}
.picture:hover .overlay {
  opacity: 1;
}
.picture .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
