let v = 100;
//console.log(v);
function f2() {
    let a = 10;
    console.log(v);
    console.log(a);
    let str = "Javascript";
    var b = 90;
    const c = 80;
    //return str;
    //retunr; //implicit return
}

var res = f2();
console.log(res);

//Scope in JS: 1 global, 2 Script, 3 Local/Function, 4 Block

{
    let p = "js";
    const q = "react";
    var r = "node";
}