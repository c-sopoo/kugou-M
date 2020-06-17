import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
// rem
import './utils/rem'
import './assets/scss/reset.scss'
// 全局过滤器
Vue.filter('imgFilter', (imgPath) => {
  return imgPath.replace(/{size}/, '400')
})
// 懒加载
Vue.use(VueLazyload, {
  loading: require('assets/image/default.png'),
  // attempt: 3,
  // filter: {
  //   // 图片过滤
  //   imgPth(listener) {
  //     console.log(listener)
  //     const re = /{size}/
  //     if(re.test(listener.src)) {

  //       listener.src = listener.src.replace(/{size}/, '400')
  //     }
  //     console.log(listener.src)
  //   }
  // }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
