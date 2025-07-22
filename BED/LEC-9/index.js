const express = require('express');
const app = express();
app.use(express.json())
const fs=require('fs')
// app.get('/', (req, res) => {
//   res.send('Hello World  HELOOOOOOOO')
// })
app.post("/pic",(req,res)=>{
    let {name,email}=req.body;
    res.json({name,email});
    // let data=[];
    // let DT={
    //     DTname:name,
    //     DTemail:email
    // }
    // data.push(DT);
    // fs.writeFile("./DATA.txt",JSON.stringify(data),(err)=>{
    //     if(err)return console.log(err);
    //     console.log("DONE")
    // })
    //console.log(req.body);
    //res.send("PARTH")
    let dataexist=[];
    fs.readFile("./DATA.txt","utf-8",(err,data)=>{
    if(err) return console.log(err);
    dataexist=JSON.parse(data);
    const daTA={
        name,
        email
    }
    dataexist.push(daTA);
    fs.writeFile("DATA.txt",JSON.stringify(dataexist),(err)=>{
        if(err) return console.log(err);
        console.log("done");
    })
})
});
app.listen(2222,function(){
    console.log("server started")
});
 
 