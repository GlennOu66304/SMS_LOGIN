const express = require("express");
const { randomCode, sendCode } = require("./utils/getMessage");

const app = express();//实例

app.get("/login", (req, res) => {
    let code = randomCode(6);//生成6位数字随机验证码
    sendCode("测试号码", code, function (success) {
        if (success) {
            res.send("短信验证码已发送");
        } else {
            res.send("短信验证码发送失败");
        }
    })
})

const server = app.listen(4200, function () {
    const { address, port } = server.address();
    console.log(address, port);
    console.log("HTTP服务已启动");
})
