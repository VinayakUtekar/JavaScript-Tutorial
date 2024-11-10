// WJSP to read marks 0-100
// if m > 80 Grade A
// if m > 60 Grade B
// else Grade C
// && And Operator
// || OR Operator

const prompt = require("prompt-sync")();

let mrks = parseInt(prompt("Enter your marks : "));

if ((mrks<0) || (mrks>100))
	console.log("Inavlid marks");
else if (mrks>80)
	console.log("Grade A");
else if (mrks>60)
	console.log("Grade B");
else
	console.log("Grade C");