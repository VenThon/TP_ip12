"use strict"
const mongoose = require('mongoose');
const Schema = require.Schema;

var itemsShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Categories'
        },
        desc: String,
    },{
        timestamps: true,
    }
)

itemsShema.index({name: 'text'});
var Items = mongoose.model('Items', itemsShema);
module.exports = Items;