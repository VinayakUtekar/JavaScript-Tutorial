import {useState} from "react";
import axios from "axios";

function EvenOdd() 
{
  const[num, setNum] = useState("");
  const[msg, setMsg] = useState("");

  const hNum = (event) =>{setNum(event.target.value);}
 
  const find = (event) => {
       event.preventDefault();
       let urladd = "http://localhost:9000/find";
       let data = {params:{number:num}};
       axios.get(urladd,data)
       .then(res => setMsg(res.data.ans))
       .catch(err => setMsg(err))
  }
  return (
    <>
      <center>
	<h1> Even Odd App </h1>
	<form onSubmit={find}>
	   <input type="number" placeholder="Enter Integer" onChange={hNum} value={num}/>
	   <br/><br/>
	   <input type="submit" value="find"/>
	</form>
	<h2>{msg}</h2>
      </center>
    </>
  );
}

export default EvenOdd;
