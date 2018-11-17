import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Index from './components/index'
import Space from './components/space'

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: Index },
    { path: '/space', component: Space }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
