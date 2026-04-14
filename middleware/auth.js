const jwt = require('jsonwebtoken')
const { decode } = require('node:punycode')

const authMiddleware = (req,res,next)=>{
   const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"No Token"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}
module.exports = authMiddleware;