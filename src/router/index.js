import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home';
import Tools from '../components/Tools';
import About from '../components/About';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页 - 工具箱'
        }
    },
    {
        path: '/tools',
        component: Tools,
        meta: {
            title: '工具 - 工具箱'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于 - 工具箱'
        }
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router;