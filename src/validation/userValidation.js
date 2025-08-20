const validator =require("validator")
const userValidation=(req,res,next)=>{

    const {password}=req.body
    if(!validator.isStrongPassword(password))
    {
        res.send("Not a valid Password")
    }
    else{
        next()
    }
}
module.exports=userValidation