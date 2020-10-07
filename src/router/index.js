import Vue from "vue";
import VueRouter from "vue-router";
import SharedView from "../views/SharedView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SharedView
  }
] 

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
});

export default router;