const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ProductSchema = new schema({
    name:{
        type : String,
        required: true,
        
    },
       
    price:{
        type : String,
        required: true,
    },
    description:{
        type:String
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type : String,
        required: true,

    }
})
module.exports = Product = mongoose.model("product", ProductSchema);