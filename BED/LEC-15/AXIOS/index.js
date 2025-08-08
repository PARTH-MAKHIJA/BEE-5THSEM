const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json())
app.post("/blog",(req,res)=>{
    let title=req.body.title;
    let description=req.body.description;
    console.log(title,description);
    res.json({
        success:true,
        message:"blog added"
    })
})
app.listen(6655,()=>{
    console.log("server started")
})