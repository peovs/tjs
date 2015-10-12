var express = require('express');
var app = express();
app.get('/',function(req,res){res.send(siHei());})
app.listen(3000);


function siHei(){
	
	return 'hei';
}