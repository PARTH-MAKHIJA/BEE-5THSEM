// const fs=require("fs");
// fs.readFile("../demo.txt",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
// })
// //ABOVE CODE WILL GIVE BUFFER AS UTF-8 NOT THERE , BUFFER IS TO READ BINARY DATA WE CAN COVEET IT BY .TOSTRING METHOD (or by UTF)

const fs=require("fs");
fs.readFile("../demo.txt",function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
})
fs.readFile("../demo1.txt",function(err,data){
    if(err) return console.log(err);
    console.log(data.toString()); // 2nd file will get read first bcoz it  is asynchronous so less size file will get read first
})

// const fs=require("fs");
// fs.readFile("../demo.txt","utf8",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
// })
