//WJSP to add first "n" +ve integers
//i=5		1+2+3+4+5 = 15
//i=3		1+2+3 = 6
//While LOOP

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the nmber : "));
if(n>0){
	let i=1, sum=0;
	while(i<=n){
		sum = sum + i;
		i = i + 1;
	}
	console.log("Sum = "+sum);
}
else{
	console.log("Invalid Input");
}