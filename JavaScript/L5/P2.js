/* Wjsp to generate the following pattern
*
* *
* * *
* * * *
where number of lines would be given the user*/

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number : "));
if(num>0){
  let p = "* ";
  for(let i=1; i<=num; i++){
     console.log(p.repeat(i));
  }
}
else{
  console.log("Invlid Input");
}