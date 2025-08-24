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

connectionRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const loggedInUser = req.user;
      const { status, requestId } = req.params;

      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({ messaage: "Status not allowed!" });
      }

      const connectionRequest = await ConnectionRequest.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "interested",
      });
      if (!connectionRequest) {
        return res
          .status(404)
          .json({ message: "Connection request not found" });
      }

      connectionRequest.status = status;

      const data = await connectionRequest.save();

      res.json({ message: "Connection request " + status, data });
    } catch (err) {
      res.status(400).send("ERROR: " + err.message);
    }
  }
);
module.exports=connectionRouter