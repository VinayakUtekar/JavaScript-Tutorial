//WJSP to find factorial of "n" numbers
//i=5		1*2*3*4*5 = 120
//FOR LOOP

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the nmber : "));
if(n>=0){
	let  fact = 1;
	for(let i=1; i<=n; i++){
		fact = fact * i;
	}
	console.log("Fact = "+ fact);
}
else{
	console.log("Invalid Input");
}

