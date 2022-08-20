<template>
    <div>
        <el-menu :default-active="activeIndex" class="nav" mode="horizontal" router>
            <el-menu-item><img src="../assets/logo.png" style="height: 30px;"></el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>
            <el-menu-item index="tools">工具</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
            <el-menu-item style="display:float;float:right;">
                <el-button type="primary" @click="dialogVisible = true" size="small" :plain=true>登录</el-button>
            </el-menu-item>
        </el-menu>

        <el-dialog title="登录" :visible.sync="dialogVisible" width="30%">
            <div class="login-content">
                <div class="profile">
                    <img src="../assets/logo.png" class="avatar">
                </div>
                <el-form>
                    <el-form-item>
                        <el-input placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item class="submitButton">
                        <el-button type="primary">登录</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
    </div>

</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            activeIndex: '',
            dialogVisible: false
        };
    },
    mounted() {
        //解决页面刷新，导航栏高亮消失的问题
        this.$router.onReady(() => {
            let path = this.$route.path;
            let index = path.substring(1, path.length);
            if (['home', 'tools', 'about'].indexOf(index) == -1) {
                this.activeIndex = 'tools';
            } else {
                this.activeIndex = index;
            }
        });
    },
}
</script>

<style>
.nav {
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .2);
}

.submitButton {
    display: float;
    float: right;
    margin-bottom: 0px;
}

.avatar {
    width: 80px;
    height: 80px;
}

.login-content {
    display: flex;
    flex-flow: column;
}

.profile {
    text-align: center;
    margin-bottom: 20px;
}
</style>