/* Non primitive datatype
   With array we can store multiple value/data
   Array size/length is not fixed
   it is index data structure and index positioning starts from 0
   var a = [a, true, 100n, null, undefined, [100,200,300], NAN]
            0,  1,   2,     3,      4,          5,          6
    Length defines totalnumber of vales are present
    length = last index+1 -> 6+1 = 7 

    Types of array -> 
    1 homogenours -> each and every element in array is of same datatype
    2 hetrogenour -> Array ith element of multiple datatype
*/

var arr = [
  10,
  false,
  [20, 30],
  100n,
  null,
  undefined,
  () => {
    console.log("Arrow Function");
  },
];

//Access or print Array
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 2]);
console.log(arr[2]); //Display complete array
console.log(arr[2][1]); //display internal emelent of array
console.log(arr[6]());

//Add in array
arr[7] = 1000;
arr[12] = true;
console.log(arr);
console.log(arr[9]); //if elemnt not assigned it will display default i.e undefined
console.log(arr[200]);

//Update in array
arr[0] = 100000;
console.log(arr);

//delete from array
delete arr[3]; //this will delete the value but index remain same and length remain sames
console.log(arr); //it represents the value as undefined

// How many ways to create arrays
//1 Literal Way
var ar = [10, 20, 30, 40, 50, 60]; //homogenous array
const a = [false, 1n, null, () => 10, { name: "sachin" }, [80, 90]]; //hetrogeneous array

//2 Using Array constructor
//we have inbuilt Array class that contains inbuilt Array constructor
let a1 = new Array(10, 20, 30, 40, 50); //Constructor calling statement
console.log(a1);

//3 usig array.of()
let a2 = Array.of("str", true, false, null); //static method present inside array class
console.log(a2);

//difference in 2 & 3
/* if we pass single number element in both the method....
   Array() will consider it as the length of the array
   but in Array.of() it will consider it as a element of the array
*/
