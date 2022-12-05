const mongoose=require("mongoose")
const Schema= new mongoose.Schema({
    size:{
        type:Number,
        required:true,
    },
},{timestamps:true})

module.exports=mongoose.model("Store",Schema);