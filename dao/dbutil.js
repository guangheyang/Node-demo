const mysql = require('mysql');

function createConntction() {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'shcool'
    });
    return connection
}

module.exports.createConntction = createConntction;
