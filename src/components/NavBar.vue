<template>
    <el-menu :default-active="activeIndex" class="nav" mode="horizontal" @select="handleSelect" router>
        <el-menu-item><img src="../assets/logo.png" style="height: 30px;"></el-menu-item>
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="tools">工具</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
        <el-menu-item style="display:float;float:right;">
            <a href="javascript:">登录</a>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            activeIndex: 'home',
        };
    },
    methods: {
        handleSelect(key) {
            console.log(key);
        },
    },
    mounted() {
        //解决页面刷新，导航栏高亮消失的问题
        let path = this.$route.path;
        this.activeIndex = path.substring(1, path.length);
    }
}
</script>

<style>
.nav a {
    text-decoration: none;
}

.nav {
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .2);
}
</style>