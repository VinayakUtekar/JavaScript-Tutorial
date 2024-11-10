const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());


app.get("/find",(req,res) => {
	let num = req.query.number;
	let ans = num % 2 == 0 ? "Even" : "Odd";
	res.json({"ans":ans})
})
app.listen(9000,() => {console.log("server ready to serve @ 9000")});