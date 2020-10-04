import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Classify from '@/pages/Classify/Classify'
import Detail from '@/pages/detail/Detail'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Classify',
        name: 'Classify',
        component: Classify
    },
    {
        //动态路由
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
]

const router = new VueRouter({
    routes,
    //做路由切换的时候，让x轴和y轴都是零
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }

    }
})

export default router