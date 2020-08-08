const studentDao = require('../dao/studentDao');

const path = new Map();
function queryAllStudent(request, response) {
    studentDao.queryAllStudent(function(result) {
        response.writeHead(200);
        response.write(JSON.stringify(result));
        response.end();
    })
}
path.set('/queryAllStudent', queryAllStudent);

module.exports.path = path;
