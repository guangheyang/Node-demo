const dbutil = require('./dbutil');

function queryAllStudent(success) {
    const connection = dbutil.createConnection();
    const querySql = 'select * from school';
    connection.connect();
    connection.query(querySql, function(error, result) {
        if(!error) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
        connection.end();
    })
}

function insetStudent(sNo, name, age, pwd, success) {
    const connection = dbutil.createConnection();
    const insertSql = 'insert into school(sNo, name, age, pwd) values(?, ?, ?, ?)';
    const params = [sNo, name, age, pwd];
    connection.connect();
    connection.query(insertSql, params, function(error, result) {
        if(!error) {
            console.log(result);
            success(result);
        } else {
            throw new Error(error);
        }
        connection.end();
    })
}

module.exports = {
    queryAllStudent,
    insetStudent
}
