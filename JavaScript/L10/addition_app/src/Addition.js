import{useState, useRef}from "react";

function Addition()
{
  const[num1,setNum1] = useState("");
  const[num2,setNum2] = useState("");
  const[ans,setAns] = useState("");

  const find = (event) =>{
    event.preventDefault();
    if(num1==""){
      alert("First Number Is Empty");
      rNum1.current.focus();
      setAns("");
      return;
    }
    if(num2==""){
      alert("Second Number Is Empty");
      rNum2.current.focus();
      setAns("");
      return;
    }
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let res = n1 + n2;
    let msg = "Result = " + res;
    setAns(msg);
  }
  const hNum1 = (event) =>{setNum1(event.target.value);}
  const hNum2 = (event) =>{setNum2(event.target.value);}
  const rNum1 = useRef();
  const rNum2 = useRef();
  return(
    <>
      <center>
        <h1> Addition Application </h1>
        <form onSubmit={find}>
          <input type="number" step="any" placeholder="Enter First Number" onChange={hNum1} ref={rNum1} value={num1}/>
          <br/><br/>
          <input type="number" step="any" placeholder="Enter Second Number" onChange={hNum2} ref={rNum2} value={num2}/>
          <br/><br/>
          <input type="submit" value="Find Addition"/>
        </form>
        <h2>{ans}</h2>
      </center>
    </>
  );  


}

export {Addition};
