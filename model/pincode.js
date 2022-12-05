const mongoose=require("mongoose")
const Schema= new mongoose.Schema({
    pincode:{
        type:Number,
        required:true,
    },
},{timestamps:true})

module.exports=mongoose.model("Pincode",Schema);