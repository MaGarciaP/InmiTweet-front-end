import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import VueResource from 'vue-resource';
import PostActors from './PostActors.vue';
require("./scss/sb-admin.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path: '/actors', component: Actors},
  { path: '/postactors', component: PostActors}
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
