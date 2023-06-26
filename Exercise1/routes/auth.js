var express = require('express');
const joiValidation = require('../middleware/joiValidation');
const auth = require('../middleware/auth');
const {signInShema, signUpShema} = require('../schemas');
var router = express.Router();
const {login} = require('../services/login');
const {register} = require('../services/register');
const userService = require('../services/user');
const {logout} = require('../services/logout');

router.get('/me', auth.ensureSignedIn,auth.currentUser, async function(req,res,next){
    const {currentUser} = req;
    const result = await userService.findById(currentUser?._id);
    res.json(result);
});

router.post('/logout', auth.ensureSignedIn, async(re, res) =>{
    const result = logout(req.session);
    return res.json(result);
});

router.post('/login',auth.ensureSignedOut, joiValidation(signInShema),async(req,res,next) =>{
    const {email,password} = req.body;
    const result = await login(email, password);
    req.session.jwt = result?.data?.token
    res.json(result);
});

router.post('/register', auth.ensureSignedOut, joiValidation(signUpShema), async(req,res,next) =>{
    const createdUser = await register(req.body);
    res.json(createdUser);
});

module.exports = router;