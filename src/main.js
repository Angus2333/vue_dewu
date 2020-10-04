import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/border.css'
import '../src/assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
// import '../src/assets/styles/dewu/iconfont.css'
import axios from 'axios'
import BScroll from 'better-scroll'
Vue.prototype.$http = axios
    //mock
import Mock from 'mockjs'
import VueResourse from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResourse)
new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
    //  mock请求方式
Mock.mock("/static/mock/index.json", "get", (res) => {
    console.log(res);
});