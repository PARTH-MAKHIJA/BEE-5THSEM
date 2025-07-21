const fs=require("fs");
function read(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,"utf-8",function(err,data){
            if(err) return reject(err);
            let user=JSON.parse(data)
         resolve(user[0]);
    })
})
}
function write(filepath,data){
        return new Promise((resolve,reject)=>{
            fs.writeFile(filepath,JSON.stringify(data),function(err){
                 if(err) return reject(err);
                        console.log("users written!!");
            })
        })

}
module.exports.read=read;
module.exports.write=write;