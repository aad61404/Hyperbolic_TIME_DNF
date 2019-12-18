<template>
     <div id="app" :class="{'is-play': isPlay}">
      <div class="modal-box">
        <div class="modal-panel-area">
          <div class="menu-tabs">
            <a href="#tab1" class="menu-btn btn-todo-list current" @click="createChart">
              <i class="material-icons">list</i>
              <p>to-do list</p>
            </a>
            <a href="#tab2" class="menu-btn btn-analytics" @click="createChart">
              <i class="material-icons">poll</i>
              <p>analytics</p>
            </a>
            <a href="#tab3" class="menu-btn btn-ringtones" @click="createChart">
              <i class="material-icons">library_music</i>
              <p>ringtones</p>
            </a>
          </div>
          <div class="menu-status">
            <div class="s-icon">
              <i class="material-icons">play_arrow</i>
            </div>
            <div class="s-circle">
              <div class="s-timer">25:00</div>
              <p class="s-txt">the First thing to do today</p>
            </div>
          </div>
        </div>
        <div class="modal-content-area">
          <div class="tab-container">
            <div id="tab1" class="tab-content todo-list-content">
              <div class="add-list">
                <input
                  type="text"
                  class="input-text"
                  placeholder="Add a New Mission..."
                  v-model="newTodo"
                  @keyup.enter="addTodo"
                />
                <a href="javascript:;" class="add-btn" @click.prevent="addTodo">
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="todo-list-collapse">

              </div>
            </div>
            <div id="tab2" class="tab-content analytics-content">
              <div class="info">
                <div class="i-title">focus time</div>
                <div class="i-content">
                  <div class="date today">
                    <div class="unit">Today</div>
                    <div class="count">
                      <p class="c-num">20</p>
                      <p class="c-item">/tomato</p>
                    </div>
                  </div>
                  <div class="date week">
                    <div class="unit">Week</div>
                    <div class="count">
                      <p class="c-num">108</p>
                      <p class="c-item">/tomato</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info">
                <div class="i-title i-title-multi">
                  <div class="title">chart</div>
                  <div class="select-date">
                    <a href="javascript:;" class="s-prev s-btn">
                      <i class="material-icons">chevron_left</i>
                    </a>
                    <div class="s-content">2019.7.1 - 2019.7.7</div>
                    <a href="javascript:;" class="s-next s-btn">
                      <i class="material-icons">chevron_right</i>
                    </a>
                  </div>
                </div>
                <div class="chart-view">
                  <canvas id="myChart" width="445" height="243"></canvas>
                </div>
              </div>
            </div>
            <div id="tab3" class="tab-content ringtones-content">
              <div class="type">
                <div class="t-name">Work</div>
                <div class="t-checkbox-list">
                  <el-radio-group v-model="radio">
                    <el-radio :label="1">none</el-radio>
                    <el-radio :label="2">Default</el-radio>
                    <el-radio :label="3">alarm</el-radio>
                    <el-radio :label="4">alarm</el-radio>
                    <el-radio :label="5">beep</el-radio>
                    <el-radio :label="6">bell</el-radio>
                    <el-radio :label="7">bird</el-radio>
                    <el-radio :label="8">bugle</el-radio>
                    <el-radio :label="9">digital</el-radio>
                    <el-radio :label="10">drop</el-radio>
                    <el-radio :label="11">horn</el-radio>
                    <el-radio :label="12">music</el-radio>
                    <el-radio :label="13">ring</el-radio>
                    <el-radio :label="14">warning</el-radio>
                    <el-radio :label="15">whistle</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="type">
                <div class="t-name">Break</div>
                <div class="t-checkbox-list">
                  <el-radio-group v-model="radio2">
                    <el-radio :label="1">none</el-radio>
                    <el-radio :label="2">Default</el-radio>
                    <el-radio :label="3">alarm</el-radio>
                    <el-radio :label="4">alarm</el-radio>
                    <el-radio :label="5">beep</el-radio>
                    <el-radio :label="6">bell</el-radio>
                    <el-radio :label="7">bird</el-radio>
                    <el-radio :label="8">bugle</el-radio>
                    <el-radio :label="9">digital</el-radio>
                    <el-radio :label="10">drop</el-radio>
                    <el-radio :label="11">horn</el-radio>
                    <el-radio :label="12">music</el-radio>
                    <el-radio :label="13">ring</el-radio>
                    <el-radio :label="14">warning</el-radio>
                    <el-radio :label="15">whistle</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-close-info">
          <a href="javascript:;" class="close-btn" @click.prevent="closeModal">
            <i class="material-icons">clear</i>
          </a>
          <h3>Pomodoro</h3>
        </div>
      </div>
      <div class="main">
        <div class="panel-list-area main-area">
          <div class="add-list">
            <input
              type="text"
              class="input-text"
              placeholder="Add a New Mission..."
              v-model="newTodo"
              @keyup.enter="addTodo"
            />
            <a href="javascript:;" class="add-btn" @click.prevent="addTodo">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="current-list">
            <div class="c-chk-item item-custom">
              <input type="checkbox" id="check-1" class="todo-list-chk" />
              <label for="check-1">the First thing to do today</label>
              <div class="count">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="timer">{{ time }}</div>
          </div>
          <ul class="todo-list-group">

          </ul>
        </div>
        <div class="panel-menu-area main-area">
          <div class="menu-all">
            <a href="javascript:;" id="btn-todo-list" class="menu-btn" data-num="1" @click.prevent="showModal">
              <i class="material-icons">list</i>
            </a>
            <a href="javascript:;" id="btn-analytics" class="menu-btn" data-num="2" @click.prevent="showModal">
              <i class="material-icons">poll</i>
            </a>
            <a href="javascript:;" id="btn-ringtones" class="menu-btn" data-num="3" @click.prevent="showModal">
              <i class="material-icons">library_music</i>
            </a>
          </div>
          <h1>Pomodoro</h1>
        </div>
        <div class="clock-enable main-area">
          <div class="clock">
            <a href="javascript:;" class="btn-play" v-if="!isPlay" @click="timerRun">
              <i class="material-icons">play_circle_filled</i>
            </a>
            <a href="javascript:;" class="btn-reset" v-if="!isPlay" @click="timerReset">
              <div class="dot"></div>
            </a>
            <a href="javascript:;" class="btn-pause" v-else @click="timerPause">
              <i class="material-icons">pause_circle_filled</i>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import $ from "jquery";
export default {
    el: '#app',
    data() {
      return {
        newTodo: '',
        todoList: [],
        isPlay: false,
        activeName: ['1', '2'],
        radio: 2,
        radio2: 4,
        chart: null,
        chartConfig: {},
        totalTime: 25 * 60,
        timerPaused: false,
        interval: null
      };
    },
    mounted() {
      this.$nextTick(() => {
        let _showTab = 0;
        let $defaultLi = $('.menu-tabs a')
          .eq(_showTab)
          .addClass('current');
        $($defaultLi.find('a').attr('href'))
          .siblings()
          .hide();
        $('.menu-tabs a').click(function() {
          let $this = $(this);
          $this
            .addClass('current')
            .siblings('.current')
            .removeClass('current');
          let N = $(this)
            .attr('href')
            .substr(4);
          $('.tab-content').hide();
          $('.tab-content').removeClass('active');
          $('#tab' + N)
            .fadeIn()
            .addClass('active');
          return false;
        });
      });
    },
    methods: {
      addTodo() {
        let value = this.newTodo.trim();
        let timestamp = Math.floor(Date.now());
        if (!value) return;
        this.todoList.push({
          id: timestamp,
          title: value,
          completed: false
        });
        this.newTodo = '';
      },
      removeTodo(todo) {
        let newIndex = '';
        this.todoList.forEach((item, key) => {
          if (todo.id === item.id) {
            newIndex = key;
          }
        });
        this.todoList.splice(newIndex, 1);
      },

      showModal(e) {
        let btnId = e.target.parentNode.id;
        let dataNum = Number(e.target.parentNode.dataset.num);
        $('.main-area').css({
          opacity: 0,
          display: 'none'
        });
        $('.modal-box').css({
          opacity: 1,
          display: 'flex'
        });
        $('.menu-tabs .menu-btn').removeClass('current');
        $('.' + btnId).addClass('current');
        $('.tab-content').css('display', 'none');
        $('#tab' + dataNum)
          .css('display', 'block')
          .addClass('active');
        if ($('.btn-analytics').hasClass('current')) {
          console.log('Y');
          this.createChart();
        }
      },
      closeModal() {
        $('.main-area').css({
          opacity: 1,
          display: 'flex'
        });
        $('.modal-box').css({
          opacity: 0,
          display: 'none'
        });
        $('.menu-tabs .menu-btn').removeClass('current');
        $('.tab-content')
          .css('display', 'none')
          .removeClass('active');
      },
      showModalList() {
        $('.main-area').css({
          opacity: 0,
          display: 'none'
        });
        $('.modal-box').css({
          opacity: 1,
          display: 'flex'
        });
        $('.menu-tabs .menu-btn').removeClass('current');
        $('.btn-todo-list').addClass('current');
        $('.tab-content').css('display', 'none');
        $('#tab1').css('display', 'block');
      },
   
      timerRun() {
        this.isPlay = true;
        this.interval = setInterval(this.countdownTimer, 1000);
        console.log(this.totalTime);
      },
      timerPause() {
        this.isPlay = false;
        clearInterval(this.interval);
      },
      timerReset() {
        this.isPlay = false;
        clearInterval(() => {
          this.interval;
        });
        this.totalTime = 25 * 60;
      },
      timerCountdown() {
        console.log('Working');
        this.interval = setInterval(this.updateCurrentTime, 1000);
        setInterval(() => {
          this.timerMinutes--;
        }, 60 * 1000);

        if (this.timerSeconds === '00') {
          this.timerSeconds = 59;
          setInterval(() => {
            this.timerSeconds--;
          }, 1000);
        } else {
          setInterval(() => {
            this.timerSeconds--;
          }, 1000);
        }
      },
      countdownTimer() {
        this.totalTime--;
      }
    },
    computed: {
      time() {
        return this.minutes + ':' + this.seconds;
      },
      minutes() {
        let min = Math.floor(this.totalTime / 60);
        return min >= 10 ? min : '0' + min;
      },
      seconds() {
        let sec = this.totalTime - this.minutes * 60;
        return sec >= 10 ? sec : '0' + sec;
      },

      filterTodoList() {
        let newTodoList = [];
        this.todoList.forEach(function(item) {
          if (!item.completed) {
            newTodoList.push(item);
          }
        });
        return newTodoList;
      }
    }
  };



</script>

<style lang="scss" scoped>
$primaryColor: #ff4384;
$secondaryColor: #003164;
$disableColor: #e4ceda;
$primaryFont: 'Roboto', sans-serif;
$btnBorderShadow: 0 0 0 1px rgba(61, 70, 79, 0.05), 0 1px 3px 0 rgba(61, 70, 79, 0.15);

@mixin flexBox() {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin transition($time: 0.4s) {
  transition: all $time ease-out;
}

/*----------  share  ----------*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: #333;
  text-decoration: none;
  outline: none !important;
  box-shadow: none !important;
  @include transition;
}
a:hover {
  text-decoration: none;
}

input {
  color: $secondaryColor;
  font-family: '微軟正黑體', sans-serif, Helvetica, Arial, Verdana;
  font-size: 15px;
  outline: none !important;
  box-shadow: none !important;
}
textarea {
  color: #8d8d8d;
  font-family: '微軟正黑體', sans-serif, Helvetica, Arial, Verdana;
  font-size: 15px;
  padding: 2px 5px;
}

#app {
  width: 100%;
  height: 100%;
  @include transition;
  overflow-y: hidden;
}

// placeholder color
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $primaryColor;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: $primaryColor;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: $primaryColor;
}

label {
  user-select: none;
}

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffedf7;
  font-family: $primaryFont;
  color: #333;
}

.main {
  width: 100%;
  min-width: 1280px;
  display: flex;
  position: relative;
}

.add-list {
  width: 445px;
  height: 56px;
  display: flex;
}
.input-text {
  width: calc(445px - 56px);
  height: 56px;
  padding: 18px 16px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  border: 0;
}
.add-btn {
  width: 56px;
  height: 56px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primaryColor;
  &:hover {
    background-color: lighten($primaryColor, 25%);
  }
}

.list-group-item {
  font-size: 16px;
  color: $secondaryColor;
  text-transform: uppercase;
  font-weight: 600;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 49, 100, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &:last-child {
    border-bottom: 0;
    display: flex;
    justify-content: flex-end;
  }
}

.item-custom {
  display: flex;
  .i-play {
    margin-left: 20px;
    @include transition;
  }
}
.del-btn {
  color: #a0a0a0;
  @include transition;
  &:hover {
    color: $primaryColor;
  }
}

.completed {
  text-decoration: line-through;
  font-style: italic;
}

.last-item {
  display: flex;
  justify-content: flex-end;
}

/*----------  panel-list-area  ----------*/
.panel-list-area {
  // display: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 450px);
  background: #ffedf7;
  float: left;
  padding: 48px 80px;

  // input checkbox
  .item-custom input {
    position: absolute;
    opacity: 0;
    &:checked + label:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 12px;
      width: 25px;
      height: 13px;
      border: 3px solid #003164;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(-45deg);
      @include transition;
    }
  }
  .item-custom input + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    @include transition;
    &:before {
      content: '';
      display: inline-block;
      vertical-align: top;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: transparent;
      border: 2px solid $secondaryColor;
      margin-right: 16px;
    }
  }

  .current-list {
    width: 445px;
    color: $secondaryColor;
    text-transform: uppercase;

    .item-custom input {
      position: absolute;
      opacity: 0;
      &:checked + label:after {
        content: '';
        position: absolute;
        top: 15px;
        left: 12px;
        width: 25px;
        height: 13px;
        border: 3px solid #003164;
        border-top: none;
        border-right: none;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(-45deg);
        @include transition;
      }
    }
    .item-custom input + label {
      position: relative;
      cursor: pointer;
      padding: 0;
      @include transition;
      &:before {
        content: '';
        display: inline-block;
        vertical-align: top;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: transparent;
        border: 2px solid $secondaryColor;
        margin-right: 16px;
      }
    }
    .c-chk-item {
      position: relative;
      font-size: 24px;
      font-weight: 600;
      width: 454px;
      .count {
        position: absolute;
        top: 33px;
        left: 74px;
        display: flex;
      }
      span {
        width: 12px;
        height: 12px;
        border: 1px solid $primaryColor;
        border-radius: 50%;
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .timer {
      color: $primaryColor;
      font-size: 176px;
      font-weight: 600;
    }
  }

  .todo-list-group {
    width: 445px;
    .item-custom input:checked + label:after {
      content: '';
      position: absolute;
      top: 5px;
      left: 6px;
      width: 9px;
      height: 5px;
      border: 2px solid #003164;
      border-top: none;
      border-right: none;
    }
    .btn-more {
      font-size: 16px;
      color: $primaryColor;
      text-transform: uppercase;
      font-weight: 600;
      margin-top: 10px;
      &:hover {
        color: darken($primaryColor, 25%);
      }
    }
    .completed + .i-play {
      color: #a1a1a1;
    }
    .completed {
      color: #a1a1a1;
    }
    .list-group-item {
      font-size: 16px;
      color: $secondaryColor;
      text-transform: uppercase;
      font-weight: 600;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 49, 100, 0.2);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &:last-child {
        border-bottom: 0;
        display: flex;
        justify-content: flex-end;
      }
      .del-btn {
        color: $secondaryColor;
        @include transition;
      }
    }
  }

  .list-group-item {
    font-size: 16px;
    color: $disableColor;
    text-transform: uppercase;
    font-weight: 600;
    padding: 12px 0;
    border-bottom: 1px solid rgba(228, 206, 218, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &:last-child {
      border-bottom: 0;
      display: flex;
      justify-content: flex-end;
    }
    .del-btn {
      color: $disableColor;
      @include transition;
    }
  }
}

/*----------  panel-menu-area  ----------*/
.panel-menu-area {
  // display: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 450px;
  height: 100vh;
  background: #003164;
  float: right;
  padding: 48px 80px;
  color: #fff;

  .menu-all {
    display: flex;
    flex-direction: column;
    height: 204px;
    align-items: flex-end;
    justify-content: space-between;
  }
  a {
    width: 36px;
    height: 36px;
    color: #fff;
    &:hover {
      color: $primaryColor;
    }
  }
  i {
    font-size: 36px;
  }

  h1 {
    font-size: 24px;
    text-transform: uppercase;
    writing-mode: vertical-lr;
  }
}

/*----------  clock-area  ----------*/
.clock-enable {
  // display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 175px;
  clear: both;
  width: 540px;
  height: 540px;
  border: 4px solid $primaryColor;
  border-radius: 50%;
  transform: translateY(-50%);
  .clock {
    width: 510px;
    height: 510px;
    background-color: $primaryColor;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-play {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: #fff;
    &:hover {
      i {
        color: $secondaryColor;
      }
    }
    i {
      font-size: 96px;
      color: #fff;
      @include transition;
    }
  }
  .btn-reset {
    display: flex;
    align-items: flex-end;
    height: 96px;
    &:hover {
      .dot {
        background-color: $secondaryColor;
      }
    }

    .dot {
      width: 12px;
      height: 12px;
      background-color: #fff;
      margin-bottom: 10px;
      @include transition;
    }
  }
}

// isPlay
.is-play {
  .clock {
    background-color: #fff;
  }

  .btn-pause {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: #fff;
    &:hover {
      i {
        color: $secondaryColor;
      }
      .dot {
        background-color: $secondaryColor;
      }
    }
    i {
      font-size: 96px;
      color: $primaryColor;
      @include transition;
    }
    .dot {
      width: 12px;
      height: 12px;
      background-color: $primaryColor;
      margin-bottom: 10px;
      @include transition;
    }
  }
}

/*----------  modal-box  ----------*/
.modal-box {
  display: none;
  // display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: $secondaryColor;
  color: #fff;
  padding: 48px 85px 48px 85px;
}

// modal-panel-area
.modal-panel-area {
  position: relative;
}

.menu-tabs {
  font-size: 36px;
  font-weight: 600;
  width: 242px;
  height: 240px;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  .menu-btn {
    color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    &.current {
      color: $primaryColor;
      &:hover {
        cursor: default;
        color: $primaryColor;
      }
    }
    &:hover {
      color: #fff;
    }
    p {
      text-transform: uppercase;
      height: 36px;
      line-height: 36px;
    }
  }
  .material-icons {
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 8px;
    font-size: 36px;
  }
}

.menu-status {
  width: 350px;
  position: absolute;
  bottom: -46px;

  .s-icon {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 116px;
    height: 116px;
    background-color: $primaryColor;
    border-radius: 50%;
    border: 12px solid $secondaryColor;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
      content: '';
      width: 102px;
      height: 102px;
      border: 2px solid $primaryColor;
      border-radius: 50%;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    .material-icons {
      font-size: 62px;
    }
  }

  .s-circle {
    height: 175px;
    background-color: #ffedf7;
    border-radius: 350px 350px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .s-timer {
      color: $primaryColor;
      font-size: 64px;
      font-weight: 600;
      margin-top: 57px;
    }
    .s-txt {
      color: $secondaryColor;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 24px;
    }
  }
}

.modal-content-area {
  width: 445px;
  #tab1 {
    display: none;
    // display: block;
    flex-direction: column;
    justify-content: space-between;

    .todo-list-collapse {
      margin-top: 48px;
      background-color: transparent;
    }

    .item-done {
      input:checked + label {
        font-style: italic;
        text-decoration: line-through;
      }
      .i-record {
        height: 24px;
        display: flex;
        align-items: center;
        .count {
          width: 12px;
          height: 12px;
          background-color: #fff;
          display: block;
          border-radius: 50%;
          margin-right: 8px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  #tab2 {
    display: none;
    // display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      width: 445px;
      margin-bottom: 60px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .i-title {
      height: 44px;
      background-color: rgba(255, 255, 255, 0.2);
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
      padding: 8px 16px;
      &.i-title-multi {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .select-date {
        font-size: 16px;
        display: flex;
        align-items: center;
      }
      .s-btn {
        width: 24px;
        height: 24px;
        color: #fff;
        &:hover {
          color: $primaryColor;
        }
      }
      .s-prev {
        margin-right: 8px;
      }
      .s-next {
        margin-left: 8px;
      }
    }

    .i-content {
      display: flex;
      flex-direction: row;
      margin-top: 16px;
      justify-content: space-between;
    }
    .unit {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .count {
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
    .c-num {
      font-size: 64px;
      font-weight: 600;
      color: $primaryColor;
      margin-right: 8px;
    }
    .c-item {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.2);
    }

    .chart-view {
      width: 445px;
      height: 243px;
      margin-top: 30px;
    }
  }

  #tab3 {
    display: none;
    // display: flex;
    flex-direction: column;
    width: 445px;

    .type {
      margin-bottom: 46px;
    }
    .t-name {
      height: 44px;
      padding: 8px 16px;
      background-color: rgba(255, 255, 255, 0.2);
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .t-checkbox-list {
      .el-radio__label {
        font-size: 16px;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
    .el-radio-group {
      display: flex;
      justify-content: space-between;
      width: 445px;
      flex-wrap: wrap;
    }
    .el-radio {
      width: 110px;
      margin-bottom: 18px;
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
      &:nth-last-child(-n + 3) {
        margin-bottom: 0;
      }
    }
    .el-radio__inner {
      width: 24px;
      height: 24px;
      background-color: transparent;
      border: 2px solid #fff;
      &:after {
        width: 12px;
        height: 12px;
        background-color: $primaryColor;
      }
    }
    .el-radio__input.is-checked {
      .el-radio__inner {
        border: 2px solid $primaryColor;
      }
    }
  }
}

.modal-close-info {
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  .close-btn {
    width: 48px;
    color: #fff;
    &:hover {
      color: $primaryColor;
    }

    .material-icons {
      font-size: 48px;
    }
  }

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    writing-mode: vertical-lr;
  }
}

/*---------- custom element UI  ----------*/
.el-collapse {
  border-top: 0;
  border-bottom: 0;
}
.el-collapse-item {
  margin-bottom: 49px;
}
.el-collapse-item__header {
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 16px;
  border-bottom: 0;
}
.el-collapse-item__arrow {
  transform: rotate(-90deg);
}
.el-collapse-item__wrap {
  background-color: transparent;
  border-bottom: 0;
  .el-collapse-item__content {
    padding-bottom: 0;

    .item-custom input + label:before {
      border: 2px solid #fff;
    }
    .item-custom input:checked + label:after {
      top: 7px;
      left: 6px;
      width: 9px;
      height: 5px;
      border: 2px solid #ffffff;
      border-top: none;
      border-right: none;
    }
    .todo-content input:checked + label:after {
      content: none;
    }
  }

  .item-custom input {
    position: absolute;
    opacity: 0;
    &:checked + label:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 12px;
      width: 25px;
      height: 13px;
      border: 3px solid #003164;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(-45deg);
      @include transition;
    }
  }
  .item-custom input + label {
    position: relative;
    cursor: pointer;
    padding: 0;
    @include transition;
    &:before {
      content: '';
      display: inline-block;
      vertical-align: top;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: transparent;
      border: 2px solid $secondaryColor;
      margin-right: 16px;
    }
  }

  .list-group-item {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 10px 0;
    &:first-child {
      margin-top: 16px;
    }
    &:last-child {
      border-bottom: 0;
    }
    .item-custom {
      display: flex;
    }
  }
  .i-play {
    height: 24px;
    margin-left: 20px;
  }
  .del-btn {
    color: #a0a0a0;
    @include transition;
    &:hover {
      color: $primaryColor;
    }
  }
  input {
    color: #fff;
  }
}

</style>
