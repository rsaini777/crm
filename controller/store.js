const Store=require("../model/store")



const StoreCtrl={

  
    createStore:async(req,res)=>{
        try {
            const {size}=req.body
            const product="QuietPro Inverter Inclined 90 Filterless Chimney Hood (Midnight Black)"
            const price="14999"
            const quantity="1"
           
            const newStore=new Store({
              product,
              price:price*quantity,
              quantity,  
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