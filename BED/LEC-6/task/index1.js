const fs=require("fs");
fs.readFile("../demo.txt", "utf-8", function(err, data1){
    if(err) return console.log(err);
    fs.readFile("../demo1.txt", "utf-8", function(err, data2){
        if(err) return console.log(err);
        let combined=data1+ "\n"+data2;
        let actCombined=combined.replace(/\s+/g, " ")
        .trim();
        fs.writeFile("demo3.txt", actCombined, function(err, data){
            if(err) return console.log(err);
        })
    })
})