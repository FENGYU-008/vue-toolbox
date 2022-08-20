import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页 - 工具箱'
        }
    },
    {
        path: '/tools',
        component: () => import('@/views/Tools.vue'),
        meta: {
            title: '工具 - 工具箱'
        }
    },
    {
        path: '/about',
        component: () => import('@/views/About.vue'),
        meta: {
            title: '关于 - 工具箱'
        }
    },
    {
        path: '/douyin',
        component: () => import('@/views/tools/DouYin.vue'),
    },
    {
        path: '/shorturl',
        component: () => import('@/views/tools/ShortURL.vue'),
    },
    {
        path: '/todo',
        component: () => import('@/views/tools/ToDoList.vue'),
    },
    {
        path: '/dingzhen',
        component: () => import('@/views/tools/DingZhen.vue'),
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