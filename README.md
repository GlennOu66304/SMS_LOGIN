# SMS

## Register

Phone number register and login 

[Nodejs实现给手机发送短信验证码用于登录功能(免费短信)](https://blog.csdn.net/weixin_43334673/article/details/109119854)  

[短信错误码](https://doc.yuntongxun.com/p/5a5857203b8496dd00dd2b3d)

[免费测试](https://doc.yuntongxun.com/p/5a531a353b8496dd00dcdfe2)

https://app.cloopen.com:8883/2013-12-26/Accounts/8aaf07087c16b0a3017c22ea6c97039b/SMS/TemplateSMS?sig=


[function md5()](http://www.md5.cz/)
[base64](https://www.base64decode.org/)

## Always show""短信验证码发送失败"

1.You need to change the phone to your phone number in getMessage:
```
 var body = {
        to: 185xxxx,
        appId: AppID,
        templateId: '1',
        "datas": [code, "1"]
    }
```
2.Make sure you fill all the api information:
3. make sure the router is 
```
http://localhost:4200/login
```

## Other
[使用node实现向手机发送验证码](https://blog.csdn.net/qq_40976321/article/details/98476144?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link)  

[容联云免费测试](http://doc.yuntongxun.com/space/5a5098313b8496dd00dcdd7f)  

[【全栈之旅】NodeJs登录流程以及Token身份验证](https://juejin.cn/post/6894065644933906445#heading-11)  

[腾讯云短信Node.js](https://cloud.tencent.com/document/product/382/43197)  

[Node图形邮箱手机验证码实现方法总结](https://segmentfault.com/a/1190000040286177)  


# JWT Login
[JWT Login and logout system.md](https://github.com/GlennOu66304/SMS_LOGIN/blob/main/JWT%20Login%20and%20logout%20system.md).  
