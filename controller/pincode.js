const Pincodedata=require("../model/pincode")
const search=require("../utils/search")



const PincodeCtrl={
    checkPin:async(req,res)=>{
        try {
            const { Pincode } = req.body;
            const user = await Pincodedata.find()
            let use=search(user,Pincode)
            if(use){
             res.status(200).send(use);
            }
            
        } catch (error) {
            res.status(400).send(error)
            
        }
    },
   
 


}


module.exports=PincodeCtrl;