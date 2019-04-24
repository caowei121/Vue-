import Vue from 'vue'
import App from './App.vue'

//引入路由模块 vue-router
import VueRouter from "vue-router"

//引入axios 和ajax差不多发送请求的,记得下载工具 npm install --save axios
import axios from "axios"

//引入element-ui模块
import ElementUI from "element-ui";

//引入element-ui样式,因为里面很多模版组件
import 'element-ui/lib/theme-chalk/index.css';

//导入登录模块组件
import Login from "./pages/Login"



//注册全局
Vue.use(ElementUI)

Vue.config.productionTip = false;

//注册路由插件
Vue.use(VueRouter)

//配置路由
const routes=[
  {path:"/login",component:Login}
]

//实例化路由对象
const router = new VueRouter({routes})

//将axios绑定到vue实例的属性$axios
Vue.prototype.$axios = axios;

new Vue({
  //把路由挂载在根实例上
  router,
  render: h => h(App),
  // $mount作用相当于el，根实例挂载到节点
}).$mount('#app')
