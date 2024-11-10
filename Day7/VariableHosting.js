"use strict";
// Variable Hosting
// console.log(b); //!undefined
// console.log(a); //throws error

let a = 50;
var b = 90;
let c = 68;

console.log(a,b,c);

demo();
function demo(){
    let z = 80;
    const y = 30;
    var x = 100;
    console.log("Demo Function");
    return 200;
}

// p = 8000; //!Uncaght ReferenceError: p is not defined
//console.log(p);

function f1(n, m, m){  //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    console.log(n+m); 
}
f1(10,20,30);