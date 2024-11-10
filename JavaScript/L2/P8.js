//WJSP to read rating between 1-5 and print the message
//if rating 4/5 Excellent
//if rating 3/2 Good
//else ok

const prompt = require("prompt-sync")();
let rating = parseInt(prompt("Enter Rating : "));

if ((rating<1) || (rating>5))
	console.log("Invalid Input");
else if ((rating == 4) || (rating == 5))
	console.log("Excellent");
else if ((rating == 2) || (rating == 3))
	console.log("Good");
else
	console.log("Ok");