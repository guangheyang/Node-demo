const test = require('./test.js'); // 返回一个模块对象

console.log(test)

console.log(require)

console.log(arguments)
console.log(arguments[0] == exports)
console.log(arguments[1] == require)
console.log(arguments[2] == module)
console.log(arguments[3] == __filename)
console.log(arguments[4] == __dirname)
