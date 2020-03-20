import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import login from "../components/login";
import mylibrary from "../views/mylibrary";
import userprofile from "../views/userprofile";
import register from "../views/register";
import BookDetails from "../views/BookDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path:'/mylibrary',
    name:'mylibrary',
    component:mylibrary
  },
  {
    path:'/userprofile',
    name:'userprofile',
    component:userprofile
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/register',
    name:'register',
    component:register
  },
  {
    path:'/:id',
    name:'bookdetails',
    component: BookDetails
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
