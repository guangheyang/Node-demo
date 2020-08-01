const path = new Map();
function getData(request, response) {
    const random = Math.random();
    if (random > 0.5) {
        response.writeHead(200);
        response.write('success');
        response.end();
    } else {
        throw new Error('一个来自程序运行中的错误');
    }

}
path.set('/getData', getData);

module.exports.path = path;
