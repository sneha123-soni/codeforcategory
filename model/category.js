const mongoose = require("mongoose");
 
 const category = new mongoose.Schema({
    categoryName:String
})

module.exports = mongoose.model("Categories",category);