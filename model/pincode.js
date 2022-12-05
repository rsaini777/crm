const mongoose=require("mongoose")
const Schema= new mongoose.Schema({
    Pincode:{
        type:Number,
    },
},{timestamps:true})

module.exports=mongoose.model("Pincodedata",Schema);