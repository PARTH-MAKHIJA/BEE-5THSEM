//ASSIGNMENT PART-1 WRITE DATA IN FILE USING FS MODULE BUT INPUT DATA SHOULD BE TAKEN USING TERMINAL.(GOOGLE ND LEARN FROM STACK OVERFLOW) PROCESS.argv is an array jisse input aate from terMinal store hote h 
const fs = require("fs");
process.argv.shift();
process.argv.shift();
// let input = process.argv.toString().replace(" ");
let input = process.argv.toString().replace(/,/g, " ");
fs.writeFile("assign.txt", input, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File saved");
    }
});