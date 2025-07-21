const fs=require("fs");
fs.readFile("../users.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let user1=JSON.parse(data)
 console.log(user1[0]);
fs.readFile("../users1.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let user2=JSON.parse(data)
 console.log(user2[0]);
// let result=[...user1,...user2];// ... is spread operator that is use to spread array that array ko kholna 


//BELOW IS ANOTHER METHOD USING LOOP    ND DOING PUSH
// let result=[];
// for(i=0;i<user1.length;i++){
//     result.push(user1[i]);
// }
// for(i=0;i<user2.length;i++){
//     result.push(user2[i]);
// }


//ANOTHER WAY IS USING CONCAT
let result=user1.concat(user2);


 fs.writeFile("../result.txt",JSON.stringify(result),function(err){
     if(err) return console.log(err);
         console.log("RESULT written!!");
 })
})
})


//ASSIGNMENT 1 PART 2 WE HAVE TO MADE TO DO APPLICATION ND HAVE TO ADD TO DO AFTER CREATING IN SAME FILE ND  INPUT FROM CONSOLE TERMINAL TITLE ND DESCRIPTION 