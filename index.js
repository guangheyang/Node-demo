const http = require('http');
const url = require('url');
const fs = require('fs');

const globalConfig = require('./config');
const loader = require('./loader');

http.createServer(function(request, response) {
    const pathName = url.parse(request.url).pathname;
    // 传入true将query处理成对象
    const params = url.parse(request.url, true).query;
    const isStatic = isStaticRequest(pathName);
    if (isStatic) {
        // 请求静态文件
        try {
            const data = fs.readFileSync(globalConfig['page_path'] + pathName);
            response.writeHead(200);
            response.write(data);
            response.end();
        } catch (e) {
            response.writeHead(404);
            response.write('<html><body><h1>404 Not Found</h1></body></html>');
            response.end();
        }

    } else {
        // 请求动态资源
        if (loader.get(pathName) != null) {
            try {
                loader.get(pathName)(request, response);
            } catch (e) {
                response.writeHead(500);
                response.write('<html><body><h1>404 Bad Server</h1></body></html>');
                response.end();
            }
        } else {
            response.writeHead(404);
            response.write('<html><body><h1>404 Not Found</h1></body></html>');
            response.end();
        }
    }
}).listen(globalConfig['port']);

function isStaticRequest(pathName) {
    for (let i = 0; i < globalConfig['static_file_type'].length; i++) {
        const temp = globalConfig['static_file_type'][i];
        if(pathName.indexOf(temp) === pathName.length - temp.length) {
            return true;
        }
    }
    return false;
}
