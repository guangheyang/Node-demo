const fs = require('fs');
const globalConifg = require('./config');
const controllerSet = [];
const files = fs.readdirSync(globalConifg['web_path']);

const pathMap = new Map();

for (let i = 0; i < files.length; i++) {
    // 自己定义的路径要以./开头
    const temp = require('./' + globalConifg['web_path'] + '/' + files[i]);
    if (temp.path) {
        for( let [key, value] of temp.path) {
            if (pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw Error('url path 异常，url:' + key);
            }
            controllerSet.push(temp);
        }
    }
}
module.exports = pathMap;
