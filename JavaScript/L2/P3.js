//WSJP to read the usr name and then welcome the user
//and if fake name inform the user

const prompt = require("prompt-sync")();

let name = prompt("Enter your name : ");

if( name.match(/^[A-Za-z ]+$/)){
console.log("Welcome " + name);
console.log("Good Evening");
console.log("This is lecture 2");
}
else{
	console.log("Invalid input");
}