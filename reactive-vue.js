// vue的响应式实现
// 首先，在observer的过程中会注册getter方法，该方法进行依赖收集。在他的闭包中，会有一个Dep对象，这个对象用来存放Watcher对象的实例。其实依赖收集的过程就是把Watcher实例存放到对应的Dep中去。get方法可以让当前的Watcher对象(Dep.target)存放到它的subs中。在数据变化时，set会调用Dep对象的notify方法，通知它内部所有的watcher对象进行视图更新。

// 这是Object.defineProperty的get和set方法处理的事情，那么依赖收集的前提还有两个：
// 1 触发get方法
// 2 新建一个Watcher对象

// 这个我们在Vue的构造类中处理，新建一个Watcher对象，只需要new出来，这时候Dep.target实际上已经指向了这个new出来的Watcher实例。而触发get方法也很简单，实际上只要把render function进行渲染，那么其中依赖的对象就会被读取，这里我们通过打印来模拟这个过程，读取test来触发get的依赖收集。

const defineReactive = (obj, key, val) => {
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            // 将Dep.target(即当前的Watcher对象存入dep的subs中)
            dep.addSub(Dep.target);
            return val
        },
        set: function reactiveSetter(newVal) {
            if (newVal === val) {
                return
            }
            dep.notify()
        }
    })
}

const observer = obj => {
    if (!obj || typeof (obj) !== 'object') {
        return
    }

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

class Dep {
    constructor() {
        // 用来存放watcher对象的数组
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

class Watcher {
    constructor() {
        // 在new一个watcher对象时将该对象赋值给Dep.target，在get中会用到
        Dep.target = this
    }

    // 更新视图的方法
    update() {
        console.log('视图更新啦~')
    }
}

Dep.target = null;

class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data)
        // 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象
        new Watcher();
        // 在这里模拟render的过程，为了触发test属性的get函数
        console.log('render~', this._data.test);
    }
}

let app = new Vue({
    data: {
        test: "old view: hello world!"
    }
})

app._data.test = "new view: hello vue!"
