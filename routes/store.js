const express=require("express")
const router=express.Router()
const StoreCtrl=require("../controller/store")


router.post('/store',StoreCtrl.createStore)


module.exports=router