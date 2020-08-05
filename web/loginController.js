const studentService = require('../service/studentServer');
const url = require('url');

const path = new Map();
function login(request, response) {
    request.on('data', function(data) {
        const sNo = data.toString().split('&')[0].split('=')[1];
        const password = data.toString().split('&')[1].split('=')[1];
        console.log(sNo, password)
        studentService.queryStudentBySNo(sNo,function(result) {
            let res = '';
            if (result === null || !result.length) {

            } else {
                if (result[0].pwd === password) {
                    res = 'ok';
                } else {
                    res = 'fail'
                }
            }
            response.write(res);
            response.end();
        });
    });
}
path.set('/login', login);
console.log(path, 'path');
module.exports.path = path;
