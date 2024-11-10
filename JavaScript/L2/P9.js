//WJSP to read rating between 1-5 and print the message
//if rating 4/5 Excellent
//if rating 3/2 Good
//else ok
//Switch case

const prompt = require("prompt-sync")();
let rating = parseInt(prompt("Enter Rating : "));

switch(rating){
	
	case 5 : console.log("Excellent");	    break;
	case 4 : console.log("Excellent");	    break;
	case 3 : console.log("Good");		    break;
	case 2 : console.log("Good");		    break;
	case 1 : console.log("Ok");		    break;
	default : console.log("Invalid Input");     break;
}