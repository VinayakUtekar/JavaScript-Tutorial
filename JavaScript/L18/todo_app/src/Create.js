import {useState} from "react";
import {uid} from "uid";
import db from "./Fb";
import {ref,set} from "firebase/database";

function Create() 
{

  const [task, setTask] = useState("");
  const [msg, setMsg] = useState("");

  const hTask = (event) => {setTask(event.target.value);}
  const save = (event) => {
    event.preventDefault();
    let id = uid();
    let data = {id,task};
    let r = ref(db,"task/"+id);
    set(r,data);
    setMsg("Task Created");
    setTask("");
  }
  return (
    <>
     <center>
      <h1> Create Task </h1>
       <form onSubmit={save}>
           <textarea placeholder="Create Task" rows={5} cols={30} onChange={hTask} value={task}></textarea>
           <input type="submit" value="Save Task"/>
       </form>
       <h2>{msg}</h2>
     </center>
    </>
  );
}

export default Create;
