import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';

const routes = [
  {
    path: '/',
    name: 'Top',
    component: MainTodo,
  },
  {
    path: '/MainTodo',
    name: 'MainTodo',
    component: MainTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
