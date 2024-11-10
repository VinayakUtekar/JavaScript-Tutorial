//WJSP to red two integers
//and exchange their values

const prompt = require("prompt-sync")();
let n1 = parseInt(prompt("Enter First  Integer : "));
let n2 = parseInt(prompt("Enter Second Integer : "));

console.log("Number 1 : " + n1 + "      " + "Number 2 : " + n2);

//method 1 
let n3 = n1;
n1 = n2;
n2 = n3;
console.log("Number 1 : " + n1 + "      " + "Number 2 : " + n2);

//method 2
[n1 , n2] = [n2 , n1];
console.log("Number 1 : " + n1 + "      " + "Number 2 : " + n2)