import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import("@/views/home")
  },
  // {
  //   path: '/searvh',
  //   name: 'search',
  //   component: () => import("@/")
    
  // }
]

const routerConfig = {
  mode: 'history',
  routes 
}

export default  new VueRouter(routerConfig)