const mongoose =require("mongoose")
const validator = require("validator")

const jwt=require("jsonwebtoken")



const userSchema =new mongoose.Schema({
firstName:{
    type:String,
    require:true
},
lastName:{
    type:String,
    default:''
},
gender:{
type:String
},
age:{
    type:Number
},
emailId:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value))
        {
            throw Error ("Not a valid email id")
        }
    },
    unique:true

},
password:{
    type:String,
    required:true,
},


})
userSchema.methods.getJwt= function(){
     
                 console.log("herrrrrrrr")
             const token=jwt.sign({_id:this._id },"VijiNiti@0506",{expiresIn:"1d"})
             console.log(token,"....")
        return token

}


module.exports=mongoose.model("User",userSchema)
