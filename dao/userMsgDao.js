const dbutil = require('./dbutil');

function insetUserMsg(name, picPath,originName, picSize, success) {
    const connection = dbutil.createConnection();
    const insertSql = 'insert into user_msg(name, pic_path,origin_name, pic_size) values(?, ?, ?, ?)';
    const params = [name, picPath,originName, picSize];
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
    insetUserMsg
}
