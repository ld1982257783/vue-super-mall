import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import lazyload from 'vue-lazyload'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh: {
      loginTxt: '登录',
      change: '改变'
    },
    en: {
      loginTxt: 'loginTxt',
      change: 'change'
    }
  }
})


Vue.config.productionTip = false

//添加事件总线
Vue.prototype.$bus = new Vue()

Vue.use(toast)


//使用懒加载的插件
Vue.use(lazyload, {
  //图片没加载出来时加载的图片
  loading: require('./assets/img/common/placeholder.png')
})





//解决移动端延迟3秒的bug
FastClick.attach(document.body)

new Vue({
  render: h => h(App),   // render方法的实质就是生成template模板； 
  router,
  store,
  i18n
}).$mount('#app')    //将vue实例挂载到app模板
