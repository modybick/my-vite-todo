<script setup>
import { ref } from 'vue';
import { useTodoList } from '/src/composables/useTodoList.js';
import BaseButton from '/src/components/BaseButton.vue';

const todoRef = ref('');
const isEditRef = ref(false); //編集状態＝True
const { todoListRef, add, show, edit, del, check, countFin } = useTodoList();

const addTodo = () => {
  add(todoRef.value);
  todoRef.value = '';
};

const showTodo = (id) => {
  isEditRef.value = true; //編集状態をTrueに
  todoRef.value = show(id);
};

const editTodo = () => {
  edit(todoRef.value);
  isEditRef.value = false; //編集状態をfalseに
  todoRef.value = '';
};

const cancelEdit = () => {
  todoRef.value = '';
  isEditRef.value = false;
  editIndex = -1;
};

const deleteTodo = (id) => {
  del(id);
};

const changeCheck = (id) => {
  check(id);
};

const filterCheckedTodo = (checked) => {
  return todoListRef.value.filter((todo) => todo.checked === checked);
};
</script>

<template>
  <div class="box_input">
    <input
      type="text"
      class="todo_input"
      v-model="todoRef"
      placeholder="+ TODOを入力"
    />
    <BaseButton color="blue" @on-click="addTodo" v-show="!isEditRef"
      >追加</BaseButton
    >
    <BaseButton color="green" @on-click="editTodo" v-show="isEditRef"
      >変更</BaseButton
    >
    <BaseButton color="pink" @on-click="cancelEdit">中止</BaseButton>
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          @change="changeCheck(todo.id)"
          :checked="todo.checked"
        /><label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <BaseButton color="green" @on-click="showTodo(todo.id)">編</BaseButton>
        <BaseButton color="pink" @on-click="deleteTodo(todo.id)">削</BaseButton>
      </div>
    </div>
  </div>
  <div class="finCount">
    <span>完了：{{ countFin }}、</span>
    <span>未完了：{{ todoListRef.length - countFin }}</span>
  </div>
</template>

<style scoped>
.box_input {
  margin-top: 20px;
}

.todo_input {
  width: 300px;
  margin-right: 8px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.box_list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.todo_list {
  display: flex;
  align-items: center;
  gap: 8px;
}

.todo {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 12px;
  width: 300px;
}

.check {
  border: 1px solid red;
  transform: scale(1.4);
  margin: 0 16px 2px 6px;
}

.btns {
  display: flex;
  gap: 4px;
}

.fin {
  text-decoration: line-through;
  background-color: #ddd;
  color: #777;
}

.finCount {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
