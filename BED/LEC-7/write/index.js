let users=[
    {
        name:"Nitesh",
        age:"24",
        address:"DELHI"
    },
    {
        name:"PARTH",
        age:"20",
        address:"HARYANA"
    },
]
// const fs=require("fs");
// // fs.writeFile("../users.txt",users.toString(),function(err){//will give text in file as [object Object],[object Object]
// fs.writeFile("../users.txt",JSON.stringify(users),function(err){//JSON. IS AN OBJECT SO IT WILL PEINT [{"name":"Nitesh","age":"24","address":"DELHI"},{"name":"PARTH","age":"20","address":"HARYANA"}] as it will convert both key nd value of object in string.
//     if(err) return console.log(err);
//         console.log("users written!!");
// })


let use=[
    {
        name:"HI",
        age:"2",
        address:"D"
    },
    {
        name:"HELLO",
        age:"4",
        address:"H"
    },
]
// fs.writeFile("../users1.txt",JSON.stringify(use),function(err){
//     if(err) return console.log(err);
//         console.log("users written!!");
// })

const {write}=require("../IOoperation/util")
async function writeFile(filepath,data){
    let p=await write(filepath,data)
    console.log(p)
}
writeFile("../users.txt",users)


