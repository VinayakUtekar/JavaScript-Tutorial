import {useState, useRef} from "react";
import {set, ref, get, child} from "firebase/database";
import db from "./FirebaseConfig";

function Update()
{
  const rNo = useRef();
  const [rno, setRno] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const hRno = (event) => {setRno(event.target.value);}
  const hName = (event) => {setName(event.target.value);}
  const hMarks = (event) => {setMarks(event.target.value);}

  const save = (event) => {
    event.preventDefault();
    let r1 = ref(db);
    get(child(r1, "student/" + rno))
    .then( (ss) =>{
       if(ss.exists())
       { 
	 alert(rno + " already exists");
	 setRno("");
	 setName("");
	 setMarks("");
	 rNo.current.focus();
       }
       else
       {
	 let r2 = ref(db, "/student/" + rno);
	 let data = {rno, name, marks};
	 set(r2, data);
	 alert(rno + " record created");
	 setRno("");
	 setName("");
	 setMarks("");
	 rNo.current.focus();
       }
    })
    .catch(err=>console.log(err))
  }
  return(
    <>
      <center>
	<h1>Enter Student Info</h1>
	<form className="create" onSubmit={save}>
	  <input type="number" placeholder="Enter Roll Number" onChange={hRno} value={rno} ref={rNo}/>
	  <br/><br/>
	  <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
	  <br/><br/>
	  <input type="number" placeholder="Enter Marks" onChange={hMarks} value={marks}/>
	  <br/><br/>
	  <input type="submit"/>
	  <br/><br/>
	</form>
      </center>
    </>
  );
  
}

export default Update;