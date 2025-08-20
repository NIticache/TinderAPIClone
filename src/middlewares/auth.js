const jwt =require("jsonwebtoken")
const User =require("../model/userModel")

    const userAuthentication=async(req,res,next)=>{
       try{
        const token =req.cookies.access_token
        if(token)
        {
            const {_id} =jwt.verify(token,"VijiNiti@0506")
            const user= await User.findById(_id)
            if(user)
            {
                req.user=user
                next()
            }
            else{
                 res.status(400).send("User Not found")
            }
        }
        else{
            res.status(400).send("Invalid Token")
        }
    }
   
       catch(err){
            res.send("Something went wrong" + err)
       }
        }    
module.exports={userAuthentication}