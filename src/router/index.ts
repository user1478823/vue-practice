import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

function loadView(view: String) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
 }
 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/one',
    name: 'one',
    component: loadView('1-One')
  },
  {
    path: '/two',
    name: 'two',
    component: loadView('2-Two')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
