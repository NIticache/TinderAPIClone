const mongoose =require("mongoose")


const connectDb =async()=>{
   await mongoose.connect("mongodb+srv://niteesh:iU4iFyBUDqeFmjQB@devcluster.x8ub4le.mongodb.net/devTinder")
}

module.exports = connectDb

