// 初始化数据
var arr = ['Jack', 'Smith', 'Divid', 'James', 'Mike'];
var obj = {
    name: 'Jack',
    age: 29,
    height: '179cm'
}
var set = new Set(arr);
var map = new Map();
map.set(arr, obj);
map.set(1, 3);
map.set('1', '3');
var str = "Hello world!";

// for in遍历:适用于str,array,object; for of遍历:适用于str,array,set,map
const iterator1 = foo => {
    for (let key in foo){
        console.log(`key: ${key}`);
    }

    for (let value of foo){
        console.log(`value: ${value}`);
    }
}


// array、object、string都可以使用Object.keys()和Object.values()来遍历。
// Set需要用set.keys()和set.values()遍历
// Map需要用map.keys()和map.values()遍历
const iterator2 = foo => {
    console.log(Object.prototype.toString.apply(foo))
    if (Object.prototype.toString.apply(foo) === '[object Set]' || Object.prototype.toString.apply(foo) === '[object Map]') {
        for (let key of foo.keys()) {
            console.log(`key: ${key}`);
        }

        for (let value of foo.values()) {
            console.log(`value: ${value}`);
        }
    } else {
        for (let key of Object.keys(foo)) {
            console.log(`key: ${key}`);
        }

        for (let value of Object.values(foo)) {
            console.log(`value: ${value}`);
        }
    }
}

// Reflect.ownKeys()可以用来遍历array和object
const iterator3 = foo => {
    console.log(Reflect.ownKeys(foo))
}

iterator1(arr);
iterator2(arr);
iterator3(arr);
