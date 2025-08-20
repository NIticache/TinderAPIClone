    const express =require("express")


    const cookie =require("cookie-parser")
    const connectDb =require("./config/database")
const authRouter=require("./routes/authRouter")
const profileRouter= require("./routes/profileRouter")
    const User =require("./model/userModel")
    const app =express()
    app.use(express.json())
    app.use(cookie())

  app.use("/",authRouter)
  app.use("/",profileRouter)
  
 
    app.patch("/user",async(req,res)=>{
        try{
            const userId=req.body.userId
            console.log(userId,req.body)
            await User.findByIdAndUpdate(userId,req.body)
            res.send("Updated Successfully")
                }
        catch(err){
            console.log("Something went wrong during updation",err)
        }
    })

    connectDb().then(()=>{
    console.log("DB Successfully connected")

        app.listen(3000,()=>{


            console.log("server is running in 3000 port")
        }) 
        
    }).catch(((err)=>{
        console.log("DB connectioin failed, Re-try with hope , you can connect it")
    }))






