const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  devServer: {                //webpack-dev-server配置 
    port: 8080,            //配置本项目运行端口
    proxy: {                //配置代理服务器来解决跨域问题
      '/api': {
        target: 'https://api.aya1.top',      //配置要替换的后台接口地址
        changOrigin: true,                      //配置允许改变Origin
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
