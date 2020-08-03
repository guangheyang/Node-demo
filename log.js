const fs = require('fs');
const globalConfig = require('./config');

const fileName = globalConfig.log_path + '/' + globalConfig.log_name

// // 异步方法
// fs.writeFile(fileName, 'asd', function() {
//
// });
//
// // 同步方法
// fs.writeFileSync(fileName, 'server')；

// fs的方法默认参数0o666
// 第一个数： 文件所有者的权限
// 第二个数：同组用户的权限
// 第三个数：非同组用户的权限
// r:4 w:2 x:1
// 6代表可读可写

function log(data) {
    // flag a以追加的方式写入，没有文件会创建 w可写，没有文件会创建 r可读
 fs.writeFile(fileName, data + '\n',{ flag: 'a'}, function() {
    console.log('finish')
 })
}

module.exports = log;
