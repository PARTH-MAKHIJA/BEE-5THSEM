const express = require('express');
const app = express()

app.get('/', (req, res) => {
  //res.send('Hello World')
  //res.send("<h1>OK</h1>")
  //res.sendFile(__dirname+"/index.html")//dirname is for absolute path 
  //res.json({
    //name:"PARTH",
    //AGE:24
  //})
 // res.end("hi")
})
//path-variable
//1.query parameter
app.get("/watch",(req,res)=>{
    //console.log(req.query.v);//http://localhost:4444/watch?v=PARTH
    let videoID=req.query.v;
    let nID=req.query.n;//http://localhost:4444/watch?v=PARTH&n=MAKHIJA FOR MORE THAN 1 KEY VALUE PAIRS
    console.log(videoID,nID);
    res.send("id got it"+" "+videoID+" "+nID)//http://localhost:4444/watch? this is when we tye it with .v that is without sending queryin key value airs 
})

//2.PARAMS   http://localhost:4444/watch/bdhfuysdhf
app.get("/watch/:v",(req,res)=>{//jis format mai hmne .get krra h agar uss format mai param input naaho it will not give anything like: http://localhost:4444/watch/bdhfuysdhf/ll  / is for next type in param it will give Cannot GET /watch/bdhfuysdhf/ll
  console.log(req.params.v)
  res.send("got it !!!")
})
app.listen(4444,function(){
    console.log("server started")
});