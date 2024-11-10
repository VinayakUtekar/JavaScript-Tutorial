import {useState} from "react";
import axios from "axios";

function Mot() 
{
  const [msg,setMsg] = useState("");
  const get = (event) => {
	event.preventDefault();
	let urladd = "http://api.quotable.io/random";
	axios.get(urladd)
	.then(res => setMsg(res.data.content))
	.catch(err => console.log(err))
  }
  return (
   <>
    <center>
    <div>
      <h1> Motivational Message</h1>
      <form onSubmit={get}>
         <input type="submit" value="Show Message"/>
      </form>
      <h2>{msg}</h2>
    </div>
    </center>
   </>
  );
}

export default Mot;
