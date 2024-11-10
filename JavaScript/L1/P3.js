//WJSP to ask the user  for the name and then welcome 
//cmd L1>npm install prompt-sync

const ps = require("prompt-sync");
const prompt = ps();

let name = prompt("Enter user name : ");
console.log("Welcome " + name);