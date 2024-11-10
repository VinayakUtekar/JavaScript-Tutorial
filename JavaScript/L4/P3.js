//WJSP menu driven program to impelemet DS Queue / FIFO

const prompt = require("prompt-sync")();

let queue = [];
while(true){
  let op = parseInt(prompt("1.Enqueue, 2.Dequeue, 3.Show & 4.Exit : "));
  if(op == 1){
	let ele = parseInt(prompt("Enter the element : "));
	queue.push(ele);
	console.log(ele + " Enqueued");
  }
  else if(op == 2){
	if(queue.length==0){
	  console.log("Queue Is Empty");
	}
	else{
	  let ele = queue.shift();
	  console.log(ele + " Dequeued");
	}
  }
  else if(op == 3){
	console.log(queue);
  }
  else if(op == 4){
	break;
  }
  else{
	console.log("Sorry i don't understand");
  }
}