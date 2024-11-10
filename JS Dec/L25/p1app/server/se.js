const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
 const url = "mongodb://27107";
 MongoClient.connect(url, (err,database) =>{
   if(err){
	console.log(err);
	res.send(err);
   }
   else
   {
	let dbo = database.db("ss_6jan23");
	let data = {"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg}
	dbo.collection("student").insertOne(data, (err, result) =>{
	  if(err)	res.send(err);
	  else		res.send(result);
	});
   }
 }); 
});

app.listen(9000, () => {console.log("ready");})