import { useState } from "react";
import { ref, set} from "firebase/database";
import db from "./FbConfig";

function Course()
{
 
  const[name, setName] = useState("");
  const[course, setCourse] = useState("python");
  const[ans, setAns] = useState("");
 
  const hName = (event) => {setName(event.target.value);}
  const hCourse = (event) => {setCourse(event.target.value);}

  const save = (event) =>{
    event.preventDefault();
    let data = {name, course};
    let n = name + "-->" + new Date().toString();
    let r = ref(db, "course/" + n); 
    set(r,data);
    setAns("Thank You");
    setName("");
    setCourse("java");
  }
  return(
    <>
       <center>
	<h1> Enter Course Details </h1>
	<form onSubmit={save}>
	  <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
	  <br/><br/>
	  <input type="radio" name="f" value="java" defaultChecked={true} onChange={hCourse} checked={course == "java" ? true:false}/>Java
	  <input type="radio" name="f" value="python" onChange={hCourse} checked={course == "python" ? true:false}/>Python
	  <input type="radio" name="f" value="javascript"  onChange={hCourse} checked={course == "javascript" ? true:false}/>Javascript
	  <br/><br/>
	  <input type="submit"/>
	</form>
	<h1>{ans}</h1>
       </center>
    </>
  );
}
export default Course;