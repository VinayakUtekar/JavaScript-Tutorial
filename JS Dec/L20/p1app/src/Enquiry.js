import {useState} from "react";
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {set,ref} from "firebase/database";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCNBnibzyNdHQaL-YX0WGuKFS-Xm2rNMO4",
  authDomain: "refbotp30dec22.firebaseapp.com",
  databaseURL: "https://refbotp30dec22-default-rtdb.firebaseio.com",
  projectId: "refbotp30dec22",
  storageBucket: "refbotp30dec22.appspot.com",
  messagingSenderId: "680762349090",
  appId: "1:680762349090:web:f3b4343c37bd38fdf0dc7b"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function Enquiry() 
{
  const[name,setName] = useState("");
  const[query,setQuery] = useState("");
  const[phone,setPhone] = useState("");
  const[otp,setOtp] = useState("");
  const[code,setCode] = useState("");

  const hName=(event)=>{setName(event.target.value);}
  const hQuery=(event)=>{setQuery(event.target.value);}
  const hPhone=(event)=>{setPhone(event.target.value);}
  const hOtp=(event)=>{setOtp(event.target.value);}

  const configureCaptcha = () =>{
   window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('sign-in-button',{
   'size':'inivisible',
   'callback':(response)=>{
   generate();
   console.log("Recaptca verified")
   },
    defaultCountry:"IN"
   });
  }
  
  const generate = (event) => {
     event.preventDefault();
     configureCaptcha();
     let pn = "+91" + phone;
     let av = window.recaptchaVerifier;
     firebase.auth().signInWithPhoneNumber(pn,av)
     .then(res => {
        setCode(res);
        console.log(res);
        console.log("Otp Send");
        alert("OTP Send");
    })
    .catch(err => {
        console.log(err);
   })
  }
 
  const check = (event) => {
     event.preventDefault();
     code.confirm(otp)
     .then(res=>{
        const d = new Date().toString();
        const n = name+"-->"+d;
        const data = {name,phone,query,d}
        set(ref(db,"enquiry/"+n),data)
        .then(res=>{
           console.log(res);
           alert("We Will Call You In 2 hrs");
           window.location.reload()
        })
        .catch(err => console.log(err));
   }) 
   .catch(err => {
        console.log(err);
        alert("Invalid OTP");
        window.location.reload()
   })
  }
  return (
    <>
    <center>
      <h1> Fill the Enqiry Form </h1>
      <form onSubmit={generate}>
         <div id="sign-in-button"></div>
         <input type="text" placeholder="Enter Name" onChange={hName} value={name}/>
         <br/><br/>
         <textarea placeholder="Enter Query" rows={3} cols={30} onChange={hQuery} value={query}></textarea>
         <br/><br/>
         <input type="number" placeholder="Enter Phone NUmber" onChange={hPhone} value={phone}/>
         <br/><br/>
         <input type="submit" value="Generate OTP"/>
         <br/><br/>
      </form>
      <form onSubmit={check}>
         <div id="sign-in-button"></div>
         <input type="text" placeholder="Enter OTP" onChange={hOtp} value={otp}/>
         <br/><br/>
         <input type="submit" value="Submit OTP"/>
         <br/><br/>
      </form>
    </center>
    </>
  );
}

export default Enquiry;
