"use strict"

const mongoose = require('mongoose');
const Schema = require.Schema;

var pricesShema = new mongoose.Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        price: Number,
        source: String,
    },{
        timestamps: true,
    }
);

var Prices = mongoose.model('Prices', pricesShema);
module.exports = Prices;