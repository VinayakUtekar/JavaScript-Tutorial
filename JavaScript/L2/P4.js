//WSJP to read the usr name and then welcome the user
//and if fake name inform the user
//also greet the user according to the current time

const prompt = require("prompt-sync")();

let name = prompt("Enter your name : ");
if( name.match(/^[A-Za-z ]+$/)){
	let d = new Date();
	let h = d.getHours();
	let msg = ""; 
	if(h<12)
		msg = "Good Morning";
	else if(h<16)
		msg = "Good Afternoon";
	else
		msg = "Good Evening";

	console.log("Welcome " + name);
	console.log(msg);
	console.log("This is lecture 2");
}
else{
	console.log("Invalid input");
}