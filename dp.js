const dp = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
    })
    return obj
}

const observe = (obj, key) => {
    let old = obj[key];
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return old
        },
        set: function (now) {
            if (now !== old) {
                console.log(`${JSON.stringify(old)} ---> ${JSON.stringify(now)}`);
                old = now
            }
        }
    })
}

const observeObject = (obj, cb) => {
    Object.keys(obj).forEach((key) => {
        observer(obj, key, cb)
    })
}

const observeArray = (arr, cb) => {
    arr.forEach((value, index) => {
        observer(arr, index, cb)
    })
}

const observer = (obj, key, cb) => {
    let old = obj[key];
    if (Object.prototype.toString.apply(old) === '[object Object]') {
        observeObject(old, cb)
    }else if (Object.prototype.toString.apply(old) === '[object Array]'){
        observeArray(old, cb)
    }
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return old
        },
        set: function (now) {
            if (now !== old) {
                console.log(`${old} ---> ${now}`);
                cb(old, now)
                old = now
            }
        }
    })
}
