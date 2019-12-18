<template>
  <div class="tomato-wraper">
    <div class="background-flex">
      <div class="row">
        <div class="todolist col-5 h-100">
          <div class="todo-top">
            <div class="addList">
              <input
                class="todo-input"
                v-model="newTodo"
                placeholder="ADD A NEW MISSION"
                @keyup.enter="addTodo"
              />
              <button @click="addTodo()">+</button>
            </div>
            <p style="color: #ff4384;">{{ newTodo }}</p>
          </div>

          <div class="todo-mid">
            <p class="p-blue">READ A BOOK</p>
            <p class="count-number">{{Times}}</p>
          </div>

          <div class="todo-down">
            <ul class="todo-list">
              <li
                v-for="item in todos"
                @click="changed(item)"
                v-bind:key="item.id"
                :class="{'finished': item.finished }"
              >
                {{ item.title }}
                <button
                  type="button"
                  @click="removeTodo(item)"
                  class="close ml-auto"
                >X</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 h-100">
          <Clock />
        </div>
        <div class="col-1 h-100">
          <router-link to="/tomato-clock/todolist">
            <md-icon id="micon1" class="md-size-4x">list</md-icon>
          </router-link>
          <router-link to="/tomato-clock/chart">
            <md-icon id="micon3" class="md-size-4x">insert_chart</md-icon>
          </router-link>
          <router-link to="/tomato-clock/music">
            <md-icon id="micon2" class="md-size-4x">library_music</md-icon>
          </router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import $ from "jquery";
import Clock from "@/components/Clock.vue";
import bus from '@/components/bus.js'
export default {
  name: "TomatoClock",
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: "1",
          title: "O THE FIRST THING TO DO TODAY",
          finished: false
        },
        {
          id: "2",
          title: "O THE SECOND THING TO DO TODAY",
          finished: false
        },
        {
          id: "3",
          title: "O THE THIRD THING TO DO TODAY",
          finished: true
        },
        {
          id: "4",
          title: "O THE FORTH THING TO DO TODAY",
          finished: false
        }
      ],
      cacheTodo: {},
      cacheTitle: "",
      visibility: "all",
      time: 1500,
      data: true,
      settime: ""
    };
  },
  components: {
    Clock
  },
  methods: {
    addTodo: function() {
      var value = this.newTodo.trim(); // trim 後面需加(), 功能為 : 消除前後不必要空白不包含中間
      var timestamp = Math.floor(Date.now());
      this.todos.push({
        id: timestamp,
        title: value,
        finished: false
      });
      this.newTodo = "";
    },
    removeTodo: function(todo) {
      var newIndex = "";
      var vm = this;
      vm.todos.forEach(function(item, key) {
        if (todo.id === item.id) {
          newIndex = key;
        }
      });
      vm.todos.splice(newIndex, 1);
    },
    changed: function(todo) {
      todo["finished"] = !todo["finished"];
    }, // 後面為 time
    Time() {
    },
    Timepic() {
      let vm = this;
      this.settime = setTimeout(function() {
        console.log(123);
        vm.time = vm.time - 1;
        vm.Timepic();
      }, 1000);
    }
  },
  computed: {
    filterTodo: function() {
      var newTodos = [];
      this.todos.forEach(function(item) {
        if (item.finished) {
          newTodos.push(item);
        }
      });
      return newTodos;
    },
    filterDone: function() {
      var newDones = [];
      this.todos.forEach(function(item) {
        if (!item.finished) {
          newDones.push(item);
        }
      });
      return newDones;
    },
    Times() {
      var min = Math.floor(this.time / 60);
      var sec = this.time % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      return min + ":" + sec;
    }
  }, //time
  created() {
    bus.$on("Event", data => {
      this.data = data.msg;
      if (this.data == true) {
        this.Timepic();
      } else clearTimeout(this.settime);
    });
  },
  beforeDestroy: function() {
    // [銷毀監聽事件]
    // 最好在组件銷毀前，清除 Event 所有監聽
    // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
    bus.$off("Event");
  }
};
</script>

<style lang="scss">
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");

$bluebackground: #003164;


/*****
 basic
*****/

.tomato-wraper {
  width: 1280px;
  height: 800px;
  background-color: #ffedf7;
  margin: 0 auto;
  margin-top: 50px;
}

.background-flex {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}

.background-flex::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 35.15625%;
  background-color: #003164;
}

.row {
  width: 100%;
  height: 100%;
  margin: 0;
  color: #fff;
  padding-top: 50px;
}
p {
  margin: 0;
}

// ******
// todo list
// *******
.todolist {
  display: flex;
  flex-direction: column;
  .todo-top,
  .todo-mid,
  .todo-down {
    flex: 1;
  }
}
.addList {
  width: 100%;
  height: 56px;
  display: flex;
  .todo-input {
    color: #ff4384;
    background-color: #f7f7f7;
    border: 0px;
    flex: 10;
  }
  .todo-input::placeholder {
    color: #ff4384;
  }
  button {
    flex: 1;
    color: #ff4384;
    font-size: 50px;
    border: 0;
    background: #f7f7f7;
    transition: all 0.4s ease-out;
  }
  button:hover {
    background-color: #ffc3d7;
  }
}

.todo-list {
  li {
    text-align: left;
    width: 100%;
    height: 32px;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: #003164;
    position: relative;
    margin-bottom: 9px;
    border-bottom: 1px solid rgba(0, 49, 100, 0.2);
    cursor: pointer;
  }
  button {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 5px;
    padding: 10px 15px;
    cursor: pointer;
  }
}
.count-number {
  font-size: 150px;
  color: #ff4384;
  font-family: "Roboto";
  font-weight: bold;
  line-height: 1;
}
.finished {
  text-decoration: line-through;
}

/*****
icon
******/

#micon1,
#micon2,
#micon3 {
  z-index: 100;
  color: #fff;
  width: 96px;
  height: 96px;
  margin: 0;
}
#micon1:hover,
#micon2:hover,
#micon3:hover {
  z-index: 100;
  color: sandybrown;
}

.p-blue,
.todo-list li {
  font-size: 1.5rem;
  color: #003164;
  font-weight: bold;
}

a:not(.md-button):hover {
  text-decoration: none;
}

/**
過場 fadeIn 
***/
.fadeInDown-active {
  animation: fadeInDown 1.2s;
}

.fadeInDown-leave-active {
  animation: fadeInDown 1.2s reverse;
}

@keyframes fadeInDown {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  70% {
    opacity: 1;
    -webkit-transform: translate3d(0, 10%, 0);
    transform: translate3d(0, 10%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
</style>
