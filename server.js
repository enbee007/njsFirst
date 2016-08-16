var express = require("express");
var app = express();


var middleware = {
	authenticatiion : function(req,res,next){
		console.log("private route");
		next();
	},
	logger : function(req,res,next){
		console.log("Request: "+req.method+" by url : "+req.originalUrl+" \ntime: "+new Date().toString());
		next();
	}
};

app.use(middleware.logger);
app.use(express.static("./public"));




app.get("/about",middleware.authenticatiion,function(req,res){
	res.send("ABOUT US!");
});

app.listen(3000,function(){
	console.log("server started at 3000");
});