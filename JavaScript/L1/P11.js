//WJSP to read the age and the weight of the user
//and if age is min 25 and weight is min 50
//yes person can donate blood else not

const prompt = require("prompt-sync")();

let age = parseFloat(prompt("Enter your age : "));
let weight = parseFloat(prompt("Enter your weight : "));

if((age <= 0) || (weight <= 0)){
console.log("Invalid input");
}
else if ( (age >= 25) && (weight >= 50) ) {
console.log("User can donate blood");
}
else{
console.log("User cannot donate blood");
}

