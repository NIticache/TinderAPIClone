const { Schema, default: mongoose } = require("mongoose");
const { schema } = require("./userModel");

const connectionSchema =new Schema({

      fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    toUserId:{type:mongoose.Schema.Types.ObjectId},
    status:{
        type:String,
        enum :["ignored","interested","accepted","rejected"]
    }


})

module.exports =mongoose.model("ConnectionRequest",connectionSchema)