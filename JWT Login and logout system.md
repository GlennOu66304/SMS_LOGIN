
## Vue.js logout solution achieve:

You just put a click event, then redirect the home page to login page:
admin/main.vue
```
<span @click="$router.push('/login')">退出</span>
```

## Cookie JWT
### Cannot find module 'bcrypt'
[Cannot find module 'bcrypt'](https://stackoverflow.com/questions/34546272/cannot-find-module-bcrypt)  
video:[Node Auth Tutorial (JWT) ](https://www.youtube.com/watch?v=uiKwHx2K1Fo)
code :[node-express-jwt-auth](https://github.com/iamshaunjp/node-express-jwt-auth/tree/lesson-18)   


# JWT Login and logout system


## The reason why the expre featur does not work

You need to run the front end page in the dev server, not in the productions server.

## Logout feature 

mongodb + vue + node.js ---> 
[How to log out when using JWT](https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6)   
[How to destroy JWT Tokens on logout?](https://stackoverflow.com/questions/37959945/how-to-destroy-jwt-tokens-on-logout)   
[Invalidating JSON Web Tokens](https://stackoverflow.com/questions/21978658/invalidating-json-web-tokens?page=1&tab=votes#tab-top)  

## Token expire
```
jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: 60 * 60 });
 
```
[Token Expiration (exp claim)](https://www.npmjs.com/package/jsonwebtoken)

## Singup, login, auth
[1小时搞定NodeJs(Express)的用户注册、登录和授权](https://www.bilibili.com/video/BV1Nb411j7AC?spm_id_from=333.999.0.0)  
