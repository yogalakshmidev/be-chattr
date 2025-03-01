const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET}= require('../utils/config');
const authController  = {
register: async(req,res)=>{
  try {
    // get the user inputs
    const {name, email,password}= req.body;

    // check if the user already exist
    const user = await User.findOne({email});

    // if the user already exist
    if(user){
      return res.status(400).json({message:"User Already exist"});
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password,10);

    // create a new user
    const newUser = new User({
      name,
      email,
      password:hashedPassword
    });

    // save the user to the database
    await newUser.save();
    // return the success message
    res.status(201).json({message:"User Registered Successfully"});
    
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
login: async(req,res)=>{
  try {
// get the user inputs
const {email, password} = req.body;
// check user exists
const user = await User.findOne({email});
if(!user){
  return res.status(400).json({message:"User not found"});
}
// check password is correct by compare password
const isPasswordCorrect = await bcrypt.compare(password,user.password);

// if the password is incorrect,return error
if(!isPasswordCorrect){
  return res.status(500).json({message:"Invalid Credentials"});

}

// create token
const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn: '3h'});

// set the token in the header
res.cookie('token',token,{httpOnly: true,sameSite:'strict',secure:true,maxAge:3*60*60*1000,path:'/'});

// return success message
    res.status(200).json({message:"Login User"});
    
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
logout: async(req,res)=>{  
  try {
  //  clear the token in the cookie
  res.clearCookie('token');
  // return the success message
    res.status(200).json({message:"Logout User"});
    
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
me: async(req,res)=>{
  try {
    // get the user id from the request object
    const userId = req.userId;

    // get the user details from the database
    const user = await User.findById(userId).select('-password -__v');

    // return the user details
      res.status(200).json({user});
    
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
}
module.exports = authController;