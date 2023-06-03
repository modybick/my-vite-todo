<script setup>
import TheHeader from './components/TheHeader.vue';
import MainTodo from './components/MainTodo.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="wrap">
    <TheHeader>ヘッダー</TheHeader>
    <main class="main"><MainTodo /></main>
    <TheFooter>フッター</TheFooter>
  </div>
</template>

<style>
@import 'assets/css/destyle.css';

.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 410px;
  margin: 0 auto;
  font-family: sans-serif;
}

.main {
  flex: 1;
  width: 100%;
}
</style>
