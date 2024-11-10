import {useState} from "react";
import axios from "axios";

function News() 
{
  const[msg,setMsg] = useState([]);

  const show = (event) => 
  {
     event.preventDefault();
     let a1 = "https://newsapi.org/v2/top-headlines";
     let a2 = "?country=" + "in";
     let a3 = "&apiKey=" + "dcf42dec7d614e778d3dcd8616ab8182";
     let urladd = a1 + a2 + a3 ;
     axios.get(urladd)
     .then(res => setMsg(res.data))
     .catch(err => setMsg(err + "Check City Name")) 
  }

  return (
    <>
      <center>
	<h1> News Update App </h1>
        <form onSubmit={show}>
	  <input type="submit" value="Show" className="btn"/>
        </form>
	{
            msg.map((n)=>(
		<div>
		  <h2> {n.title} </h2>
		  <a href={n.url}>Readmore</a>
		  <img src={n.urlTolmage}></img>
		  <hr/><hr/>
		</div>
	    ))
	}
      </center>
    </>
  );
}

export default News;
