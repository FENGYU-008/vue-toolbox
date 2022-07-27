import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home';
import Tools from '../components/Tools';
import About from '../components/About';

import DouYin from '../components/tools/DouYin';
import ToDoList from '../components/tools/ToDoList';
import ShortURL from '../components/tools/ShortURL';
import DingZhen from '../components/tools/DingZhen';

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
    },
    {
        path: '/douyin',
        component: DouYin,
    },
    {
        path: '/todo',
        component: ToDoList,
    },
    {
        path: '/shorturl',
        component: ShortURL,
    },
    {
        path: '/dingzhen',
        component: DingZhen,
    },
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