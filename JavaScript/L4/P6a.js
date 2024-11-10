/*WAJSP to read user name and password
if username is kamal and password is classes
then o/p should be success else failure*/

const prompt = require("prompt-sync")();

let username = prompt("Enter username : ");
let password = prompt.hide("Enter Password : ");

if((username=="kamal")&&(password=="classes")){
	console.log("Success");
}
else{
	console.log("Failure");
}