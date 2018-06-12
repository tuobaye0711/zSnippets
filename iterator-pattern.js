// JavaScript设计模式实现之迭代器模式
// 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。迭代器模式可以吧迭代器的过程从业务逻辑分离出来，在使用迭代器模式之后，即使不关心对象内部的构造，也可以按顺序访问其中的每个元素。
// 但是其实迭代器模式一种相对简单的模式，简单到很多时候我们都不认为他是一种设计模式，毕竟现在绝大部分语言都内置了迭代器。

// 内部迭代器
const each = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(i, arr[i])
    }
}

// test
each(['a', 'b', 'c'], (i, item) => {
    console.log(`${i}:${item}`)
})

// 外部迭代器
const iterator = arr => {
    let count = 0;
    const next = () => {
        count++
    }
    const done = () => count >= arr.length;
    const value = () => arr[count]

    return {
        next,
        done,
        value
    }
}

// test
const arr = [1, 2 ,3];
const it = iterator(arr);
console.log(it.value());
console.log(it.done());
it.next();
console.log(it.value());
console.log(it.done());
it.next();
console.log(it.value());
console.log(it.done());
it.next();
console.log(it.value());
console.log(it.done());
