// 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。eg：线程池、全局缓存、windows对象
// 实现单例模式的关键点在于：用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建过的对象，如果否，则创建新对象。

const Singleton = function(name){
    this.name = name;
    this.instance = null;
}

Singleton.prototype.getName = function(){
    console.log(this.name)
}

Singleton.getInstance = function(name){
    if (!this.instance){
        this.instance = new Singleton(name)
    }
    return this.instance
}

// 测试
// var test1 = Singleton.getInstance('test1');
// var test2 = Singleton.getInstance('test2');
// console.log(test1 === test2);
// test1.getName();
// test2.getName();
