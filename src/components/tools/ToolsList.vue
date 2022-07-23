<template>
    <div class="container">
        <el-collapse v-model="activeNames">
            <el-collapse-item name="common">
                <template slot="title">
                    <i class="el-icon-sunrise"></i>&nbsp;常用应用
                </template>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <a @click="shorturl">
                            <el-card shadow="hover">短链接生成</el-card>
                        </a>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">历史上的今天</el-card>
                    </el-col>
                    <el-col :span="6">
                        <a @click="todo">
                            <el-card shadow="hover">To Do</el-card>
                        </a>
                    </el-col>
                    <el-col :span="6">
                        <a @click="douyin">
                            <el-card shadow="hover">抖音无水印解析</el-card>
                        </a>
                    </el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item name="other">
                <template slot="title">
                    <i class="el-icon-more"></i>&nbsp;其他应用
                </template>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card shadow="hover">一眼丁真</el-card>
                    </el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'ToolsList',
    data() {
        return {
            activeNames: ['common', 'other']
        }
    },
    methods: {
        douyin() {
            this.$router.push('/douyin');
        },
        todo() {
            this.$router.push('/todo');
        },
        shorturl() {
            this.$router.push('/shorturl');
        }
    }
}
</script>

<style>
a {
    text-decoration: none;
}

.container {
    user-select: none;
}
</style>