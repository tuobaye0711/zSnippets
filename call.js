Function.prototype.call2 = function(context, ...rest) {
    context = context || window;
    // 首先要获取call的函数，用this可以获取
    context.fn = this;
    // 执行函数
    let result = context.fn(...rest);
    // 删除属性
    delete context.fn;
    return result
}
