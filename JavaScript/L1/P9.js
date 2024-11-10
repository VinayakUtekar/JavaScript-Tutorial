//WJSP to find the max of 3 numbers

const prompt = require("prompt-sync")();
let n1 = parseFloat(prompt("Enter first  number : "));
let n2 = parseFloat(prompt("Enter second number : "));
let n3 = parseFloat(prompt("Enter third  number : "));

// method 1
if ((n1 >= n2) && (n1 >= n3)){
	console.log(n1 + " is MAXIMUM");
}
else if ((n1 <= n1) && (n2 >= n3)){
	console.log(n2 + " is MAXIMUM");
}
else{
	console.log(n3 + " is MAXIMUM");
}

//method 2
console.log("max = " + Math.max(n1, n2, n3));