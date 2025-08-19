const express=require("express");
const {m1,m2}=require("./middleware/firstmiddleware")
const {m3,m4}=require("./middleware/pathlevel")
const{m5}=require("./middleware/routerlevel");
const app=express();
const router=require("./routes/userRoutes")
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(m1)
app.use(m2)
app.use("/api/users",router)
// app.use(m2)
app.get("/health",m3,(req,res, next)=>{
    console.log("RUNNING MIDLLEWARE FUNCTION")
   // next()
    return res.json({
        status:"ok",
        message:"server running fine"
    })
    // console.log("AFTER RESPONSE")
})
app.get("/home",m4,(req,res,next)=>{
    console.log("running home endpoint...");
    return res.json({
        status:"ok",
        message:"serverfine homepage"
    })
})
app.use(m2)
app.listen(5775,()=>{
    console.log("server started")
})