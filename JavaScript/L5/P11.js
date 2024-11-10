//ncr ==> combinations

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter value of n : "));
let r = parseInt(prompt("Enter value of r : "));

function fact(num){
	let f = 1;
	for(let i=1; i<=num;i++)
		f=f*i;
	return f;
}
let ans = fact(n) / (fact(r)*fact(n-r));
console.log("Ans = "+ans);
