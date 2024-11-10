import {useState, useEffect} from "react";
import {ref, get, child, remove} from "firebase/database";
import db from "./FirebaseConfig";

function Home()
{
  const [info, setInfo] = useState([]);

  useEffect(()=>{
    let r = ref(db);
    get(child(r, "student/"))
    .then( (ss) =>{
	if(ss.exists())
	{
	  setInfo([]);
	  let data = ss.val();
	  console.log("data = ", data);
	  Object.values(data).map((d) => {
	    setInfo((olddata) => [...olddata, d]);
          });
	}
	else
	{
	  console.log("No data found");
	}
    })
    .catch(err=>console.log(err))
  }, []);

  const delStu = (rno) => {
    let r = ref(db, "student/" + rno);
    remove(r)
    .then( () =>{
      alert(rno + "  deleted");
      window.location.reload();
    })
    .catch(err=>console.log(err))
  }

  return(
    <>
      <center>
        <h1>Home</h1>
	<table border="5" style={{width:'70%'}}>
	 <tr>
	   <th>Rno</th>
	   <th>Name</th>
	   <th>Marks</th>
	   <th>Delete</th>
	 </tr>
	 {
	   info.map((e =>
	     <tr style={{"text-align":"center"}}>
		<td>{e.rno}</td>
		<td>{e.name}</td>
		<td>{e.marks}</td>
		<td><button onClick = {() => {if(window.confirm('Are you Sure'))delStu(e.rno)}}>Delete</button></td>
	     </tr>
	   ))
	 }
	</table>
      </center>
    </>
  );
}

export default Home;