import {useState, useRef, useEffect} from "react";

function Course() {

  const [name,setName] = useState("");
  const [python, setPython] = useState(false);
  const [java, setJava] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const rName = useRef();

  const hName = (event) => {
      setName(event.target.value);
  }
 
  const hPython = (event) => {
      setPython(!python);
  }

  const hJava = (event) => {
      setJava(!java);
  }

  const hJavascript = (event) => {
      setJavascript(!javascript);
  }

  const show = (event) => {
    if ((name == "") || (!name.match(/^[A-Za-z ]+$/)) || (name.trim().length==0))
    {
    	alert("Invalid Name");
	setName=("");
	rName.current.focus();
	return;
    }
    let lang = "";
    if(python) 		lang = lang + " Python ";
    if(java) 		lang = lang + " Java ";
    if(javascript) 	lang = lang + " Javascript ";
    let msg = name + " " + lang ;
    alert(msg);
    alert("Thank You");
  }
 
  useEffect(() => { rName.current.focus();}, [])
  return (
    <>
      <center>
	<h1> Course That You Know </h1>
	<form onSubmit={show} >
	  <input type="text" placeholder="Enter Your Name" onChange={hName} ref={rName} value={name}/>
	  <br/><br/>
	  <input type="radio" name="python" value="python" onChange={hPython} />Python
	  <input type="radio" name="java" value="java" onChange={hJava} />Java
	  <input type="radio" name="javascript" value="javascript" onChange={hJavascript}  />JavaScript
	  <br/><br/>
	  <input type="submit" value="Submit" />
	</form>
      </center>
    </>
  );
}

export default Course;
