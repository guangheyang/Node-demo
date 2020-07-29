console.log('wo shi test')
const a = 10;
const b = 'b'

// 开闭原则
// module.exports.a = a
// exports.b = b
console.log(module.exports === exports)
module.exports = a
exports = b

