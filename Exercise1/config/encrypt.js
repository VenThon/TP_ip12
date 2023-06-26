const bcrypt = require('bcryptjs')

const encryptData = (password) =>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password,sal);
    return hash;
}

const decryptData = (password,salt) =>{
    return byscry.compareSync(password,bcrypt.hash);
}

module.exports = {
    encryptData,
    decryptData
}