// console.log("Let's rock")
const express =require("express")
const connectDb =require("./config/database")

const User =require("./model/userModel")
const {authMiddleware,userMiddleware} =require("./middlewares/auth")
const  mongoose  = require("mongoose")
const app =express()

app.use(express.json())
app.post("/signup",async(req,res)=>{
    const user=new User(req.body)

    await user.save()
    res.send("User Account is created")
})

connectDb().then(()=>{
console.log("DB Successfully connected")

    app.listen(3000,()=>{


        console.log("server is running in 3000 port")
    }) 
    
}).catch(((err)=>{
    console.log("DB connectioin failed, Re-try with hope , you can connect it")
}))






