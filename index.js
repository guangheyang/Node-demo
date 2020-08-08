const express = require('express');
const globalConfig = require('./config');
const loader = require('./loader');
const cookie = require('cookie-parser');
const app = new express();

app.use(express.static(globalConfig['page_path']));
// app.get('/api/*',function(request, response, next) {
//     console.log(request.cookies); // 读取cookie
//     if (request.cookies && response.cookies.id) {
//         next()
//     } else {
//         response.redirect('/login.html');
//     }
//     // response.writeHead(404);
//     // response.write('<html><body>404NotFound</body></html>');
//     // response.end();
// });
loader.init(app);
app.listen(globalConfig.port);
