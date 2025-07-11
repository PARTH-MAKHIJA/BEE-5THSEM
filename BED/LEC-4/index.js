// function buyProduct(product_Name,cb){
//     //do some asynchronous operation
//     setTimeout(()=>{
//         //all operation completed
//         console.log("ALL THE I/O OPERATION ARE DONE AND ORDER DETAILS ARE SAVED")
//         cb();
//     },0)
// }
// buyProduct("IPHONE-15",function(){
//     console.log("product is purchased")
// })


let product=[{
    name:"samsung",
    amount:70000,
    quantity:10
},
{
    name:"APPLE",
    amount:100000,
    quantity:0
}]
function buyProduct(product_Name,cb){
    //do some asynchronous operation
    let isProduct= product.filter((p)=>p.name==product_Name)[0];
    if(!isProduct){
    // console.log(isProduct)
     return cb("product is not available",null)
}
cb(null,isProduct.amount);
}
let availableamount=800000
function deductbankamount(amount,cb){
    //do some bank transactions
    if(amount>availableamount){
        return cb("inefficient balance",null)
    }else{
        availableamount-=amount;
        console.log(availableamount)
    cb (null,"amountdeducted");
    cb (null,"amountdeducted");
///due  to these sch thing callback hell occur so we need to resolve it by promises
}
}
// buyProduct("APPLE",function(){
//     console.log("product is purchased")
// })
buyProduct("APPLE",function(err,amount){
    if(err)return console.log(err);
    // console.log("product is purchased")
           console.log(amount);
           deductbankamount(amount,function(err,message){
            if(err)return console.log(err)
                console.log(message);
           })
})

// const fs=require("fs");
// fs.readFile("filepath","utf-8",function(err,message))