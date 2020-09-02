import Vue from 'vue';
import VueRouter from 'vue-router';

import { Field, Icon, Notify  } from 'vant';

import WinkeyUI from './components';
import App from './App.vue';
import store from './store';
import router from './router';

import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false

// 注册路由
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(WinkeyUI)

Vue.use(Field,Icon,Notify);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})