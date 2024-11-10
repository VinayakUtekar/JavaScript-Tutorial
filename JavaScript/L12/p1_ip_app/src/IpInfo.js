import {useState} from "react";
import axios from "axios";

function IpInfo() 
{
  const[msg, setMsg] = useState("");

  const get = (event) =>{
       event.preventDefault();
       let a1 = "https://ipinfo.io/json?";
       let a2 = "token=" + "3e1f86d502e7ab";
       let urladd = a1 + a2;
       axios.get(urladd)
       .then(res => {
	    let d = res.data;
            let city = d["city"];
            let state = d["region"];
	    let loc = d["loc"]
            let ans = "city = " + city + "        state = " + state + "   location = " + loc;
            setMsg(ans);
	    console.log(d);
           })
       .catch(err => console.log(err))
  }  

  return (
    <>
      <center>
        <h1> IP Info App </h1>
        <form onSubmit={get}>
 	  <input type="submit" value="Get Info"  className="btn" />
        </form>
	<h2>{msg}</h2>
      </center>
    </>
  );
}

export default IpInfo;
