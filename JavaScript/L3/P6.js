//WJSP to add first "n" +ve integers
//i=5		1+2+3+4+5 = 15
//i=3		1+2+3 = 6
//FOR LOOP

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the nmber : "));
if(n>0){
	let  sum=0;
	for(let i=1; i<=n; i++){
		sum = sum + i;
	}
	console.log("Sum = "+sum);
}
else{
	console.log("Invalid Input");
}

