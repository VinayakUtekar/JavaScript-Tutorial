const prompt = require("prompt-sync")();

let str = prompt("Enter a string : ");

//method 1
let s1 = str.split("");
let s2 = s1.sort();
let nstr = s2.join("");

//method 2
let nnstr = str.split("").sort().join("");

console.log(str);
console.log(nstr);
console.log(nnstr);