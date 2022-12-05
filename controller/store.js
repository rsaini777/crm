const Store=require("../model/store")



const StoreCtrl={

  
    createStore:async(req,res)=>{
        try {
            const {size}=req.body
           
            const newStore=new Store({
             size
            })
            const NewStore=await newStore.save()
            res.status(200).send(NewStore)

            
        } catch (error) {
            res.status(400).send(error)
            
        }
    },
   
 


}


module.exports=StoreCtrl;