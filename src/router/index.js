import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: 'informType',
        children: [
            {
                path: '/createInform',
                name: 'createInform',
                component: () => import('../views/informs/createInform.vue')
            },
            {
                path: '/informType',
                name: 'informType',
                component: () => import('../views/informs/informType.vue')
            },
            {
                path: '/informData',
                name: 'informData',
                component: () => import('../views/informs/informData.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'About',

        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')

    }, {
        path: "/register",
        name: "register",
        component: () => import("../views/register.vue")
    },
    {
        path:'/ceshi',
        name:'ceshi',
        component:()=>import("../views/ceshi.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
