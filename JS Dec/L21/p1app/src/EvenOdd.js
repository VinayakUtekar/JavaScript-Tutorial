import {useState} from "react";
import axios from "axios";

function EvenOdd()
{
  const[num, setNum] = useState("");
  const[ans, setAns] = useState("");
  
  const hNum = (event) => {setNum(event.target.value)}
  
  const find = (event) => {
    event.preventDefault();
    let urladd = "http://localhost:7000/find";
    axios.get(urladd, {params:{number:num}})
    .then(res => setAns(res.data))
    .catch(err => console.log("issue = " + err))
  }

  return(
   <>
     <center>
	<h1>Even Odd App</h1>
	<form onSubmit={find}>
	  <input type="number" placeholder="Enter an Integer" onChange={hNum}/>
	  <br/><br/>
	  <input type="submit" value="Find Even/Odd"/>
	</form>
	<h1>{ans}</h1>
     </center>
   </>
  );
}

export default EvenOdd;