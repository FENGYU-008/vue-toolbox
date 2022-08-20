<template>
    <div>
        <el-page-header @back="goBack" content="To Do"></el-page-header>
    </div>
</template>

<script>
export default {
    name: 'ToDoList',
    methods: {
        goBack() {
            this.$router.push('/tools');
        },
    }
}
</script>

<style>
</style>