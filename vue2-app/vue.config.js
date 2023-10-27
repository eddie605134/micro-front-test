const { defineConfig } = require('@vue/cli-service');
const packageName = require('./package.json').name;
module.exports = defineConfig({
    lintOnSave: false,
    devServer: {
        // 可以在配置中 配置端口 VUE_APP_PORT = 8080
        port: 8081,
        headers: {
            'Access-Control-Allow-Origin': '*' // 允许跨域访问子应用页面
        }
    },
    configureWebpack: {
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            chunkLoadingGlobal: `webpackJsonp_${packageName}`,
        },
    }
})