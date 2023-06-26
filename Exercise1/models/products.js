"use strict"

const mongoose = require('mongoose');
const Shema = mongoose.Schema;

var productShema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        category:{
            type: Shema.Types.ObjectId,
            ref: 'Categories'
        },
        item: {
            type: Shema.Types.ObjectId,
            ref: 'Items'
        },
        user: {
            type: Shema.Types.ObjectId,
            ref: 'Users'
        },
        imageUrl: String,
        desc: String,
    },{
        timestamps: true,
    }

);

productShema.index({title: 'text'});
var Post = mongoose.model('Products', productShema);
module.exports = Post;