const fs=require("fs");
fs.writeFile("../demo.txt","G26 HELLO",function(err,data){
    if(err) return console.log(err);
    console.log(data);
})
fs.writeFile("../demo1.txt","G26 hi",function(err,data){
    if(err) return console.log(err);
    console.log(data);
})