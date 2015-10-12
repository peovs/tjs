var express = require('express');

var port = (process.env.PORT || '3000');
 
var app = express();
app.get('/',function(req,res){
	
	res.send(siHei(req));})
app.listen(port);
writeStatus(port);

function siHei(req){
	console.log("request:"+req.body);
	return 'hei';
}

function 	writeStatus(portNo){
	console.log("application is started on port:"+portNo);
	
}