const session = require('express-session');
var RedisStore = require('connect-redis')(session);
const {createClient} = require('redis');

module.exports = async(app) =>{
    let redisClien = createClient({url: 'redis://localhost:6379', legacyMode:true})
    redisClien.connect().then(() =>{
        console.log("Redis connected");
    }).catch(console.error)

    app.use(session({
        store: new RedisStore({client: redisClien}),
        secret: 'my-secret',
        resave: true,
        rolling: true,
        saveUninitialized: true,
        name: 'access_token',
        cookie:{
            maxAge: 1000 * 60*60*2,
            secure: false
        }
    }))
}