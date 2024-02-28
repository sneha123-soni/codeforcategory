const mongoose = require("mongoose");

const service = new mongoose.Schema({
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },

    serviceName: String,
    type:{
        type:String,
        enum:['Normal','VIP']
    },
    priceOptions:[
        {
            durattion: String,
            price: Number,
            type:{
                type:String,
                enum: ['Hourly', 'Weekly', 'Monthly']
            }

    }
]

});

module.exports = mongoose.model('Service',service);