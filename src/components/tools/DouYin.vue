<template>
    <div>
        <el-page-header @back="goBack" content="抖音短视频无水印解析"></el-page-header>
        <div class="main">
            <el-card class="card">
                <el-form>
                    <el-form-item>
                        <el-input v-model="url" placeholder="请在此粘贴您复制的抖音视频链接" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100%;" @click="get">获取</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-card class="card">
                <div slot="header" class="clearfix">
                    <span>结果</span>
                    <el-button style="float: right; padding: 3px 0" type="text" v-clipboard:copy="play"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">复制到剪贴板
                    </el-button>
                </div>
                <div class="result">
                    <div>标题：{{ title }}</div>
                    <div>
                        音乐：
                        <el-button type="text" v-show="music !== ''" @click="download('music')">点此下载</el-button>
                    </div>
                    <div>
                        视频：
                        <el-button type="text" v-show="play !== ''" @click="download('play')">点此下载</el-button>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DouYin',
    data() {
        return {
            url: '',
            title: '',
            music: '',
            play: ''
        }
    },
    methods: {
        goBack() {
            this.$router.push('/tools');
        },
        get() {
            let regex = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            this.url = this.url.match(regex) ? this.url.match(regex)[0] : '';
            if (this.url === '') {
                this.$message.warning('请输入正确的链接');
                return;
            }
            const loading = this.$loading({
                lock: true,
            });
            this.$axios.get('https://api.oick.cn/douyin/api.php?url=' + this.url, { timeout: 5000 })
                .then((resp) => {
                    if (resp.data.title != null) {
                        this.$message.success('解析成功');
                        this.title = resp.data.title;
                        this.music = resp.data.music;
                        this.play = resp.data.play;
                    } else {
                        this.$message.error('解析失败');
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
        download(type) {
            if (type === 'music') {
                window.open(this.music, '_blank');
            } else if (type === 'play') {
                window.open(this.play, '_blank');
            }
        },
        onCopy() {
            this.$message.success('成功复制视频链接');
        },
        onError() {
            this.$message.error('复制失败');
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

.card {
    margin: 20px;
    border-radius: 10px;
    width: 500px;
}

.result {
    line-height: 40px;
}

@media screen and (max-width: 768px) {
    .card {
        width: 100%;
    }
}
</style>