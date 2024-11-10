//WAJSP to find su and average integer

const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Enter First Number  : "));
let n2 = parseFloat(prompt("Enter Second Number : "));
let n3 = parseFloat(prompt("Enter Third Number  : "));

let sum = n1 + n2 + n3;
let avg = sum / 3;

console.log("Sum = " + sum.toFixed(2));
console.log("Aveage = " + avg.toFixed(3));
