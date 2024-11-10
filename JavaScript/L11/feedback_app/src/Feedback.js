import {useState, useRef, useEffect} from "react";

function Feedback() {

  const [name,setName] = useState("");
  const [feedback,setFeedback] = useState("Excellent");
  const rName = useRef();

  const hName = (event) => {
      setName(event.target.value);
  }

  const hFeedback = (event) => {
      setFeedback(event.target.value);
  }

  const show = (event) => {
    if ((name == "") || (!name.match(/^[A-Za-z ]+$/)) || (name.trim().length==0))
    {
    	alert("Invalid Name");
	setName=("");
	rName.current.focus();
	return;
    }
    let msg = name + " " + feedback ;
    alert(msg);
    alert("Thank You");
  }
 
  useEffect(() => { rName.current.focus();}, [])
  return (
    <>
      <center>
	<h1> Feedback Please</h1>
	<form onSubmit={show} >
	  <input type="text" placeholder="Enter Your Name" onChange={hName} ref={rName} value={name}/>
	  <br/><br/>
	  <input type="radio" name="f" value="excellent" defaultChecked={true} onChange={hFeedback} />Excellent
	  <input type="radio" name="f" value="Superb" onChange={hFeedback} />Superb
	  <input type="radio" name="f" value="good" onChange={hFeedback} />Good
	  <br/><br/>
	  <input type="submit" value="Submit" />
	</form>
      </center>
    </>
  );
}

export default Feedback;
