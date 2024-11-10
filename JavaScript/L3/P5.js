//WJSP to add first "n" +ve integers
//i=5		1+2+3+4+5 = 15
//i=3		1+2+3 = 6
//DO WHILE LOOP

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the nmber : "));
if(n>0){
	let i=1, sum=0;
	do{
		sum = sum + i;
		i = i + 1;
	}while(i<=n);
	console.log("Sum = "+sum);
}
else{
	console.log("Invalid Input");
}