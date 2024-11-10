/*WAJSP to generate the following pattern
$ $ $ $ $
$ $ $ $
$ $ $
$ $
$
*/

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number : "));
if(num>0){
  let p = "$\t";
  for(let i=num; i>=1; i--){
    console.log(p.repeat(i));
  }
}
else{
  console.log("Invalid Input");
}