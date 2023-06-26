const Jwt = require('jsonwebtoken');

const currentUser = (req, res, next) =>{
    if(!req.session.Jwt)
        throw "You must be sign In"
    
    const user = Jwt.verify(req.session, 'jwt-secret')
    req.currentUser = user;
    next()
}

const ensureSignedIn = (req, res, next) =>{
    if (!req.session.Jwt)
        throw "You must be sign In"
    next();
}

const ensureSignedOut = (req, res, next) =>{
    if(req.session.Jwt)
        throw "You must be signed "
    next();
}

module.exports = {
    currentUser,
    ensureSignedIn,
    ensureSignedOut
}