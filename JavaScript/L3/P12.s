/*WJSP to read the marks of the students
and count the number of students who got
more than 8, more than 5 and remaning*/

const prompt = require("prompt-sync")();

let marks = [];
let res = prompt("Do u want to enter marks y/n : ");
while(res=="y"){
	let m = parseInt(prompt("Enter marks  : "));
	marks.push(m);
	res = prompt("Do u want to enter more y/n : "); 
}

let c1=0, c2=0, c3=0;
for(let m in marks){
	if(m>8){
		c1++;
	}
	else if (m>5){
		c2++;
	}
	else{
		c3++;
	}
}

console.log("No. of Students with more than 8 marks : ");
console.log("No. of Students with more than 5 marks : ");
console.log("No. of Remaninh Students  : ");