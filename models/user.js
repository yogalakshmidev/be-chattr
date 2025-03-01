const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    unique:true,
    required:true,
  },
  password:{
    type:String,
    unique:true,
    required:true,
  },
  role:{
    type:String,
    enum:['user','admin'],
    default:'user',
  },
  friends:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  friendRequest:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  sentRequests:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  likes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }],
  comments:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Comments'
  }],
  notifications:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Notification'
  }],
  profilePic:{
    type:String,
    default:'https://commons.wikimedia.org/wiki/File:Profile_avatar_placeholder_large.png'
  },
    
},{timestamps: true,})
module.exports = mongoose.model('User',userSchema,'users');