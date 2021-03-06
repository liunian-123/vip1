import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Test from './../views/Test'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    component:Home
  },{
    path:'/test',
    component:Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
