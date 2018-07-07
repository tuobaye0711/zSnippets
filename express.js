const http = require('http');
const url = require('url');

const core = function(req, res) {
    const method = req.method.toLowerCase();
    const obj = url.parse(req.url, true);
    const pathname = obj.pathname;
    const cb = hitRouting(method, pathname)

    next(req, res)
    cb(req, res)
}

core.listen = function(port, fn) {
    http.createServer(core).listen(port, '127.0.0.1', fn)
}

const methods = ['post', 'get', 'delete', 'options', 'head'];
methods.map(method => {
    core[method] = (path, cb) => core.routes.push({method, path, cb})
})

core.routes = [];
core.midwares = [];

const hitRouting = function(method, pathname) {
    let cb = (req, res) => res.end('no hit routing');
    core.routes.map((r, index) => {
        if(r.method === method && r.path === pathname) {
            return cb = r.cb
        }
    })
    return cb
}

core.use = function(midwareFn) {
    core.midwares.push(midwareFn)
}

let i = 0;
const next = function(req, res) {
    const handler = core.midwares[i++];
    if (!handler){
        return
    }
    handler(req, res, next)
}

const express = () => core;

module.exports = express;
