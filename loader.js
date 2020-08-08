const fs = require('fs');
const globalConfig = require('./config');

const controllerSet = [];
const pathMap = new Map();

function init(app) {
    const files = fs.readdirSync(globalConfig['web_path']);
    for(let i = 0; i < files.length; i++) {
        let temp = require('./' + globalConfig['web_path'] + '/' + files[i]);
        if (temp.path) {
            for(let [key,value] of temp.path) {
                if(pathMap.get[key] == null) {
                    pathMap.set(key, value);
                    app.get(key, value);
                } else {
                    throw new Error ('url path异常，url:' + key)
                }
                controllerSet.push(temp)
            }
        }
    }
}

module.exports.init = init;
