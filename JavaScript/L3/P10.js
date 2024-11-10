//WJSP to read and track the Food items ordered

const prompt = require("prompt-sync")();

let food = [];
let res = prompt("Would you like to order food y/n : ");
while(res=="y"){
	let f = prompt("Enter food item : ");
	food.push(f);
	res = prompt("Would you like to order more y/n : ");
}

//Method 1
console.log(food);

//Method 2
for(let i=1; i<= food.lenght, i++){
	console.log(food[i]);
}

//Method 3
for(let f in food){
	console.log(f);
}