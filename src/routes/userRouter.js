const express =require("express")  
      const { userAuthentication } = require("../middlewares/auth")
  const userRouter =express.Router()  
  

userRouter.get("/user/requests/recieved", userAuthentication, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const connectionRequests = await ConnectionRequestModel.find({
        toUserId: loggedInUser._id,
        status: "intrested",
        }).populate("fromUserId", ["firstName", "lastName"]);
        if (connectionRequests) {
        return res.status(200).json({
            connectionRequests,
        });
        }
    } catch (error) {
        res.status(400).send("ERROR:" + error.message);
    }
    });

    module.exports=userRouter
