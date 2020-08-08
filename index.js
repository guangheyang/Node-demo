const express = require('express');
const globalConfig = require('./config');
const loader = require('./loader');
const app = new express();

app.use(express.static(globalConfig['page_path']));
// app.get('/queryAllStudent',loader.get('/queryAllStudent'));
loader.init(app);
app.listen(globalConfig.port);
