<template>
    <div class="container">
        <span @click="getImageSrc">看看远处的丁真吧</span>
    </div>
</template>

<script>
export default {
    name: 'DingZhen',
    data() {
        return {
            imageSrc: '',
        }
    },
    methods: {
        getImageSrc() {
            this.$message('去死');
        }
    }
}
</script>

<style>
.container {
    display: flex;
    justify-content: center;
}
</style>