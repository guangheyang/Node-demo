const net = require('net');

const socket = net.connect(12306, '127.0.0.1');

socket.on('connect', function () {
    console.log('已连接到服务器');
    console.log(socket.remoteAddress);
    console.log(socket.remotePort);
    console.log(socket.localAddress);
    console.log(socket.localPort);
});

socket.on('data', function (data) {
    console.log(data.toString());
    socket.end();
});

socket.write('hello yang');

socket.on('close', function () {
    console.log('连接已关闭');
});

socket.setTimeout(2000);
socket.on('timeout', function () {
    console.log('超时了');
    socket.end();
});
