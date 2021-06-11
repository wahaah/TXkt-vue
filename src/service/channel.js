// module.exports {

// }

export default {
    // async 是 es6 对异步数据 的一个
    async getChannels(){
        // fetch   h5提供的远程获取数据的函数  比ajax好用
        // 由于是异步的 需要用 await来等待
        var res = await fetch("/x/web-interface/web/channel/category/list");
        // console.log(res);
        // 用json()方法来解析 它也是个异步的 用await来等待
        var data = await res.json();
        console.log(data);

        // ---------------------------------------
        // 以上现在出现了跨域问题  此时的解决办法只适用于本地开发
        

    }
}