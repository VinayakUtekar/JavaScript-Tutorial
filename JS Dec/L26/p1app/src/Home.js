import {useState, useRef, useEffect} from "react";
import axios from "axios";

function Home()
{
  const[Info, setInfo] = useState([]);
  useEffect(() => {
    let urladd = "http://localhost:9000/read";
    axios.get(urladd)
    .then(res => setInfo(res.data))
    .catch(err => console.log(err))
  },[]);

  const deleteStudent = (rno) => {
    let urladd = "http://localhost:9000/remove";
    axios.delete(urladd,{data:{rno}})
    .then(res => {
    	alert("record deleted");
	window.location.reload();
    })
    .catch(err => console.log(err))
  }
  return(
    <>
      <center>
 	<h1> Home Page</h1>
	<table border="5" style={{width:'70%'}}>
	 <tr>
	   <th>Rno</th>
	   <th>Name</th>
	   <th>Marks</th>
	   <th>Delete</th>
	 </tr>
	 {
	   Info.map((e =>
	     <tr style={{"text-align":"center"}}>
		<td>{e._id}</td>
		<td>{e.name}</td>
		<td>{e.marks}</td>
		<td><button onClick = {() => {if(window.confirm('Are you Sure'))deleteStudent(e._id)}}>Delete</button></td>
	     </tr>
	   ))
	 }
	</table>
      </center>
    </>
  );

}

export default Home;