const express=require("express")
const router=express.Router()
const PincodeCtrl=require("../controller/pincode")


router.post('/pincode',PincodeCtrl.createStore)


module.exports=router