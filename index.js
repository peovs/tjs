var express = require('express');
var app = express();
app.get('/',function(req,res){
	
	res.send(siHei(req));})
app.listen(80);
writeStatus(80);

function siHei(req){
	console.log("request:"+req.body);
	return 'hei';
}

function 	writeStatus(portNo){
	console.log("application is started on port:"+portNo);
	
}