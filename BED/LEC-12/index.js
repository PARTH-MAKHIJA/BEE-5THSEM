//METHOD-1(BY ME)
// const generate=document.querySelector(".btn");
// const div=document.querySelector(".mydiv");
// const colors = [
//   "#FF0000", // Red
//   "#0000FF", // Blue
//   "#008000", // Green
//   "#FFFF00", // Yellow
//   "#800080", // Purple
//   "#FFA500", // Orange
//   "#FFC0CB", // Pink
//   "#008080", // Teal
//   "#A52A2A", // Brown
//   "#808080"  // Gray
// ];
// function randomcolor(){
//     const randomIndex=Math.floor(Math.random()*colors.length);
//     return randomC=colors[randomIndex];
// }
// generate.addEventListener("click",function(){
//     div.style.backgroundColor=randomcolor();
//  })

//METHOD-2(BY SIR)
let box=document.querySelector(".box");
let genbtn=document.querySelector(".btn");
let Stopbtn=document.querySelector(".Stop");

let colors = [
  "#FF0000",
  "#0000FF", 
  "#008000", 
  "#FFFF00", 
  "#800080", 
  "#FFA500", 
  "#FFC0CB", 
  "#008080", 
  "#A52A2A", 
  "#808080"  
];
let intervalId=null;
function randomcolor(){
    let index=Math.floor(Math.random()*10);
    let color=colors[index];
    return color
}
genbtn.addEventListener("click",function(){
    
//     let color=randomcolor()
//     box.style.backgroundColor=randomcolor()
intervalId=setInterval(()=>{
        let color=randomcolor()
    box.style.backgroundColor=randomcolor();
},500)
 })

 Stopbtn.addEventListener("click",function(){
    if(intervalId){
        clearInterval(intervalId)
    }
})