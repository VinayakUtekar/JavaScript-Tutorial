//"use strict";

console.log(window);
console.log(this);
console.log(window == this);

//alert("Alert PopUp")

function f1(){
    console.log(this);
}
f1();

var b = 20;
let a = 10;
const c = 30;

function f2(){
    var b = 100;
    console.log(b);
    console.log(this.b);
    console.log(window.b);
    
}
f2();