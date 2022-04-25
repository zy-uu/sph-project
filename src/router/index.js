import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import("@/views/home")
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: () => import("@/views/search")
  },
  {
    name: 'detail',
    path: '/detail/:skuId',
    component: () => import("@/views/detail")
  }
]

const routerConfig = {
  mode: 'history',
  routes 
}

export default  new VueRouter(routerConfig)