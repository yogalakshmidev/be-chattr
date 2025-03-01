const errorRoute = (req,res,next) => {

   res.status(404).json({message:"Api call not found"});
 }
  
module.exports = errorRoute;