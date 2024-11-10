import { useState, useRef, useEffect } from "react";
import { ref, set} from "firebase/database";
import db from "./FbConfig";

function SsApp()
{
  const rName = useRef();

  const[name, setName] = useState("");
  const[company, setCompany] = useState("");
  const[pkg, setPkg] = useState("");
  const[ans, setAns] = useState("");

  const hName = (event) => {setName(event.target.value);}
  const hCompany = (event) => {setCompany(event.target.value);}
  const hPkg = (event) => {setPkg(event.target.vaue);}

  const save = (event) => {
    event.preventDefault();
    let data = {name, company, pkg};
    let n = name + "--" + new Date().toString();
    let r = ref(db,"student/" + n);
    set(r, data);
    setAns("Thank You");
    setName("");
    setCompany("");
    setPkg("");
    rName.current.focus();
  } 

  useEffect( ()=>{ rName.current.focus();},[])

  return(
   <>
     <center>
	<h1> Success Story App </h1>
	<form onSubmit={save}>
	  <input type="text" placeholder="Enter Name" onChange={hName} value={name} ref={rName}/>
	  <br/><br/>
	  <input type="text" placeholder="Enter Company" onChange={hCompany} value={company}/>
	  <br/><br/>
	  <input type="number" step="any" placeholder="Enter Package" onChange={hPkg} value={pkg}/>
	  <br/><br/>
	  <input type="submit"/>
	  <br/><br/>
	</form>
	<h1>{ans}</h1>
     </center>
   </>
  );
}

export default SsApp;
