<template>
  <div id="tab2">
    <div class="row">
      <ListLeft />
      <transition appear appear-active-class="fadeInDown-active">
        <div class="col-6 todolist h-100">
          <div class="work-header toogle-btn">WORK</div>

          <div class="work-music-box">
            <div class="music-option" :key="i" v-for="(name, i) in options">
              <input
                type="radio"
                class="radio-btn"
                :id="'work-' + name"
                :value="name"
                v-model="workSelected"
                @click="playSound(name,true,1)"
              />
              <label :for="'work-' + name">
                {{name}}
                <a class="stop-play" href="#" @click.prevent="playSound(name, false, 1)">×</a>
              </label>
            </div>
          </div>

          <div class="break-header toogle-btn">BREAK</div>
          <div class="break-music-box">
            <div class="music-option" :key="i" v-for="(name, i) in options">
              <input
                type="radio"
                class="radio-btn"
                :id="'break-' + name"
                :value="name"
                v-model="breakSelected"
                @click="playSound(name,true,1)"
              />
              <label :for="'break-' + name">
                {{name}}
                <a class="stop-play" href="#" @click.prevent="playSound(name, false, 1)">×</a>
              </label>
            </div>
          </div>

          <div id="audio">
            <audio data-key="NONE">
              <source src="@/assets/NONE.mp3" />
            </audio>
            <audio data-key="DEFAULT">
              <source src="@/assets/Motorcycle.mp3" />
            </audio>
            <audio data-key="ALARM">
              <source src="@/assets/ALARM.mp3" />
            </audio>
            <audio data-key="Alarm_Clock">
              <source src="@/assets/Alarm_Clock.mp3" />
            </audio>
            <audio data-key="119">
              <source src="@/assets/Amblumance.mp3" />
            </audio>
            <audio data-key="Creature">
              <source src="@/assets/Creature.mp3" />
            </audio>
            <audio data-key="Clown">
              <source src="@/assets/Clown.mp3" />
            </audio>
            <audio data-key="Cowbell">
              <source src="@/assets/Cowbell.mp3" />
            </audio>
            <audio data-key="Jet_fire">
              <source src="@/assets/Jet_fire.mp3" />
            </audio>
            <audio data-key="Jingle_Bells">
              <source src="@/assets/Jingle_Bells.mp3" />
            </audio>
            <audio data-key="Ring">
              <source src="@/assets/Ring.mp3" />
            </audio>
            <audio data-key="Yelling">
              <source src="@/assets/Yelling.mp3" />
            </audio>
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
      workSelected: "DEFAULT",
      breakSelected: "ALERT",
      options: "NONE DEFAULT ALARM Alarm_Clock 119 Creature Clown Cowbell Jet_fire Ring Jingle_Bells Yelling".split(
        " "
      ),
      audio: null
    };
  },
  components: {
    ListLeft,
    ListRight
  },
  methods: {
    playSound(el, isPlay) {
      const options = this.options;
      const sound = document.querySelector(`audio[data-key = "${el}"]`);

      if (isPlay) {
        // 先將全部關閉再開啟
        options.forEach(item => {
          document.querySelector(`audio[data-key = "${item}"]`).pause();
        });
        sound.currentTime = 0;
        sound.play();
      } else {
        sound.pause();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$bluebackground: #003164;
#tab2 {
  display: block;
  width: 100%;
  height: 100%;
  background-color: $bluebackground;
  position: relative;
  top: -800px;
  color: #ffffff;
}

$lightPink: #ffedf7;
$deepBlue: #003164;
$lightBlue: #e5f3ff;
$deepPink: #ff4384;
$normalBlue: #00a7ff;
.work-header {
  position: relative;
}
.break-header {
  position: relative;
}
[class$="music-box"] {
  width: 100%;
  height: 230px;
  padding: 15px 15px 0px 15px;
  position: relative;
}
.break-music-box {
}

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

.music-option {
  width: 33%;
  text-align: left;
  display: inline-block;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  line-height: 22px;
  margin-top: 10px;
  vertical-align: middle;
}
.music-option label {
  user-select: none;
}
.music-option .radio-btn {
  appearance: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  margin-right: 5px;
  vertical-align: middle;
  background-color: transparent;
  border: solid 2px #fff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
.music-option .radio-btn:hover {
  opacity: 0.8;
}
.music-option .radio-btn:checked {
  border-color: #ff4384;
}
.stop-play {
  display: none;
}
.music-option .radio-btn:checked + label {
  .stop-play {
    display: inline-block;
  }
}
.music-option .radio-btn:checked:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background-color: #ff4384;
  height: 11px;
  width: 11px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>




