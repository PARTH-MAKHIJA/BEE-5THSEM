// let p= new Promise((resolve,reject)=>{

// })
// console.log(p);//pending state

// let p= new Promise((resolve,reject)=>{
//     resolve("PARTH")
// })
// console.log(p);//STATE IS FULFILLED


// let p= new Promise((resolve,reject)=>{
//     resolve("PARTH")
// })

// // console.log(p);
// p.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
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
function buyProduct(product_Name){
return new Promise((resolve,reject)=>{
    let isProduct=product.filter((p)=>p.name==product_Name)[0];
    if(!isProduct){
        reject("product not available");
    }else{
        resolve(isProduct.amount)
    }
})
}
let availableamount=200000;
function amountdeducted(amount){
return new Promise((resolve,reject)=>{
    if(amount>availableamount){
        reject("inefficient balance");
    }else{
        availableamount-=amount;
        resolve(availableamount)}
    }
)}
buyProduct("APPLE").then((amount)=>amountdeducted(amount))
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})