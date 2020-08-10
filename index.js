const express = require('express');
const globalConfig = require('./config');
const loader = require('./loader');
const cookie = require('cookie-parser');
const multer = require('multer');
const userMsgDao = require('./dao/userMsgDao');
const app = new express();

app.use(express.static(globalConfig['page_path']));
app.use(cookie());
const uploadSingle = multer({dest: './file'});

app.get('/api/*',function(request, response, next) {
    console.log(request.cookies); // 读取cookie
    if (request.cookies && response.cookies.id) {
        next()
    } else {
        response.redirect('/login.html');
    }
});
loader.init(app);
// single方法name参数要和表单file名称一致，否则会报错
app.post('/upload', uploadSingle.single('myfile'), function(request, response) {
    const { originalname, size, path } = request.file;
    const name = request.body.name;
    // console.log(request.file.originalname); // 上传的文件名
    // console.log(request.file.size); // 上传的文件大小
    // console.log(request.file.path, 'path'); // 上传的文件所在路径

    // 有两种传参方式
    // 1.拼接到url后面，将request.url转化为url对象，找到query属性，拿到参数
    // 2.放在form表单中，request数据体（body）传上来

    // console.log(request.body.name); // 获取name参数
    // 上传一个用户信息（用户名，头像）
    // 头像的图片存放在某个路径下（文件夹下，也是磁盘下）
    // 数据库存储 用户名，用户头像的路径
    userMsgDao.insetUserMsg(name, path, originalname, size, function(result) {
        const resp = {
            path,
            originalname
        }
        response.writeHead(200);
        response.write(JSON.stringify(resp));
        response.end();
    });
});
app.listen(globalConfig.port);
