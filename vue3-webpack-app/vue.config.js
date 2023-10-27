const { defineConfig } = require('@vue/cli-service');
const packageName = require('./package.json').name;
const path = require('path');
module.exports = defineConfig({
    lintOnSave: false,
    devServer: {
        // 可以在配置中 配置端口 VUE_APP_PORT = 8080
        port: 8082,
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
        resolve:{
            alias:{
                '@':path.join(__dirname,'src')
            }
        }
    }
})