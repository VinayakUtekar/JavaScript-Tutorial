/* WAJSP to read array of numbers
and print the lowest and the highest number
use Math Object*/

const prompt = require("prompt-sync")();

let data =[];

let res = prompt("Do u like to enter some number y/n : ");
while(res=="y"){
  let ele = parseInt(prompt("Enter the number : "));
  data.push(ele);
  res = prompt("Do u like to enter more y/n : ");
}

//...Spread operator hich spreads the elements in the array 
//...this makes the array in form of elements so that can be used by other methods and objects

let lowest = Math.min(...data);
let highest = Math.max(...data);

console.log("Lowest number in array is : " + lowest);
console.log("Highest number in array is : " + highest);