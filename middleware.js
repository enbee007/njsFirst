module.exports = {
	authenticatiion : function(req,res,next){
		console.log("private route");
		next();
	},
	logger : function(req,res,next){
		console.log("Request: "+req.method+" by url : "+req.originalUrl+" \ntime: "+new Date().toString());
		next();
	}
};