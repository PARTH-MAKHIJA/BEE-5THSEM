const file1= require("./file1");
console.log(file1);
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
module.exports={
   sum,
    sub
}