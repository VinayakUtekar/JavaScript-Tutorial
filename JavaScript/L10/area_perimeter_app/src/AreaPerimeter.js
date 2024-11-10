import { useState , useRef}from"react";

function AreaPerimeter() 
{
  const[len, setLen] = useState("");
  const[brdth, setBrdth] = useState("");
  const[ans, setAns] = useState("");

  const rLen = useRef("");
  const rBrdth = useRef("");

  const hLen = (event) =>{setLen(event.target.value);}
  const hBrdth = (event) =>{setBrdth(event.target.value);}

  const find = (event) =>{event.preventDefault();
      if((len == "") || (brdth == "")){
        alert("Empty Input");
        rLen.current.focus();
	setAns("");
        return;
      }
      let l = parseInt(len);
      let b = parseInt(brdth);
      let r1 = l * b;
      let r2 = 2 * (l + b);
      setAns("Area = "+r1  +"\n         Perimeter = " + r2);
  }
  return(
	 <>
	   <center>
	     <h1>Area Perimeter App</h1>
	     <form onSubmit = {find}>
	       <input type="number" placeholder="Enter Length" onChange={hLen} ref={rLen}/>
	       <br/><br/>
	       <input type="number" placeholder="Enter Breadth" onChange={hBrdth} ref={rBrdth}/>
	       <br/><br/>
	       <input type = "submit" value="Find Even/Odd"/>
	     </form>
	     <h2>{ ans }</h2>
	   </center>
	 </>
	);
}
export default AreaPerimeter;
