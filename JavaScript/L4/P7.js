/*WJSP to read a sentence 
kamal classes thane and borivali
output
kamal-classes-thane-and-borivali
*/

const prompt = require("prompt-sync")();

let stmt = "kamal classes thane and borivali";

//string converted to array
let data = stmt.split(" ");

//array converted to string
let newstmt = data.join("-");

console.log(stmt);
console.log(newstmt);

let nstmt = stmt.split(" ").join(-);
console.log(nstmt);