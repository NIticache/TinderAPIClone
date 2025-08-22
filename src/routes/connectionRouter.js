const express=require("express")

const connectionRouter =express.Router()
      const { userAuthentication } = require("../middlewares/auth")
const ConnectionRequest=require("../model/connectionModal")

connectionRouter.post("/connection/send/:status/:userId",userAuthentication,async(req,res)=>{
    try{

    
    const status=req.params.status
    const toUserId=req.params.userId
    console.log(status,toUserId)
    const allowedStatus =["ignored","interested"]
    if(!allowedStatus?.includes(status))
    {
        return ("status is not allowed")
    }
    const data=new ConnectionRequest({
        fromUserId:req.user._id,
        toUserId,
        status
    })
await data.save()
    res.send("Connection Request sent")
}
catch(err){
    res.status(400).send("something went wrong",err.message)
}
})

connectionRouter.post("/connection/accept/:status/:userId",userAuthentication,async(req,res)=>{
    try{

    
    const status=req.params.status
    const toUserId=req.params.userId
    console.log(status,toUserId)
    const allowedStatus =["ignored","interested"]
    if(!allowedStatus?.includes(status))
    {
        return ("status is not allowed")
    }
    const data=new ConnectionRequest({
        fromUserId:req.user._id,
        toUserId,
        status
    })
await data.save()
    res.send("Connection Request sent")
}
catch(err){
    res.status(400).send("something went wrong",err.message)
}
})
module.exports=connectionRouter