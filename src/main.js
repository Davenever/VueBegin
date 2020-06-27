import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//导入全局样式表
import "./assets/css/global.css";

//#region 全局注册element ui组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
//endregion

//region 引入axios  这样一来每一个vue组件都可以通过this访问到$http从而发起ajax请求
import axios from "axios";
//配置请求的ip
axios.defaults.baseURL = "https://www.liulongbin.top:8888/";
axios.interceptors.request.use((m) => {
  //请求头中挂载token
  m.headers.Authorization = window.sessionStorage.getItem("token");
  return m;
});
Vue.prototype.$http = axios;
//endregion

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
