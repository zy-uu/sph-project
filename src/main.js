import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import carousel from "@/components/carousel"
import typeNav from '@/components/globalComponents/typeNav'
import "@/mock/mockSever"
//引入swiper 样式
import "swiper/css/swiper.css";

Vue.component(typeNav.name,typeNav)
Vue.component(carousel.name,carousel)

Vue.config.productionTip = false

new Vue({
  //注册路由，让每个组件都可以使用路由，同时也可获取到$router $route等属性
  // $route 可以获取到路由信息（path,query,params）
  // $router 进行路由的相应跳转
  router,
  store,
  render: h => h(App)
}).$mount('#app')
