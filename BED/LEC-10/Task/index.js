// const express = require('express');
// const app = express();
// app.use(express.static(__dirname+"/public"))
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/public/index.html");
// })
// // app.get("/about",(req,res)=>{
// //     res.sendFile(__dirname+"/about.html");
// // })
// app.listen(3333,()=>{
//     console.log("SERVER START")
// })
const express=require("express");
const app= express();
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}));

app.post("/addUser", (req, res)=>{
    let{username, password}=req.body;
    res.send({
        username,
        password
    });
})

app.listen(3333, ()=>{
    console.log("server started");
})