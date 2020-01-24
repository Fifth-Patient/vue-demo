import Vue from 'vue'
import App from './App.vue'
import router from './router'
import title from './libs/title'

Vue.config.productionTip = false

// Vue.prototype.bus = new Vue()

router.beforeEach((to, from, next) => {
  title(to.meta.title)
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
