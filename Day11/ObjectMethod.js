let x = new Object();
x.name = "abc";
x.id = 120;
x.skills = "react";
console.log(x);

//!static mengthos in object
// freeze(), seal(), isFrozen(), isSealed()
// keys(), values(), entries(), assign()

let y = {
  na: "Ninja",
  id: 1,
  skills: ["Java", "Html", "Css", "JS"],
  offers: 0,
  isMarried: false,
  1: 300,
  isPassed: false,
  offers: 10,
};

/*Object.freeze();
Object.seal();
y.na = "doni";
y.percentage = 90;
delete y.skills;
console.log(y);*/

/*let r1 = Object.isFrozen();
console.log(r1);

let r1 = Object.isSealed();
console.log(r1);*/

let key = Object.keys();
console.log(key);

let val = Object.values();
console.log(val);

let e = Object.entries();
console.log(e);
