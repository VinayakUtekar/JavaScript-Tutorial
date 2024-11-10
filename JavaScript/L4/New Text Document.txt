//WJSp to demo Array operations

let arr = [10,30,20];
console.log(arr);

//push==>add element at last position
arr.push(40);		console.log(arr);
arr.push(20);		console.log(arr);

//unshift ==> Add element at first position
arr.unshift(80);	console.log(arr);
arr.unshift(90);	console.log(arr);

//pop ==> Remove the element at the last position
arr.pop();		console.log(arr);

//shift ==> Remove the element at the first position
arr.shift();		console.log(arr);


let a1 = [10,20,30];
//splice (index no, no.of elements to remove,(elements to add i.e)e1,e2,...)
a1.splice(1,0,40,50);	console.log(a1);
a1.splice(2,1);		console.log(a1);
a1.splice(3,2);		console.log(a1);
a1.splice(0,2,70,50);	console.log(a1);