// Javascript Output Methods
/*
 1) console.log(); -> print the data in the console window
     object    funtction

 2) documnent.write(); OR document.writeln() -> print the data in website/webpage/webapp
    object     method

 3) Window.alert() OR alert(); -> Pop-up Method used to display the alert message

 4) Window.confirm(); -> Pop-up Method and ask for users confirmation

 5) Window.prompt(); -> Pop-up Method that ask user for input
*/

console.log("Javascript"); //Returntype void --> all datatypes accepted
 

document.write("Web Technologies"); //Returntype void --> Only String accepted
document.writeln("React JS") //gives space between two output string
document.write("Express JS");

window.alert("Alert Pop-Up"); //pop-up All data type accpeted

let res = window.confirm("Are your confirm"); //will return boolean
console.log(res);
if(res) console.log("Page is loading");
else console.log("error");

let x = prompt("Enter Your Age"); //will return string or null-> if user accepts-string,if cancel null
console.log(x);
console.log(typeof x);
let y = parseInt(x);
console.log(y);
console.log(typeof y);