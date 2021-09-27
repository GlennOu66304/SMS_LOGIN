const express = require('express');
const app = express();
const port = 3000;//端口号
const SMSClient = require('@alicloud/sms-sdk')//阿里云sdk工具
const accessKeyId = 'XXXXXX'//你的keyID
const secretAccessKey = 'XXXXX'//你的密钥
let smsClient = new SMSClient({ accessKeyId, secretAccessKey })
const http = require('http');
const url = require('url');
//跨域问题用cors解决掉
var cors = require("cors"); // npm install cors
app.use(cors({
    methods: ["GET", "POST"],
    alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
}));
//获取请求
app.get('/前端发来的请求名', function (req, res) {
    let { pathname, query } = url.parse(req.url, true);
    smsClient.sendSMS({
        PhoneNumbers: query.tel,//必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为：国际区号+号码，如“85200000000”
        SignName: '*******',//必填:短信签名-可在短信控制台中找到
        TemplateCode: '*******',//必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        TemplateParam: '{"code":"验证码内容"}'//可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时。
    }).then(function (msg) {
        let { Code } = msg
        if (Code === 'OK') {
            //处理返回参数
            res.send('ok');
        }
    }, function (err) {
        console.log(err)
    })
});

app.listen(port, function () {
    console.log('服务器运行');
});
