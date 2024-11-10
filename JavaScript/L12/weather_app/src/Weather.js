import {useState, useRef} from "react";
import axios from "axios";

function Weather() 
{
  const[msg,setMsg] = useState("");
  const[city,setCity] = useState("");
  const rCity = useRef("");

  const find = (event) => 
  {
     event.preventDefault();
     if(city == "")
     {
	alert("City Name Cannot Be Empty.  Enter City Name");
	rCity.current.focus();
	setMsg("");
	setCity("");
	return;
     }
     if(city.trim().length == 0)
     {
	alert("City Name Cannot Be Empty.  Enter City Name");
	rCity.current.focus();
	setMsg("");
	setCity("");
	return;
     }
     let a1 = "https://api.openweathermap.org/data/2.5/weather";
     let a2 = "?q=" + city;
     let a3 = "&appid=" + "c6e315d09197cec231495138183954bd";
     let a4 = "&units=" + "metric";
     let urladd = a1 + a2 + a3 +a4;
     axios.get(urladd)
     .then(res => setMsg(res.data.main.temp))
     .catch(err => setMsg(err + "Check City Name")) 
  }
  const hCity = (event) => {setCity(event.target.value);}

  return (
    <>
      <center>
	<h1> Weather Info App </h1>
        <form onSubmit={find}>
	  <input type="text" placeholder="Enter city name" onChange={hCity} ref={rCity} value={city}/>
	  <br/><br/>
	  <input type="submit" value="Find" className="btn"/>
        </form>
	<h2>{msg}</h2>
      </center>
    </>
  );
}

export default Weather;
