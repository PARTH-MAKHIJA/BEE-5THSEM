const express=require("express");
const app=express();
const fs=require("fs")
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/users",(req,res)=>{
    fs.readFile("./users.json","utf-8",function(err,data){
        if(err) res.send(err);
        let allusers=JSON.parse(data);
        res.json(allusers);
    })
})
app.post("/adduser",(req,res)=>{
    try{
    let name=req.body.name;
    let username=req.body.username;
    console.log(name,username)
    let newUser={
        id:Math.floor(Math.random()*1000000),
        name:name,
        username:username,
        role:"user"
    }
let alluser=[];
let data=fs.readFileSync("./users.json","utf-8");
if(data){
     alluser=JSON.parse(data);
    
}
alluser.push(newUser);
fs.writeFileSync("./users.json",JSON.stringify(alluser))
res.json("user added")
}catch(error){
    return res.send(error)
}}
)
app.listen(9666,()=>{
    console.log("server started")
})


//PAGE OUTPUT

//http://localhost:9666/users  in that tghis is printed [
//   {
//     "id": "1",
//     "name": "PARTH",
//     "username": "parthmakhijaofficial@",
//     "role": "ADMIN"
//   },
//   {
//     "id": "2",
//     "name": "MAKHIJA",
//     "username": "makhijaofficial@",
//     "role": "USER"
//   }
// ]


//user add krna h /
