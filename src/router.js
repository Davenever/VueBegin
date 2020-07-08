import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Welcome from "./components/Welcome.vue";
import Commodity from "./components/CommodityManagement/CommodityIndex.vue"

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/home", component: Home,
    redirect: "/welcome", //再重定向到welcome页面 
    children: [
      { path: "/welcome", component: Welcome },
      { path: "/commodity", component: Commodity }
    ] //子路由,就是在Home组件中包裹组件
  },
  ],
});
