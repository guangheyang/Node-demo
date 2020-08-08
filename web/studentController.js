const studentDao = require('../dao/studentDao');
const url = require('url');

const path = new Map();
function queryAllStudent(request, response) {
    studentDao.queryAllStudent(function(result) {
        response.writeHead(200);
        response.write(JSON.stringify(result));
        response.end();
    })
}
path.set('/queryAllStudent', queryAllStudent);

function insertStudent(requset, response) {
    const params = url.parse(requset.url, true).query;
    studentDao.insetStudent(params.sNo, params.name, params.age, params.pwd,function (result) {
        console.log(result)
        response.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        response.write('添加成功');
        response.end();
    })
}
path.set('/insertStudent', insertStudent);

module.exports.path = path;
