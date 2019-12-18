<template>
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
      <p class="count-number">25:00</p>
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
          <button type="button" @click="removeTodo(item)" class="close ml-auto">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>




<script>
export default {
  name: "HomeTodoList"
};
</script>

<style lang="scss" scoped>
</style>
