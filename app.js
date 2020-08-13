var bodyParser     = require("body-parser"),
	mongoose       = require("mongoose"),
	methodOverride = require("method-override"),
	sanitizer  	   = require("express-sanitizer"),
	app		       = require("express")();

//server requirements

const http 	   = require("http");
const hostname = "127.0.0.1";
const port     = 3000;

//server 

app.listen(port, hostname, function(){
	console.log("Server has Started")
});