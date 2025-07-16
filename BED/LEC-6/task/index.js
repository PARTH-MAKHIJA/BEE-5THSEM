// // //TASK IS TO READ DATA OF DEMO ND DEMO1 FILE ND GET IT PRINT IN A NEW FILE
// const fs=require("fs");
// let result1=null;
// let result2=null;
// fs.readFile("../demo.txt","utf-8",function(err,data1){
//     if(err) return console.log(err);
//     console.log(data1);
//     result1=data1
// })
// fs.readFile("../demo1.txt","utf-8",function(err,data2){
//     if(err) return console.log(err);
//     console.log(data2); 
//     result2=data2
// })

// const result= result1 + "/n" + result2 ;
// fs.writeFile("../result.txt",result,function(err){
//     if(err) return console.log(err);
// })
// //above is poor way wrong way dont do this

//ANOTHER WAY that is correct way is below
const fs=require("fs");
fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    console.log(data1);

    fs.readFile("../demo1.txt","utf-8",function(err,data2){
    if(err) return console.log(err);
    console.log(data2); 
const result= data1 + "\n" + data2;
fs.writeFile("../result.txt",result,function(err){
    if(err) return console.log(err);
    // console.log(data);
})
})
})



//ASSIGNMENT PART-1 WRITE DATA IN FILE USING FS MODULE BUT
//  INPUT DATA SHOULD BE TAKEN USING TERMINAL.(GOOGLE ND LEAR FROM STACK OVERFLOW) PROCESS.argv is an array jisse input aate from ter,inal store hote h 