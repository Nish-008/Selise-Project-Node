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
    category : {
        type: String,
        enum: ['Electronics', 'Fashion', 'Books', 'Accessories'],
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        minLength: 3,
        maxLength: 250
    },
    imageUrl: {
        type: String
    },
    quantity: {
        type : Number
    },
    isBestArchieved: Boolean,
    createdDate:{
        type: Date,
        required: true 
    },
    origin:{
        type: String,
        required:true,
        enum: ['Shop', 'Individual']
    }

});

module.exports = mongoose.model('product', schema)