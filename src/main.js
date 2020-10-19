// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//1,引入css文件
import "./assets/css/reset.css"
//2 公共组件
import "./components"
//3.路由组件格式

//4.utils/request.js

//5过滤器
import "./filters"

//6vuex
import store from "./store"

//7element-ui
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//8.utils/alert.js
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})