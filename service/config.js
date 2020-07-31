const fs = require('fs');

// 加载配置文件
const config = fs.readFileSync('server.conf');
const confs = config.toString().split('\r\n');
const globalConf = {};
for (let i = 0; i < confs.length; i++) {
    let tempConf = confs[i].split('=');
    if (tempConf.length < 2) {
        continue;
    } else {
        globalConf[tempConf[0]] = tempConf[1]
    }
}

if (globalConf['path_position'] === 'relative') {
    globalConf.basePath = __dirname + globalConf.path;
} else {
    globalConf.basePath = globalConf.path;
}

console.log(globalConf, 'global')
module.exports = globalConf;
