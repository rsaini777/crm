const mongoose=require("mongoose")
const Schema= new mongoose.Schema({
    product:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    size:{
        type:Number,
        
    },
},{timestamps:true})

module.exports=mongoose.model("Store",Schema);