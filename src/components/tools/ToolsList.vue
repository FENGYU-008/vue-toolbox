<template>
    <div>
        <el-collapse>
            <el-collapse-item>
                <template slot="title">
                    <i class="el-icon-sunrise"></i>&nbsp;常用应用
                </template>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card shadow="hover">短链接生成</el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">历史上的今天</el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">计时器</el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">抖音无水印解析</el-card>
                    </el-col>
                </el-row>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                    <i class="el-icon-more"></i>&nbsp;其他应用
                </template>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <a @click="dingzhen">
                            <el-card shadow="hover">一眼丁真</el-card>
                        </a>
                    </el-col>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name:'ToolsList'
}
</script>

<style>
</style>