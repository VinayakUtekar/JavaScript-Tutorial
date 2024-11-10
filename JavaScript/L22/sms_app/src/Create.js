import { useState } from "react";
import axios from "axios";

function Create() {
  const[rno, setRno] = useState("");
  const[name, setName] = useState("");
  const[msg, setMsg] = useState("");

  const hRno = (event) => {setRno(event.target.value);}
  const hName = (event) => {setName(event.target.value);}

  const save = (event) =>{
     event.preventDefault();
     let data = {rno,name};
     let urladd = "http://localhost:9000/create";
     axios.post(urladd,data)
     .then(res =>{
	if(res.data.affectedRows == 1)
	{
	  setMsg("Record Saved");
	  setRno("");
	  setName("");
	}
	else
	{
	  setMsg("Record Already Exists");
	  setRno("");
	  setName("");
	}
     })
     .catch(err => {
	if(err.code == "ERR_NETWORK")
	{
	   setMsg("Server Down Pls Try Later");
	   setRno("");
	   setName("");
	}
     })
  }
  return (
    <>
      <center>
	<h1> Create page </h1>
        <form onSubmit={save}>
	  <input type="number" placeholder="Enter Roll No" onChange={hRno} value={rno}/>
	  <br/><br/>
	  <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
	  <br/><br/>
	  <input type="submit"/>
        </form>
	<h2>{msg}</h2>
      </center>
    </>
  );
}

export default Create;
