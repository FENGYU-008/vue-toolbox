import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '@/views/Home.vue'
import Tools from '@/views/Tools.vue'
import About from '@/views/About.vue'
import DouYin from '@/views/tools/DouYin.vue'
import ShortURL from '@/views/tools/ShortURL.vue'
import Todo from '@/views/tools/ToDoList.vue'
import DingZhen from '@/views/tools/DingZhen.vue'


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
        path: '/shorturl',
        component: ShortURL,
    },
    {
        path: '/todo',
        component: Todo,
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