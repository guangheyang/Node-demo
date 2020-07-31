# 一、后端的规范与思想

## 1.分层

（1）Web层（web层、controller层）：用于接收和发送`Http`请求的，经行封装

（2）业务逻辑层（服务层，通常以`XXXService`结尾）

（3）`DAO`层：

​		`DataBase`(DB): 存储数据

​		业务： 对对象进行操作

​		如果要存储： 对象 转为 数据

​		如果要读取： 数据 转为 对象

（4）持久层：存在磁盘上（文件、数据库）


每层的命名：（以登录为例）

web层：`LoginController`（接收参数，判断是否非法，传给服务层）

服务层： `LoginService`（获取这个用户的密码，进行比较）

`DAO`层：`LoginDAO`(从数据库获取数据，并转换为对象)

`Domain`：User 实体对象


分层目的：是每一层逻辑更清晰

设计模式：单一职责原则

## 2.模块化

（1）`Es6`导入与导出,`Es3`、`Es5`的缺少模块化概念

（2）`Js`规范缺乏管理机制（`npm`中央仓库）

引入模块
require("http")       // 系统内置模块
require("./test.js") // 自定义模块

导出模块export

###### module.exports与exports的区别？

`module.exports`与`export`指向同一个对象，当像`module.exports = a`或`exports = b` 这样赋值时，存储地址改变，结论导出的永远是对象`module.exports`



NodeJs的模块是运行在一个函数当中



# Node API

|                          Socket                          |                            Server                            |
| :------------------------------------------------------: | :----------------------------------------------------------: |
|     事件：connect、data、end、timeout、error、close      | 事件：listening、connection、close(关闭时触发)、error（报错时触发） |
| 属性：remoteAddredd、remotePort、localAddress、localPort |                 属性：listen、close、address                 |
|        方法：setTimeout、write、setEncoding、end         |                                                              |

# 使用浏览器访问服务

返回的data为http请求头

```
GET /url HTTP/1.1  // 请求类型 url http协议 版本号
Host: 127.0.0.1:12306 //请求ip与端口
Connection: keep-alive  // 保持连接
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate, br  // 接收的编码
Accept-Language: zh-CN,zh;q=0.9 // 接收的语言
```

连接成功后响应要使用http响应头，响应头与响应体之间为两个换行

