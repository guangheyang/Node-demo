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
path.set('/api/queryAllStudent', queryAllStudent);

function insertStudent(requset, response) {
    const params = url.parse(requset.url, true).query;
    studentDao.insetStudent(params.sNo, params.name, params.age, params.pwd,function (result) {
        response.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
        response.write('添加成功');
        response.end();
    })
}
path.set('/api/insertStudent', insertStudent);

function login (request, response) {
    const params = url.parse(request.url, true).query;
    studentDao.queryStudentBySNo(params.sNo,function(result) {
       if(result && result.length > 0 && result[0].pwd == params.pwd) {
           // 写cookie
           response.cookie('id', result[0].sNo);
           // 重定向
           response.redirect('/api/queryAllStudent');
       } else {
           response.redirect('/loginError.html');
       }
    });
}
path.set('/login', login);
module.exports.path = path;
