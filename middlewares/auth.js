const jwt= require('jsonwebtoken');
const { JWT_SECRET } = require("../utils/config");

const auth={
// middleware to check if the user is authenticated...
checkAuth: async(req,res,next)=>{
  try {
    // get the token from the cookie
    const token= req.cookies.token;
    // if the token is not exist
    if(!token){
      return res.status(401).json({message:"unauthorized"});
    }

    // verify token
    const decoded = jwt.verify(token,JWT_SECRET);

    // set the user in the request object
    req.userId = decoded.userId;
    
  } catch (error) {
    res.status(500).json({message:error.message});
  }
  next();
}
}
module.exports=auth;