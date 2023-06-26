"use strict"
const mongoose = require('mongoose');
var CategoriesShema = new mongoose.Schema(
    {
        name: {
            type: String,
            requires: true
        },
        desc: String ,
        imageUrl: String,
    },{
        timestamps: true
    }
);

var CategoriesShema = mongoose.model('Categories', CategoriesShema);
module.exports = CategoriesShema;