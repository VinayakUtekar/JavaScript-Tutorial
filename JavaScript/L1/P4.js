//WAJSP to add two integer
const ps = require("prompt-sync");
const prompt = ps();

let s1 =prompt("Enter First Integer  : ");
let n1 = parseInt(s1);
let s2 = prompt("Enter Second Integer : ");
let n2 = parseInt(s2);
let res = n1 + n2;
console.log("Res = " + res);
