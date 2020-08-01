const fs = require('fs');

const conf = fs.readFileSync('./server.conf');
const globalConfig = {}
const confArr = conf.toString().split('\r\n');

for(let i = 0; i < confArr.length; i++) {
    globalConfig[confArr[i].split('=')[0]] = confArr[i].split('=')[1];
}

if (globalConfig['static_file_type']) {
    globalConfig['static_file_type'] = globalConfig['static_file_type'].split('|');
} else {
    throw Error('配置文件异常,缺少：static_file_type');
}
module.exports = globalConfig;
