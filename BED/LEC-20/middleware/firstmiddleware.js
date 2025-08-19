function m1(req,res,next){
    console.log("RUNNING MIDDLEWARE 1")
    req.userId="4"
    return next();
    console.log("AFTER NEXT 1")
}
function m2(req,res,next){
    console.log("RUNNING MIDDLEWARE 2")
    console.log(req.userId);
    req.isAdmin=true;
   return next();
    console.log("AFTER NEXT 2")

}
module.exports.m1=m1;
module.exports.m2=m2;

//middleware is run in order it is called
// next() or return is not same