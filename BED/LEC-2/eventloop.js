//IN THIS CODE WE IMPLEMENTED PROMISE
const fs=require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
        console.log("set immediate callback")
})
function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("Taask Result")
    })
}
fs.readFile("demo.txt",(data)=>{ 
    console.log("poll phase callback")
    setTimeout(()=>{
    console.log("timer2")
},0)
setImmediate(()=>{
        console.log("immd2")
})
})
console.log("end")
dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("next Tick");
})