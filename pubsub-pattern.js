// JavaScript设计模式实现之发布订阅模式
// 发布-订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。
// 发布-订阅模式优点：1、时间上解耦，2、对象之间解耦。
// 发布-订阅模式缺点：1、订阅消息未发生导致浪费内存，2、过度使用导致程序难以追踪维护和理解。

class Event {
    constructor() {
        this.obj = {}
    }
    // 订阅
    sub(event, fn) {
        if (!this.obj[event]) {
            this.obj[event] = []
        }
        this.obj[event].push(fn)
    }
    // 发布
    pub(...args) {
        let event = Array.prototype.shift.call(args);
        let arr = this.obj[event];
        for (let i = 0; i < arr.length; i++) {
            arr[i](args[0])
        }
    }
}

// test
var pubsub = new Pubsub();

pubsub.sub('click', str => {
    console.log(str)
})

pubsub.pub('click', 'hello!')
