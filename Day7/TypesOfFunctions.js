// ! types of functions:
/*
    1) anonymous
    2) named
    3) function with expression
    4) arrow function
    5) nested function
*/ 
// function () {} // Anonymous function

let fn = function () {       // function with expression
    let a = 10;
    console.log(this);
    return 100;
}; 

function f1(a=200, b=300){  // Named Fnction
    console.log(a);
    console.log(b);
}
f3("str", true)