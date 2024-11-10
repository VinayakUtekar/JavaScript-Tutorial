//WAJSP to find area and circumference of circle
//Radius should be read from user
//** operator is power (raise to square/cube)

const prompt = require("prompt-sync")();
const pi = 3.14 ;

let radius = parseFloat(prompt("Enter Radius  : "));
let area = pi * radius * radius;
let area1 = pi * radius ** 2;
let circum = 2 * pi * radius;

console.log("Area = " + area.toFixed(2));
console.log("Area = " + area1.toFixed(2));
console.log("Circumference = " + circum.toFixed(2));
