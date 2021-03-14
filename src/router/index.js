import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Other from '../views/Other.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Other',
    name: 'Other',
    component: Other,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
