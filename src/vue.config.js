// vue-cli的全局配置文件  90%都用的是webpack

// 这里不能用export default{}(es6)  而要用module.exports={}(commonjs)
// 因为：
// webpack的加载page是node的环境 node的默认模块化标准是commmonjs
// webpack在运行和打包过程中的环境是webpack  而webpack环境是既支持es module也支持commonjs
module.exports={
    devServer:{
        proxy:{
            // 配置代理
            "/x/":{
                // 凡是以/x开头，进行代理
                target:"https://api.bilibili.com",
                // https://github.com/chimurai/http-proxy-middleware
                onProxyReq(proxyReq){
                    // add custom header to request
                    proxyReq.setHeader('origin', 'https://www.bilibili.com');
                    // proxyReq.setHeader('referer', 'https://www.bilibili.com/v/channel');
                    proxyReq.setHeader('referer', 'https://www.bilibili.com/');
                    // or log the req
                },
            }
        }
    }
}
