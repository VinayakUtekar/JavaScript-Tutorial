import {useState, useEffect} from "react";
import {get, ref, child} from "firebase/database";
import db from "./Fb";

function Home() 
{

  const [info, setInfo] = useState([]);

  useEffect( () => {
   let dbref = ref(db);
   get(child(dbref,"task/"))
   .then((snapshot)=>{
       if (snapshot.exists())
       {
          setInfo([]);    
          let data = snapshot.val();
          Object.values(data).map((da) =>{
                 setInfo((oldArray)=>[...oldArray,da])
          })
       }
       else
       {
          console.log("No Data Found");
       }
   })
   .catch(err => console.log(err))
   },[]);

  return (
    <>
     <center>
      <h1> Home Page </h1>
       <table border="5" style={{width:"60%"}}>
         <tr>
             <th>Task Description</th>
         </tr>
         {
           info.map((e=>
           <tr>
                <td>{e.task}</td>
           </tr>
           ))
         }
       </table>
     </center>
    </>
  );
}

export default Home;
