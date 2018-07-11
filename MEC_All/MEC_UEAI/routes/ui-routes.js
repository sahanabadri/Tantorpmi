var service  = require ('../service/DefaultService.js');

var uiRoutes = function(app){
	this.app = app;
	this.serviceInstance = new service(app);
};

module.exports = uiRoutes;

uiRoutes.prototype.init = function() {
	var self = this;
	var app = this.app;

	// GET method of UEAI 
	app.get("/mx2/v1/app_list", function(req, res){
		self.serviceInstance.app_listGET(req.query, function(err, result){
			res.send(result);
		})
	})

	//POST method of UEAI
	app.post("/mx2/v1/app_contexts", function(req, res){
        var appContext = req.body;
		self.serviceInstance.app_contextsPOST(req, appContext, function(err, result){
			res.send(result)
		})
	})

 	app.put("/mx2/v1/app_contexts/:contextID",function (req,res) {
 		var contextID = req.params.contextID;
 		var appContext = req.body;

        self.serviceInstance.app_contextsContextIdPUT(req, contextID, appContext, function (err,result) {
            res.send(result);
        })
    });

    app.delete("/mx2/v1/app_contexts/:contextID",function (req,res) {
 		var contextID = req.params.contextID;

        self.serviceInstance.app_contextsContextIdDELETE(req, contextID, function (err,result) {
            res.send(result);
        })
    });
};