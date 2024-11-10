import { useState } from "react";
import { ref, set} from "firebase/database";
import db from "./FbConfig";

function Feedback()
{
 
  const[name, setName] = useState("");
  const[feedback, setFeedback] = useState("excellent");
  const[ans, setAns] = useState("");
 
  const hName = (event) => {setName(event.target.value);}
  const hFeedback = (event) => {setFeedback(event.target.value);}

  const save = (event) =>{
    event.preventDefault();
    let data = {name, feedback};
    let n = name + "-->" + new Date().toString();
    let r = ref(db, "feedback/" + n); 
    set(r,data);
    setAns("Thank You");
    setName("");
    setFeedback("superb");
  }
  return(
    <>
       <center>
	<h1> Feedback Pls </h1>
	<form onSubmit={save}>
	  <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
	  <br/><br/>
	  <input type="radio" name="f" value="excellent" defaultChecked={true} onChange={hFeedback} checked={feedback == "excellent" ? true:false}/>Excellent
	  <input type="radio" name="f" value="good" onChange={hFeedback} checked={feedback == "good" ? true:false}/>Good
	  <input type="radio" name="f" value="superb"  onChange={hFeedback} checked={feedback == "superb" ? true:false}/>Superb
	  <br/><br/>
	  <input type="submit"/>
	</form>
	<h1>{ans}</h1>
       </center>
    </>
  );
}
export default Feedback;