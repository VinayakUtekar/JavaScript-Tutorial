/* WAJSP to read array of names and
print them in reverse alphabetical oreder

name = ["neha", "amit", "chris", "bob"]
alphabetcial = ["Amit", "Bob", "Chris", "Neha"] 
rerse = ["neha", "Chris", "Bob", "Amit"]
using sort and reverse
*/

const prompt = require("prompt-sync")();

let names = [];
let res = prompt("Do u like to enter names y/n : ");
while(res == "y"){
	let n = prompt("Enter names : ");
	names.push(n);
	res = prompt("Do u like to enter more y/n : ");
}

console.log(names);

names.sort();
console.log(names);

names.reverse();
console.log(names);