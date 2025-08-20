const express =require("express")  
      const { userAuthentication } = require("../middlewares/auth")
  const profileRouter =express.Router()  
  
  profileRouter.get("/profile",userAuthentication,async(req,res)=>{
        try{
        const user=req.user
        
            res.send(user)
        
            
        }
        catch(err){
            console.log(err)
                res.send("something went wrong" + err)
        }

    })

    module.exports=profileRouter