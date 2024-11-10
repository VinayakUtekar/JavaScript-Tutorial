import {useState, useRef} from "react";
import axios from "axios";

function Create()
{
  const rRno = useRef();
  const[rno, setRno] = useState("");
  const[name, setName] = useState("");
  const[marks, setMarks] = useState("");  
 
  const hRno = (event) => {setRno(event.target.value);}
  const hName = (event) => {setName(event.target.value);}
  const hMarks = (event) => {setMarks(event.target.value);}

  const save = (event) => {
    event.preventDefault();
    let urladd = "http://localhost:9000/create";
    axios.post(urladd, {rno, name,marks})
    .then(res => {
       if(res.data.insertedId)
       {
	 alert("Record Created");
	 setRno("");
	 setName("");
	 setMarks("");
	 rRno.current.focus();
       }
       else
       {
	 alert(rno + " already exists");
	 setRno("");
	 setName("");
	 setMarks("");
	 rRno.current.focus();
       }
    })
    .catch(err => console.log(err))
  }

  return(
    <>
      <center>
	<h1> Create Page </h1>
 	<form onSubmit={save}>
	  <input type="number" placeholder="Enter Rno" onChange={hRno} value={rno} ref={rRno}/>
	  <br/><br/>
	  <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
	  <br/><br/>
	  <input type="number" placeholder="Enter Marks" onChange={hMarks} value={marks}/>
	  <br/><br/>
	  <input type="submit" value="save"/>
	</form>
      </center>
    </>
  );

}

export default Create;