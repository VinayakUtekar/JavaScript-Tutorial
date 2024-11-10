//ncr ==> combinations

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter value of n : "));
let r = parseInt(prompt("Enter value of r : "));

let f1 = 1;
for(let i=1; i<=n; i++)
	f1 = f1*i;
let f2 = 1;
for(let i=1; i<=r; i++)
	f2 = f2*i;

let f3 = 1;
for(let i=1; i<=(n-r); i++)
	f3 = f3*i;

let ans = f1 / (f2*f3);
console.log("Ans = "+ans);
