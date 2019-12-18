<template>
  <div id="tab1">
    <div class="row">
      <ListLeft />
      <transition appear appear-active-class="fadeInDown-active">
        <div class="col-6 todolist h-100">
          <div class="todo-down">
            <div class="addList">
              <input
                class="todo-input"
                v-model="newTodo"
                placeholder="ADD A NEW MISSION"
                @keyup.enter="addTodo"
              />
              <button @click="addTodo()">+</button>
            </div>

            <b-button v-b-toggle.collapse-1 variant="primary" class="w-100 toogle-btn">TO-DO</b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card class="b-card">
                <ul class="blue-todo-list">
                  <li
                    v-for="item in this.$parent.filterDone"
                    @click="changed(item)"
                    v-bind:key="item.id"
                    :class="{'finished': item.finished }"
                  >
                    {{ item.title }}
                    <button
                      type="button"
                      @click="removeTodo(item)"
                      class="closeli"
                    >x</button>
                  </li>
                </ul>
              </b-card>
            </b-collapse>

            <b-button v-b-toggle.collapse-2 variant="primary" class="w-100 toogle-btn">Done</b-button>
            <b-collapse id="collapse-2" class="mt-2">
              <b-card class="b-card">
                <ul class="blue-todo-list">
                  <li
                    v-for="item in this.$parent.filterTodo"
                    v-bind:key="item.id"
                    :class="{'finished': item.finished }"
                    @click="changed(item)"
                  >{{ item.title }}</li>
                </ul>
              </b-card>
            </b-collapse>
          </div>
        </div>
      </transition>
      <ListRight />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import ListLeft from "@/components/ListLeft.vue";
import ListRight from "@/components/ListRight.vue";
export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      // todos: [],
      cacheTodo: {},
      cacheTitle: "",
      visibility: "all",
      showCollapse: true
    };
  },

  components: {
    ListLeft,
    ListRight
  },
  // 這裡的methods 需注意parents 傳值傳回 TomatoClock
  methods: {
    addTodo: function() {
      var value = this.newTodo.trim(); // trim 後面需加(), 功能為 : 消除前後不必要空白不包含中間
      var timestamp = Math.floor(Date.now());
      console.log(value, timestamp);
      this.$parent.todos.push({
        id: timestamp,
        title: value,
        finished: false
      });
      this.newTodo = "";
    },
    removeTodo: function(todo) {
      var p = this.$parent.todos;
      var newid = todo.id;
      // p.forEach(function(item) {
      //   if(todo.id == item.id) {
      //    newid = todo.id;
      //   }
      // });
      var index = p
        .map(x => {
          return x.id;
        })
        .indexOf(newid);
      p.splice(index, 1);
    },
    changed: function(todo) {
      todo["finished"] = !todo["finished"];
    },
    sss: function() {
      $("#micon1").click(function() {
        alert("44444");
      });

      // alert('1233');
    }
  }
};
</script>

<style lang="scss" scoped>
$bluebackground: #003164;
#tab1 {
  display: block;
  width: 100%;
  height: 100%;
  background-color: $bluebackground;
  position: relative;
  top: -800px;
  color: #ffffff;
}

.blue-todo-list {
  margin: 0;
  padding: 0;
  text-align: left;
  width: 100%;
  list-style: none;
}

.blue-todo-list li {
  height: 32px;
  color: #fff;
  position: relative;
  line-height: 24px;
  margin-bottom: 9px;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  font-size: 1.2rem;
}

.toogle-btn {
  background-color: #5a8dbe;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 0px;
  margin: 50px 0px 22px 0px;
  text-align: left;
}

.b-card {
  margin: 0;
  padding: 0;
  border: 0px;
  background-color: transparent;
}
.card-body {
  // vue-bootstrap toogle 產生
  padding: 0;
}

.closeli {
  float: right;
  color: #fff;
  background-color: transparent;
  border: 0px;
  font-size: 2.5rem;
  line-height: 14px;
}
</style>
