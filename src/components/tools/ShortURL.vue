<template>
    <div>
        <el-page-header @back="goBack" content="短链接生成"></el-page-header>
        <div class="main">
            <el-card class="card">
                <el-form>
                    <el-form-item>
                        <el-input v-model="url" placeholder="请在此输入链接" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100%;" @click="generate">生成</el-button>
                    </el-form-item>
                </el-form>
                <el-divider content-position="center"><span style="color: #96999e;">结果</span></el-divider>
                <div>
                    <el-input v-model="shortenURL">
                        <el-button slot="append" icon="el-icon-copy-document" v-clipboard:copy="shortenURL"
                            v-clipboard:success="onCopy" v-clipboard:error="onError"></el-button>
                    </el-input>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShortURL',
    data() {
        return {
            url: '',
            shortenURL: ''
        }
    },
    methods: {
        goBack() {
            this.$router.push('/tools');
        },
        generate() {
            let regex = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            this.url = this.url.match(regex) ? this.url.match(regex)[0] : '';
            if (this.url === '') {
                this.$message.warning('请输入正确的链接');
                return;
            }
            const loading = this.$loading({
                lock: true,
            });
            this.$axios.get('https://api.sumt.cn/api/dwz.url.php?url=' + this.url, { timeout: 5000 })
                .then((resp) => {
                    if (resp.data.code === 200) {
                        this.$message.success('生成成功');
                        this.shortenURL = resp.data.url_short;
                    } else {
                        this.$message.error('生成失败');
                    }
                    loading.close();
                })
                .catch((err) => {
                    if (err.code === 'ECONNABORTED') {
                        this.$message.error('请求超时');
                    } else {
                        console.log(err);
                        this.$message.error('出现错误');
                    }
                    loading.close();
                });
        },
        onCopy() {
            this.$message.success('复制成功');
        },
        onError() {
            this.$message.success('复制失败');
        },
    }
}
</script>

<style>
.main {
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .card {
        width: 100%;
    }
}
</style>