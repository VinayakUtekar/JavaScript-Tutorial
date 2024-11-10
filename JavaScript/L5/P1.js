//WAJSP to read a string from the user
//and print the length of the string 1)using some readymade  2)w/o readymade
const prompt = require("prompt-sync")();

let str = prompt("Enter a string : ");

//method 1
let r1 = str.length;
console.log("R1 = ", r1)

//method 2
let r2 = 0;
for(s of str){
  r2++;
}
console.log("R2 = ", r2);