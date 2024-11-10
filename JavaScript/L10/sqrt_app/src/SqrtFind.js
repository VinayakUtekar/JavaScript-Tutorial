import{useState, useRef} from "react";


function SqrtFind()
{
  const[num, setNum] = useState("");
  const[ans, setAns] = useState("");
  const rNum = useRef("");

  const hNum = (event) =>{setNum(event.target.value);}

  const find = (event) =>{
    event.preventDefault();
    if(num==""){
      alert("Empty Input NOt Allowed");
      rNum.current.focus();
      setAns();
      return;
    }
    let n = parseFloat(num);
    if(num<0){
      alert("Number Cannot be Negative");
      setNum("");
      rNum.current.focus();
      setAns();
      return;
    }
    let res = n ** 0.5;
    let msg = "Square Root = " + res;
    setAns(msg);
  }
  return(
    <>
      <center>
        <h1> Square Root Finder</h1>
        <form onSubmit={find}>
          <input type="number" step="any" placeholder="Enter Number" onChange={hNum} ref={rNum} value={num}/>
          <br/><br/>
          <input type="submit" value="Find Square Root"/>
        </form>
        <h2>{ans}</h2>
      </center>
    </>
  );


}
export {SqrtFind};
