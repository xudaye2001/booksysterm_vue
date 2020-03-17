import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addbookfromhand from '../components/addbookfromhand'
import flexbox_test from '../components/getbooklist'
import addbookfromisbn from "../components/addbookfromisbn";
import regist from "../views/regist";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addbookfromhand',
    name: 'addbookfromhand',
    component: addbookfromhand
  },
  {
    path: '/addbookfromisbn',
    name: 'addbookfromisbn',
    component: addbookfromisbn
  },
  {
    path: '/flexbox_test',
    name: 'flexbox_test',
    component: flexbox_test
  },
  {
    path: '/views/regist',
    name: 'regist',
    component:regist
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
