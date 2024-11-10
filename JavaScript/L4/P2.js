//WJSP menu driven program to impelemet DS stack / LIFO

const prompt = require("prompt-sync")();

let stack = [];
while(true){
  let op = parseInt(prompt("1.Push, 2.Pop, 3.Show & 4.Exit : "));
  if(op == 1){
	let ele = parseInt(prompt("Enter the element : "));
	stack.push(ele);
	console.log(ele + " Pushed In Stack");
  }
  else if(op == 2){
	if(stack.length==0){
	  console.log("Stack Is Empty");
	}
	else{
	  let ele = stack.pop();
	  console.log(ele + " Popped OutOf Stack");
	}
  }
  else if(op == 3){
	console.log(stack);
  }
  else if(op == 4){
	break;
  }
  else{
	console.log("Sorry i don't understand");
  }
}