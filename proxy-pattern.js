// JavaScript设计模式实现之代理模式
// 代理模式为另一个对象提供一个替身或占位符以控制这个对象的访问，代理对象必须和原对象提供完全一致的接口
// 举个例子: 一个工厂制造商品（目标对象），你可以给这个工厂设置一个业务代理（代理对象），提供流水线管理，订单，运货，淘宝网店等多种行为能力（扩展属性）。 当然，里面还有最关键的一点就是，这个代理能把一些骗纸和忽悠都过滤掉，将最真实最直接的订单给工厂，让工厂能够专注于生产（控制访问）。

// 真实工厂
class Factory {
    constructor(count) {
        // 工厂默认有1000件产品
        this.productions = count || 1000
    }
    // 生产商品
    produce(count) {
        // 原则上低于5个工厂是不接单的
        this.productions += count
    }
    // 向外批发
    wholesale(count) {
        // 原则上低于10个工厂是不批发的
        this.productions -= count
    }
}

// 代理工厂
class ProxyFactory extends Factory {
    // 代理工厂默认第一次合作就从工厂拿100件库存
    constructor(count = 100) {
        super(count)
    }
    // 代理工厂向真实工厂下订单之前会做一些过滤
    produce(count) {
        if (count > 5) {
            super.produce(count)
        } else {
            console.log('低于5件不接单')
        }
    }
    wholesale(count) {
        if (count > 10) {
            super.wholesale(count)
        } else {
            console.log('低于10件不批发')
        }
    }
}

// 创建一个代理工厂
const proxyFactory = new ProxyFactory()

// 通过代理工厂生产4件商品，被拒绝
proxyFactory.produce(4)

// 通过代理工厂批发20件商品
proxyFactory.wholesale(20)

// 代理工厂的剩余商品 80
console.log(proxyFactory.productions)
