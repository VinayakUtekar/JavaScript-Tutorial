// class and constructer
// class is stored in the script scope
// Local scope will be made for constructor

let a = 10;
var b = 20;

class Employee {
  //inside the class if we are going to define any
  //varaible or property we are not supposed to pass var,let and const keywords
  //if we are going to pass any function then we are not suppose to use the function keyword
  static name = "Sachin";
  constructor(name, id) {
    this.eName = name;
    this.eId = id;
  }
  static demo(a, b) {
    //we can use var,let,const only inside the function inside a class
    var x = 10;
    console.log(a, b);
    console.log("Hello World");
    return x;
  }
  f1() {
    console.log("non-static method");
    console.log(this.Id);
  }
}

var e1 = new Employee("Rohit", 45); //constuctor call
console.log(e1);
console.log(e1.eName);
console.log(e1.eId);

var e2 = new Employee("Virat", 18);
console.log(e2);
console.log(e2.eName);
console.log(e2.eId);

var e3 = new Employee("Jaspreet", 93);
console.log(e3);
console.log(e3.eName);
console.log(e3.eId);

console.log(Employee.demo(100, 200));
console.log(Employee.name);
