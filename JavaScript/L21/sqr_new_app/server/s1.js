const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());


app.get("/compute",(req,res) => {
	let num = req.query.number;
	let ans = num * num ;
	let d = new Date().toString();
	let msg = "Data = " + d +  '\n' + "num = " + num + " and Square = " + ans + '\n\n';
	fs.appendFile("Result.txt", msg, (err)=>{if (err) console.log(err)});
	res.json({"ans":"square = "+ans});
})
app.listen(9000,() => {console.log("server ready to serve @ 9000")});