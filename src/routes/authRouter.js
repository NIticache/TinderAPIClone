const express =require("express")  
  const authRouter =express.Router()
      const bcrypt =require("bcrypt")
    const User =require("../model/userModel")

     const userValidation =require("../validation/userValidation")
  authRouter.post("/signup",userValidation,async(req,res)=>{

        try{

    const {password}=req.body
    const hashedSignature = 
    await bcrypt.hash(password,10)

            const user= new User({...req.body,password:hashedSignature})

            await user.save()

    res.send("User Account is created")
        }
        catch(err){
            

            res.send("Something went wrong"+ err)
        }
    })

    authRouter.post("/login",async(req,res)=>{

    try{  
    
    const user =await User.findOne({"emailId":req.body.emailId})

        const {emailId,password}=req.body;


        
        
        console.log(user,"user")
        
                const isValidPassword= await bcrypt.compare(password,user.password)
            console.log(isValidPassword,"isValidPassword")
        if(isValidPassword)
        { 
            const token =user.getJwt()
     console.log(token,"token",user)
    res.cookie("access_token",token)
            res.send(user)
        
        }

        else{
            res.send("Invalid Credentials")
        }}
        catch(err){
            res.send(err,"something went wrong")
        }
    })
 authRouter.post("/logout",async(req,res)=>{

    try{  
    
res.cookie("access_token",null,{
    expires:new Date.now()
})
res.send()

        }
        catch(err){
            res.send(err,"something went wrong")
        }
    })

module.exports =authRouter