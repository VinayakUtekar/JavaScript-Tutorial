import {useState} from "react";
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {set,ref} from "firebase/database";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
  apiKey: "AIzaSyCslFww8quyZdaDTsqidwAJU2jyRWxYkEs",
  authDomain: "otpreact12oct22.firebaseapp.com",
  databaseURL: "https://otpreact12oct22-default-rtdb.firebaseio.com",
  projectId: "otpreact12oct22",
  storageBucket: "otpreact12oct22.appspot.com",
  messagingSenderId: "898912934034",
  appId: "1:898912934034:web:e9b300add8bcfce4cf6e4b"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function Enquiry() 
{
  const[name,setName] = useState("");
  const[query,setQuery] = useState("");
  const[phone,setPhone] = useState("");
  const[otp,setOtp] = useState("");
  const[final,setFinal] = useState("");

  const hName=(event)=>{setName(event.target.value);}
  const hQuery=(event)=>{setQuery(event.target.value);}
  const hPhone=(event)=>{setPhone(event.target.value);}
  const hOtp=(event)=>{setOtp(event.target.value);}

  const configureCaptcha = () =>{
   window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('sign-in-button',{
   'size':'inivisible',
   'callback':(response)=>{
   sendOtp();
   console.log("Recaptca verified")
   },
    defaultCountry:"IN"
   });
  }
  
  const sendOtp = (event) => {
     event.preventDefault();
     configureCaptcha();
     let pn = "+91" + phone;
     let av = window.recaptchaVerifier;
     firebase.auth().signInWithPhoneNumber(pn,av)
     .then(res => {
        setFinal(res);
        console.log(res);
        console.log("Otp Send");
        alert("OTP Send");
    })
    .catch(err => {
        console.log(err);
   })
  }
 
  const submitOtp = (event) => {
     event.preventDefault();
     final.confirm(otp)
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
      <form onSubmit={sendOtp}>
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
      <form onSubmit={submitOtp}>
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
