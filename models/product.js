const mongoose = require('mongoose')

const schema = new mongoose.Schema({

    productName:{
        type: String,
        minLength: 3,
        maxLength: 50
    },
    productShortCode : {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    Category : {
        type: String,
        enum: ['KG', 'liters', 'meters', 'cm'],
        required: true
    },
    Price : {
        type: Number,
        required: true
    },
    Description : {
        type: String,
        minLength: 3,
        maxLength: 50
    },
    ImageUrl: {
        type: String
    },
    IsBestArchieved: Boolean,
    CreatedDate:{
        // type: Date,
        // required: true,
        // max: Date.now, 
        type: String,
        required: true 
    },
    Origin:{
        type: String,
        required:true,
        enum: ['KG', 'liters', 'meters', 'cm']
    }

});

module.exports = mongoose.model('product', schema)