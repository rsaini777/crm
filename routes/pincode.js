const express=require("express")
const router=express.Router()
const PincodeCtrl=require("../controller/pincode")


router.get('/pincode',PincodeCtrl.checkPin)


module.exports=router