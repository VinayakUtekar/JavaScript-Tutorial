import {useState, useEffect} from "react";
import axios from "axios";
import Result from "./Result";

function News() 
{
  const[info,setInfo] = useState([]);

  useEffect(() => {
     let a1 = "https://newsapi.org/v2/top-headlines"
     let a2 = "?country=" + "in"
     let a3 = "&apiKey=" + "6a37849b182047839bd5bbcf6cc6e5c3";
     let urladd = a1 + a2 + a3 ;
     axios.get(urladd)
     .then(res => setInfo(res.data.articles))
     .catch(err => console.log(err + "err")) 
  },[]);

  return (
    <>
      <center>
	<h1> News Update App </h1>
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
