//WJSP to find avg of student in the given surprise test
const prompt = require("prompt-sync")();

let marks = [];
let res = prompt("Do u want to enter marks y/n : ");
while(res=="y"){
	let m = parseInt(prompt("Enter marks  : "));
	marks.push(m);
	res = prompt("Do u want to enter more y/n : "); 
}

let sum = 0 ;
for (let m of marks){
	sum = sum + m;
}

let avg = sum / marks.length;
console.log("Avg = " + avg.toFixed(2));