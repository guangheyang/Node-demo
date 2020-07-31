const net = require('net');
const fs = require('fs');

const globalConfig = require('./config.js');
const server = net.createServer();
server.listen(globalConfig.port, '127.0.0.1');

server.on('listening', function() {
    console.log('服务已启动');
});

server.on('connection', function(socket) {
    socket.on('data', function(data) {
        const url = data.toString().split('\r\n')[0].split(" ")[1];
        try {
            console.log(globalConfig['basePath'])
            const fileData = fs.readFileSync(globalConfig['basePath'] + url);
            socket.write('HTTP/1.1 200OK\r\n\r\n');
            socket.write(fileData)
        } catch (e) {
            console.log('找不到文件');
            socket.write('HTTP/1.1 404NotFound\r\n\r\n<html><body><h1>404 Not Found</h1></body></html>');
        }
        socket.end();
    });
});

