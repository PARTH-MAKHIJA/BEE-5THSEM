// const fs=require("fs");
// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     console.log(data);
// })

//below we are just consoleing 1st user as output
const fs=require("fs");
const {read}=require("../IOoperation/util")
// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     //console.log(data[0]); //WRONG AS JSON MADE OBJECTS INTO STRING SO AS PER INDEX IT WILL JUST PRINT [ 
//     let user=JSON.parse(data)
//  console.log(user[0]); //this will print the required thing 
//  console.log(user[0].name); 
// })
async function readFile(filepath){
    let data=await read(filepath)
    console.log(data)
}
readFile("../users.txt")