const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req,res)=>{
res.setHeader("Access-Control-Allow-Origin","*");
let path = url.parse(req.url,true);
if (path.pathname == "/compute")
{
	let num = path.query.number;
	let ans = num * num ;
	res.write("square = " + ans);
	let d = new Date().toString();
	let msg = "Data = " + d + + '\n' + num + " and Square = " + ans + '\n\n';
	fs.appendFile("Result.txt", msg, (err)=>{if (err) console.log(err)});
	res.end();
}
});

server.listen(9000,() => {console.log("server ready to serve @ 9000")});