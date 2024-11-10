//WJSP to find factorial of "n" numbers
//i=5		1*2*3*4*5 = 120
//Do While LOOP

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the nmber : "));
if(n>=0){
	let  i=1, fact = 1;
	do{
		fact = fact * i;
		i = i + 1;
	}while(i<=n)
	console.log("Fact = "+ fact);
}
else{
	console.log("Invalid Input");
}

