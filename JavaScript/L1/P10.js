//WJSP to read the age of the user
//and print if the person can vote or not

const prompt = require("prompt-sync")();

let age = parseFloat(prompt("Enter your age : "));

if(age <= 0){
console.log("Invalid age");
}
else if(age >= 18){
console.log("User can vote");
}
else{
console.log("User cannot vote");
}