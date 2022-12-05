const express=require("express")
const router=express.Router()
const UserCtrl=require("../controller/userinfo")


router.post('/user',UserCtrl.createInfo)
router.get('/user/:id',UserCtrl.getInfo)
router.put('/user/update/:id',UserCtrl.updateInfo)



module.exports=router