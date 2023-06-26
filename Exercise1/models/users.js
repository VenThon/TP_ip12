"use strict"
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userShema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        validate: {
          validator: async val => Users.doesntExist({username: val}),
          message: ({value}) => `Username ${value} has already been taken.`
        }
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      },
    }, {
      timestamps: true,
      toJSON: {
        transform(doc, ret){
          delete ret.password;
        }
      }
},{
    timestamps: true,
    toJSON: {
    transform(doc, ret){
      delete ret.password;
    }
  }
});

userShema.methods.matchesPassword = function (password){
  return bcrypt.compareSync(password, this.password);
};

userShema.statics.doesntExist = async function(option){
  return (await this.where(option).countDocuments()) === 0;
};

var Users = mongoose.model('Users', userShema);

module.exports = Users;