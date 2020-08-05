const studentService = require('../service/studentServer');
const url = require('url');

const path = new Map();
function login(request, response) {
    const params = url.parse(request.url, true).query;
    studentService.queryStudentBySNo(params.sNo,function(result) {
        let res = '';
        if (result === null || !result.length) {

        } else {
            if (result[0].pwd === params.password) {
                res = 'ok';
            } else {
                res = 'fail'
            }
        }
        response.write(res);
        response.end();
    });
}
path.set('/login', login);
console.log(path, 'path');
module.exports.path = path;
