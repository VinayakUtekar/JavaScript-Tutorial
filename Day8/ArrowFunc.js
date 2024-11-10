// Arrow Function

//Without Parameter or with one parameter or single line function
var arr = v => console.log("Funtion arr");
arr();
var arr1 = v1 =>{
    console.log("Funtion arr1");
} 
arr1();

// With paramter or more then one line function
const ar = () => {
    console.log("Start");
    console.log("End");
    return "Arrow Function";
}

let res = ar();
console.log(res);

var f1 = b => b + 20; //returns b+20 (return statement)
console.log(f1(20));

