//WJSP to read two integers
//and find the min of 2

const prompt = require("prompt-sync")();
let n1 = parseInt(prompt("Enter First Integer  : "));
let n2 = parseInt(prompt("Enter Second Integer : "));

//method 1 using ? :
//Conditional Operator or Turnery operator
res = n1 < n2 ? n1 : n2 ; 
console.log(res + " Is Minimum");

// method 2 uing if else
//Selection statement 
if(n1 < n2){
console.log(n1 + " Is Minimum");
}
else{
console.log(n2 + " Is Minimum");
} 

//method 3 using math
//Math is object readymade code 
console.log( Math.min(n1,n2) + " Is Minimum");