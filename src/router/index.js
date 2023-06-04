import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';
import About from '/src/pages/About.vue';
import NotFound from '/src/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Top',
    component: MainTodo,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
