const dbutil = require('./dbutil');

// 查询所有学生
function queryAllStudent(success) {
    const connection = dbutil.createConntction();
    connection.connect();
    const querySql = 'select * from school';
    connection.query(querySql, function(error, result) {
        if(!error) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryStudentBySNo(sNo, success) {
    const connection = dbutil.createConntction();
    connection.connect();
    const querySql = 'select * from school where sNo = ?';
    connection.query(querySql, sNo, function(error, result) {
        if(!error) {
            console.log(result);
            success(result);
        } else {
            console.log(error)
        }
    });
    connection.end();
}

module.exports = {
    queryStudentBySNo,
    queryAllStudent
}
