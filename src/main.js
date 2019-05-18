import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import navMenu from './data/navMenu.js'
import commin from './data/commin.js'
import axios from 'axios'
import App from './App.vue'

/**
 * 导入全局使用的内容
 */
Vue.prototype.axios = axios 
Vue.prototype.navMenu = navMenu
Vue.prototype.commin = commin





Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
