import {useState, useEffect} from "react";

function Counter()
{
  const [text, setText] = useState("");
  const [ans, setAns] = useState("");

  const hText = (event)=>{setText(event.target.value); }
  const count = () => {
     let cc = text.length;
     let wc = text.split(" ").length;
     if (cc == 0)
 	wc = 0;
     let msg = "Character Count = " + cc + "       Word Count = " + wc;
     setAns(msg);
  }
  useEffect( () => {count()}, [text])
  return(
    <>
      <center>
	<h1> Word Character Counter </h1>
	<form>
	  <textarea placeholder="Enter Some Text" rows={5} cols={30} onChange={hText}></textarea>
	</form>
	<h2>{ans}</h2>
      </center>
    </>
  );
}

export default Counter;