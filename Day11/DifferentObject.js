// DIfferent type to create object

//1) using class and constructor
// used to create object -> functions (method)and variable(property) inside object

//2) Using constructor function
// used when no method or variable is to be defined in the obect/constructor

function Employee(name, id) {
  this.eName = name;
  this.eId = id;
}

let e1 = new Employee("XYZ", 50);
console.log(e1);

let e2 = new Employee("ABC", 100);
console.log(e2);

//3) Using Literal Way
let obj = {
  na: "Ninja",
  id: 1,
  skills: ["Java", "Html", "Css", "JS"],
  offers: 0,
  isMarried: false,
  demo: () => {
    console.log("Demo Function");
    return 10;
  },
  marks: {
    Computer: 35,
    Maths: 80,
    Cg: 70,
  },
  isPassed: false,
  offers: 10,
};
console.log(obj);
console.log(obj.isPassed);
console.log(obj["id"]);
console.log(obj["demo"]());
console.log(obj.marks.Cg);
console.log(obj["marks"]["Computer"]);
console.log(obj.skills[2]);

//insert new key and value
obj.designation = "Manager";
obj["Salary"] = "10000";
console.log(obj);

//update key and value
obj.isMarried = true;
console.log(obj);
obj["isMarried"] = false;
console.log(obj);

//delete key and value
delete obj.isPassed;
console.log(obj);
