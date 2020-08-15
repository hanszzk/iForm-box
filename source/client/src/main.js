import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './http/api';
import http from './http/http';

import './permission';
import './styles/main.scss';

// axios 拦截器
import axios from './http/axios';

Vue.prototype.$axios = axios;
// 对后端接口 进行全局注册
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;
Vue.config.productionTip = false;
Vue.use(ElementUI);

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
