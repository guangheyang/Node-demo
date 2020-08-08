const express = require('express');
const globalConfig = require('./config');
const loader = require('./loader');
const app = new express();

app.use(express.static(globalConfig['page_path']));
app.get('/api/*',function(request, response, next) {
    console.log('===');
    // response.writeHead(404);
    // response.write('<html><body>404NotFound</body></html>');
    // response.end();
    response.redirect('/login.html');
});
loader.init(app);
app.listen(globalConfig.port);
