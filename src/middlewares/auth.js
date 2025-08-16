const authMiddleware=(req,res,next)=>{
    const isAuthorised=false
    if(isAuthorised)
    {
        next()
    }
    else{
        res.status(401).send("Unauthorised access")
    }
    }

    const userMiddleware=(req,res,next)=>{
        const isAuthorised=true
        if(isAuthorised)
        {
            next()
        }
        else{
            res.status(401).send("Unauthorised access")
        }
        }    
module.exports={authMiddleware,userMiddleware}