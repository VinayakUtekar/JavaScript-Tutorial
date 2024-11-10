/* WJSP to read an integer and 
check if its even and odd
% 2 = 0
*/

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter Integer : "));

//method 1 ? :
res = num % 2 == 0 ? " Is Even" : " Is Odd";
console.log(num + res);

//method 2 if else
if(num%2 == 0)
	console.log(num + " Is Even");
else
		console.log(num + " Is Odd");

//method 3 switch
switch(num%2){
	case 0 : console.log(num + " Is Even");	break;
	default : console.log(num + " Is Odd");
}	