// Application file used to create server app
const express = require('express');

// create application
const app = express();

// to check whether appln created using get request
app.get('/',(req,res)=>{
  res.json({message: "Hello World"});
});

 module.exports=app;

