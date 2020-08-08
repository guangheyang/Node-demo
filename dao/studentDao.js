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

module.exports = {
    queryAllStudent
}
