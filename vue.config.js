module.exports = {
    outputDir: 'OneApp',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    productionSourceMap: true,// 生产环境 sourceMap
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8088', 
        https: false,   //是否使用https协议
        // proxy: {
        //     '/api': {
        //             target: 'http://10.1.103.107:9090', //API服务器的地址
        //             changeOrigin: true,
        //             pathRewrite: {
        //                 '^/api': ''
        //             }
        //         }
        //     },
    }
}
