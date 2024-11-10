	function convert(event){
	  event.preventDefault();
	  let usd = document.getElementById("usd");
	  let ans = document.getElementById("ans");
	  if(usd.value=="")
	  {
	    alert("Inavlis Input");
	    usd.focus();
	    ans.innerHTML = ""; 
            return;
	  }
	  let aid = parseFloat(usd.value);
	  if(aid<=0.0)
	  {
	    alert("Inavlis Input");
	    usd.value="";
	    usd.focus();
	    ans.innerHTML = ""; 
            return;
	  }
	  let usdrate = 0.0;
	  let urladd = "https://api.exchangerate-api.com/v4/latest/USD";
	  fetch(urladd)
	  .then(res => res.json())
	  .then(data => { 
			  console.log(data.rates.INR);
			  usdrate = parseFloat(data.rates.INR);  	
	  		  let air = aid * usdrate;
	  		  let msg = "amount in Rs " + air.toFixed(2);
	  		  ans.innerHTML = msg;
	  })
	  .catch(err => {
		console.log("issue = " + err);
		ans.innerHTML = "Issue = " + err; 
	  })
	}