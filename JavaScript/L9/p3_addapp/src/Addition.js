import { useState }from"react";
function Addition()
{
  const[num1, setNum1] = useState("");
  const[num2, setNum2] = useState("");
  const[ans, setAns] = useState("");
  const hNum1 = (event) =>{
    setNum1(event.target.value);
  }
  const hNum2 = (event) =>{
    setNum2(event.target.value);
  }
  const find = (event) =>{
      event.preventDefault();
      let n1 = parseFloat(num1);
      let n2 = parseFloat(num2);
      let res = n1 + n2;
      setAns("Res = "+res.toFixed(2));
  }
  return(
	 <>
	   <center>
	     <h1>Addition App</h1>
	     <form onSubmit = {find}>
	       <input type="number" step="any" placeholder="Enter First Number" onChange={hNum1}/>
	       <br/><br/>
	       <input type="number" step="any" placeholder="Enter First Number" onChange={hNum2}/>
	       <br/><br/>
	       <input type = "submit" value="Add"/>
	     </form>
	     <h2>{ ans }</h2>
	   </center>
	 </>
	);
}
export default Addition;