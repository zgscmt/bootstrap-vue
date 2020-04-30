import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'

//网络请求
import axios from 'axios'
Vue.prototype.$axios = axios;

//引入eaharts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

//全局mixin
import { globalMixin } from './assets/js/mixin.js';
Vue.mixin(globalMixin);

//设置路由重复点击
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//默认的url
axios.defaults.baseURL = 'https://cnodejs.org/api/';

Vue.config.productionTip = false

//本地存储
import storage from "good-storage";

//公共css
import "@/assets/stylus/import.styl";


// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ` + storage.get('busInform_token');
        return config;
    },
    error => {
        return Promise.reject(error);
    });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
