<template>
    <div>
        <el-page-header @back="goBack" content="一眼丁真"></el-page-header>
        <div class="main">
            <el-card class="card" :body-style="{ padding: '0px' }">
                <div slot="header">
                    <span>丁真宇宙</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="getImageURL">鉴定</el-button>
                </div>
                <el-image :src="imageURL" :placeholder="imageURL" class="image">
                    <div slot="placeholder" class="image-slot">
                        <i class="el-icon-loading"></i>
                    </div>
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DingZhen',
    data() {
        return {
            imageURL: '',
        }
    },
    methods: {
        goBack() {
            this.$router.push('/tools');
        },
        getImageURL() {
            const loading = this.$loading({
                lock: true,
            });
            this.$axios.get('http://localhost:8080/api/randomdj?r=0', { timeout: 10000 })
                .then((resp) => {
                    console.log(resp);
                    this.imageURL = resp.data.url;
                    loading.close();
                })
                .catch((err) => {
                    this.$message.error(err.message);
                    console.log(err);
                    loading.close();
                });
        },
    }
}
</script>

<style>
.main {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.card {
    width: 500px;
    border-radius: 10px;
}

@media screen and (max-width: 768px) {
    .card {
        width: 100%;
    }
}

.image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-slot {
    padding: 50px;
}
</style>