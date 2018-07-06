Function.prototype.apply2 = function(context, arr) {
    context = context || window;
    // 首先要获取call的函数，用this可以获取
    context.fn = this;
    let result;
    // 执行函数
    if (!arr){
        result = context.fn();
    }else{
        result = context.fn(...arr);
    }
    // 删除属性
    delete context.fn;
    return result
}
