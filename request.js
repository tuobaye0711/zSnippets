// 使用Promise封装一个XMLHTTPRequest请求组件
const request = {
    _request(method, url, data) {
        return new Promise((resolve, reject) => {
            // 处理函数
            function handler() {
                if (this.readyState !== 4) {
                    return
                }
                if (this.status === 200) {
                    resolve(this.response)
                } else {
                    reject(new Error(this.statusText));
                }
            }
    
            // 创建XMLHttpRequest实例
            let client = new XMLHttpRequest();
            // 初始化一个请求
            client.open(method, url);
            // 设定readyState属性变化时调用的处理函数
            client.onreadystatechange = handler;
            // 设定返回相应的类型
            client.responseType = "json";
            // 设定请求头部
            client.setRequestHeader("Accept", "application/json");
            // 发送请求
            client.send(JSON.stringify(data))
        })
    },
    get(url) {
        return this._request("GET", url)
    },
    post(url, data) {
        return this._request("POST", url, data)
    },
    put(url, data) {
        return this._request("PUT", url, data)
    },
    delete(url) {
        return this._request("DELETE", url)
    }
}

// export default request;
// let url = "https://dev.zte.com.cn/api/wxcop/guest/topic/36108/author?noloading";
// let method = "get";
// let data = {
//     "data": "123"
// };
// request.get(url).then(res => {
//     console.log('res')
//     console.log(res)
//     console.log(JSON.stringify(res))
// }).catch(err => {
//     console.log('err')
//     console.log(err)
//     console.log(JSON.stringify(err))
// })
