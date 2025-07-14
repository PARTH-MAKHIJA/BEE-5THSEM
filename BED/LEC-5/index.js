let users=[
    {
        id:1,
        name:"PARTH",
        Age:20
    },
     {
        id:2,
        name:"SMARTH",
        Age:12
    },
 ]
// function isAllowed(id){
//     //id ka user dhundho
//     //fir uska  age check kro > 18
//     let user=users.filter((R)=>R.id==id)[0];
//     //return user;
//     console.log(user);
//     if(!user){
//          return console.log("error");
//      }
//      if(user.Age>=18){
//          return console.log("CAN RAISE VOTE");
//      }
//      else{
//          return console.log("Not ELLIGIBLE TO VOTE");
//      }

// }
// isAllowed(2);
// console.log("start");
// console.log("sum 2 number");
//in above we made code synchrobnos so that why line 32 31 not prined first

function isAllowed(id){
   return new Promise((resolve,reject)=>{
        let user=users.filter((R)=>R.id==id)[0];
     //return user;
     if(!user){
          return reject("error");
      }
      if(user.Age>=18){
          return reject("CAN RAISE VOTE");
      }
      else{
          return resolve("Not ELLIGIBLE TO VOTE");
    }
})
}

isAllowed(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
console.log("start");
console.log("sum 2 number");
//in above we made code asynchrobnos so that why line 57 58 got prined first