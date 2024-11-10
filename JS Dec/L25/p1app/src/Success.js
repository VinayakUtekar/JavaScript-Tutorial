import {useState, useRef} from "react";
import axios from "axios";

function Success() {
  const rName = useRef();
  const[name, setName] = useState("");
  const[company, setCompany] = useState("");
  const[pkg, setPkg] = useState("");

  const hName = (event) => {setName(event.target.value);}
  const hCompany = (event) => {setCompany(event.target.value);}
  const hPkg = (event) => {setPkg(event.target.value);}

  const save = (event) => {
    event.preventDefault();
    let urladd = "http://localhost:9000/create";
    axios.post(urladd,{name,company,pkg})
    .then(res => {
	console.log(res);
	if(res.data.insertedId != "")
	{
	  alert("Thank You");
	  setName("");
	  setCompany("");
	  setPkg("");
	  rName.current.focus();
	}
    })
    .catch(err =>console.log(err))
  }

  return (
    <>
      <center>
	<h1> Success Story App </h1>
	<form onSubmit={save}>
	  <input type="text" placeholder="enter name" onChange={hName} value={name} ref={rName}/>
	  <br/><br/>
	  <input type="text" placeholder="enter Company name" onChange={hCompany} value={company}/>
	  <br/><br/>
	  <input type="number" step="any" placeholder="enter Package" onChange={hPkg} value={pkg}/>
	  <br/><br/>
	  <input type="Submit"/>
	</form>
      </center>
    </>
  );
}

export default Success;
