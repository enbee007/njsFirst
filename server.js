var express = require("express");
var app = express();


var middleware = require("./middleware.js");

app.use(middleware.logger);
app.use(express.static("./public"));




app.get("/about",middleware.authenticatiion,function(req,res){
	res.send("ABOUT US");
});

app.listen(3000,function(){
	console.log("server started at 3000");
});