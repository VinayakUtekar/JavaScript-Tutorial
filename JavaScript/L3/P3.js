//WJSP to add to average of three numbers

const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Enter First  Integer : "));
let n2 = parseFloat(prompt("Enter Second Integer : "));
let n3 = parseFloat(prompt("Enter Third  Integer : "));
let sum = n1 + n2 + n3;
let avg = sum / 3;

avg = avg.toFixed(2);
console.log("Avg = " + avg);
console.log("Avg = " , avg);
console.log(`Avg = ${avg}`);
