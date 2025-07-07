const fs=require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
        console.log("set immediate callback")
})
fs.readFile("demo.txt",(data)=>{ //this will print after set immediate bcoz we dont know how big file is but in my case file is to small thats why poll phase prints after timer if file was big it will run after set immediate
    console.log("poll phase callback")
    setTimeout(()=>{
    console.log("timer2")
},0)
setImmediate(()=>{
        console.log("immd2")
})
})
console.log("end")
//ON commenting start nd end set IMMEDIATE RUNS FIRST THERE IS NO REASON OF IT IN DOCUMENT THERE IS IF WE USE CALLBACK DIRECTLY WITHOUT CONSOLE OR MAIN CONSOLES THERE WILL BE NO PRE DETERMINED ORDER FOR CALLBACK OUTPUT IT WILL VARY / DEPEND ON SYSTEM PERFORMATION 