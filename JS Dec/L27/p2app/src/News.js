import {useState, useEffect} from "react";
import axios from "axios";
import Result from "./Result";

function News() 
{
  const[info,setInfo] = useState([]);
  const[country, setCountry] = useState("in");
  const hCountry = (event) => {setCountry(event.target.value);} 
  
  const show = (event) => {
     event.preventDefault();
     let a1 = "https://newsapi.org/v2/top-headlines"
     let a2 = "?country=" + country;
     let a3 = "&apiKey=" + "6a37849b182047839bd5bbcf6cc6e5c3";
     let urladd = a1 + a2 + a3 ;
     axios.get(urladd)
     .then(res => setInfo(res.data.articles))
     .catch(err => console.log(err + "err")) 
  }

  return (
    <>
      <center>
	<h1> News Update App </h1>
	 <form onSubmit={show}>
	  <input type="radio" name="c" value="in" onChange={hCountry} defaultChecked={true} />India
	  <input type="radio" name="c" value="us"  onChange={hCountry} />Usa
	  <input type="radio" name="c" value="id" onChange={hCountry} />Indonesia
	  <input type="radio" name="c" value="jap"  onChange={hCountry}/>Japan
	  <br/><br/> 
	  <input type="submit"/>
	  <hr/>
	 </form>
	  {
            info.map((a)=>(
		<>
		  <Result title={a.title} urlToImage={a.urlToImage} url={a.url}/>                 
		</>
	    ))
	}
      </center>
    </>
  );
}

export default News;
